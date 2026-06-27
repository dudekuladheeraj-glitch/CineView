import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'

import { AsyncState, ErrorBoundary, NotFoundPage, PageContainer } from '../../../Common'
import { CastCarousel } from '../components/CastCarousel'
import { ContentRow } from '../components/ContentRow'
import { MovieDetailHeader } from '../components/MovieDetailHeader'
import { TrailerModal } from '../components/TrailerModal'
import { useMovieDetailController } from '../controllers/useMovieDetailController'

const MovieDetailPageComponent = () => {
  const { t } = useTranslation('movies')
  const {
    movie,
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
    return <NotFoundPage />
  }

  if (pageStatus === 'loading') {
    return (
      <PageContainer>
        <AsyncState status="loading" loadingText={t('detail.loading')} />
      </PageContainer>
    )
  }

  if (pageStatus === 'error' || !movie) {
    return (
      <PageContainer>
        <AsyncState
          status="error"
          error={pageError ?? movieError ?? t('detail.loadFailed')}
        />
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <ErrorBoundary fallbackTitle={t('errors.header')}>
        <MovieDetailHeader
          movie={movie}
          trailerKey={trailerKey}
          onPlayTrailer={trailerKey ? openTrailer : undefined}
        />
      </ErrorBoundary>

      <ErrorBoundary fallbackTitle={t('errors.cast')} onRetry={retryCredits}>
        <CastCarousel
          cast={credits}
          status={creditsStatus}
          error={creditsError}
          onRetry={retryCredits}
        />
      </ErrorBoundary>

      <ErrorBoundary fallbackTitle={t('errors.similar')} onRetry={retrySimilar}>
        <ContentRow
          title={t('detail.similarMovies')}
          items={similar}
          status={similarStatus}
          error={similarError}
          onRetry={retrySimilar}
        />
      </ErrorBoundary>

      <ErrorBoundary fallbackTitle={t('errors.recommendations')} onRetry={retryRecommendations}>
        <ContentRow
          title={t('detail.recommended')}
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