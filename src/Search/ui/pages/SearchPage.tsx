import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'

import { AsyncState, ErrorBoundary, PageContainer } from '../../../Common'
import { SearchBar } from '../components/SearchBar'
import { SearchResultsSection } from '../components/SearchResultsSection'
import { useSearchController } from '../controllers/useSearchController'
import { IdleHint } from './StyledComponents'

const SearchPageComponent = () => {
  const { t } = useTranslation('search')
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

      {!hasQuery ? <IdleHint>{t('idleHint')}</IdleHint> : null}

      {showEmpty ? (
        <AsyncState status="success" isEmpty emptyText={t('noResults')} />
      ) : null}

      {hasQuery && status === 'loading' ? (
        <AsyncState status="loading" loadingText={t('searching')} />
      ) : null}

      {hasQuery && status === 'error' ? (
        <AsyncState status="error" error={error ?? t('searchFailed')} />
      ) : null}

      {hasQuery && status === 'success' ? (
        <>
          <ErrorBoundary fallbackTitle={t('errors.movies')}>
            <SearchResultsSection
              title={t('sections.movies')}
              type="movie"
              items={movies}
              status="success"
            />
          </ErrorBoundary>

          <ErrorBoundary fallbackTitle={t('errors.tvShows')}>
            <SearchResultsSection
              title={t('sections.tvShows')}
              type="tv"
              items={tvShows}
              status="success"
            />
          </ErrorBoundary>

          <ErrorBoundary fallbackTitle={t('errors.people')}>
            <SearchResultsSection
              title={t('sections.people')}
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