import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'

import { ErrorBoundary, PageContainer } from '../../../Common'
import { ContentRow } from '../components/ContentRow'
import { GenreFilter } from '../components/GenreFilter'
import { HeroBanner } from '../components/HeroBanner'
import { TrailerModal } from '../components/TrailerModal'
import { useHomeController } from '../controllers/useHomeController'

const HomePageComponent = () => {
  const { t } = useTranslation('movies')
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
      <ErrorBoundary fallbackTitle={t('home.featuredError')}>
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
          fallbackTitle={t('home.rowError', { title: row.title })}
          onRetry={row.onRetry}
        >
          <ContentRow
            title={row.title}
            items={row.items}
            status={row.status}
            error={row.error}
            onRetry={row.onRetry}
            emptyText={
              selectedGenreId ? t('home.noGenreMatch') : t('home.noMovies')
            }
          />
        </ErrorBoundary>
      ))}

      <TrailerModal
        isOpen={isTrailerOpen}
        videoKey={heroTrailerKey}
        title={heroMovie?.title ?? t('trailer.defaultTitle')}
        onClose={closeTrailer}
      />
    </PageContainer>
  )
}

export const HomePage = observer(HomePageComponent)