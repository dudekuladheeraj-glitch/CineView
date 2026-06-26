import { observer } from 'mobx-react-lite'

import { AsyncState, ErrorBoundary, PageContainer } from '../../../Common'
import { SearchBar } from '../components/SearchBar'
import { SearchResultsSection } from '../components/SearchResultsSection'
import { useSearchController } from '../controllers/useSearchController'

const SearchPageComponent = () => {
  const {
    query,
    status,
    error,
    movies,
    tvShows,
    people,
    recentSearches,
    hasQuery,
    updateQuery,
    selectRecentSearch,
  } = useSearchController()

  const showEmpty =
    hasQuery &&
    status === 'success' &&
    movies.length === 0 &&
    tvShows.length === 0 &&
    people.length === 0

  return (
    <PageContainer>
      <SearchBar
        value={query}
        recentSearches={recentSearches}
        onChange={updateQuery}
        onRecentSelect={selectRecentSearch}
      />

{!hasQuery ? (
  <p style={{ textAlign: 'center', color: '#6b7280' }}>
    Start typing to search the TMDB catalogue
  </p>
) : null}

      {showEmpty ? (
        <AsyncState status="success" isEmpty emptyText="No results found for your search" />
      ) : null}

      {hasQuery && status === 'loading' ? (
        <AsyncState status="loading" loadingText="Searching..." />
      ) : null}

      {hasQuery && status === 'error' ? (
        <AsyncState status="error" error={error ?? 'Search failed'} />
      ) : null}

      {hasQuery && status === 'success' ? (
        <>
          <ErrorBoundary fallbackTitle="Unable to load movie results">
            <SearchResultsSection
              title="Movies"
              type="movie"
              items={movies}
              status="success"
            />
          </ErrorBoundary>

          <ErrorBoundary fallbackTitle="Unable to load TV show results">
            <SearchResultsSection
              title="TV Shows"
              type="tv"
              items={tvShows}
              status="success"
            />
          </ErrorBoundary>

          <ErrorBoundary fallbackTitle="Unable to load people results">
            <SearchResultsSection
              title="People"
              type="person"
              items={people}
              status="success"
            />
          </ErrorBoundary>
        </>
      ) : null}
    </PageContainer>
  )
}

export const SearchPage = observer(SearchPageComponent)