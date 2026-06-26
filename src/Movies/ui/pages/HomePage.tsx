import { observer } from 'mobx-react-lite'

import { ErrorBoundary, PageContainer } from '../../../Common'
import { ContentRow } from '../components/ContentRow'
import { GenreFilter } from '../components/GenreFilter'
import { HeroBanner } from '../components/HeroBanner'
import { TrailerModal } from '../components/TrailerModal'
import { useHomeController } from '../controllers/useHomeController'

const HomePageComponent = () => {
  const {
    heroMovie,
    heroTrailerKey,
    genres,
    rows,
    selectedGenreId,
    setSelectedGenreId,
    isTrailerOpen,
    openTrailer,
    closeTrailer,
  } = useHomeController()

  return (
    <PageContainer>
      <ErrorBoundary fallbackTitle="Unable to load featured movie">
        <HeroBanner
          movie={heroMovie}
          trailerKey={heroTrailerKey}
          onPlayTrailer={heroTrailerKey ? openTrailer : undefined}
        />
      </ErrorBoundary>

      <GenreFilter
        genres={genres}
        activeGenreId={selectedGenreId}
        onSelect={setSelectedGenreId}
      />

      {rows.map((row) => (
        <ErrorBoundary
          key={row.key}
          fallbackTitle={`Unable to load ${row.title}`}
          onRetry={row.onRetry}
        >
          <ContentRow
            title={row.title}
            items={row.items}
            status={row.status}
            error={row.error}
            onRetry={row.onRetry}
            emptyText={
              selectedGenreId
                ? 'No movies match the selected genre'
                : 'No movies to show'
            }
          />
        </ErrorBoundary>
      ))}

      <TrailerModal
        isOpen={isTrailerOpen}
        videoKey={heroTrailerKey}
        title={heroMovie?.title ?? 'Trailer'}
        onClose={closeTrailer}
      />
    </PageContainer>
  )
}

export const HomePage = observer(HomePageComponent)
