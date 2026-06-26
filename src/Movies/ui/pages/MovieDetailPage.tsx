import { observer } from 'mobx-react-lite'

import { AsyncState, ErrorBoundary, NotFoundPage, PageContainer } from '../../../Common'
import { CastCarousel } from '../components/CastCarousel'
import { ContentRow } from '../components/ContentRow'
import { MovieDetailHeader } from '../components/MovieDetailHeader'
import { TrailerModal } from '../components/TrailerModal'
import { useMovieDetailController } from '../controllers/useMovieDetailController'

const MovieDetailPageComponent = () => {
  const {
    movie,
    //movieStatus,
    movieError,
    credits,
    creditsStatus,
    creditsError,
    similar,
    similarStatus,
    similarError,
    recommendations,
    recommendationsStatus,
    recommendationsError,
    trailerKey,
    pageStatus,
    pageError,
    isTrailerOpen,
    openTrailer,
    closeTrailer,
    retryCredits,
    retrySimilar,
    retryRecommendations,
  } = useMovieDetailController()

  if (pageStatus === 'notFound') {
    return (
      <NotFoundPage />
    )
  }

  if (pageStatus === 'loading' || pageStatus === 'idle') {
    return (
      <PageContainer>
        <AsyncState status="loading" loadingText="Loading movie details..." />
      </PageContainer>
    )
  }

  if (pageStatus === 'error' || !movie) {
    return (
      <PageContainer>
        <AsyncState status="error" error={pageError ?? movieError ?? 'Failed to load movie'} />
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <ErrorBoundary fallbackTitle="Unable to load movie header">
        <MovieDetailHeader
          movie={movie}
          trailerKey={trailerKey}
          onPlayTrailer={trailerKey ? openTrailer : undefined}
        />
      </ErrorBoundary>

      <ErrorBoundary fallbackTitle="Unable to load cast" onRetry={retryCredits}>
        <CastCarousel
          cast={credits}
          status={creditsStatus}
          error={creditsError}
          onRetry={retryCredits}
        />
      </ErrorBoundary>

      <ErrorBoundary fallbackTitle="Unable to load similar movies" onRetry={retrySimilar}>
        <ContentRow
          title="Similar Movies"
          items={similar}
          status={similarStatus}
          error={similarError}
          onRetry={retrySimilar}
        />
      </ErrorBoundary>

      <ErrorBoundary
        fallbackTitle="Unable to load recommendations"
        onRetry={retryRecommendations}
      >
        <ContentRow
          title="Recommended"
          items={recommendations}
          status={recommendationsStatus}
          error={recommendationsError}
          onRetry={retryRecommendations}
        />
      </ErrorBoundary>

      <TrailerModal
        isOpen={isTrailerOpen}
        videoKey={trailerKey}
        title={movie.title}
        onClose={closeTrailer}
      />
    </PageContainer>
  )
}

export const MovieDetailPage = observer(MovieDetailPageComponent)