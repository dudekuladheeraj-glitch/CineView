import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'

import { AppButton } from '../../../../Common'
import type { MovieSummary } from '../../../../Common/core/types/Tmdb.types'
import { getBackdropUrl } from '../../../../Common/core/utils/TmdbImage.utils'
import { useCollectionStore } from '../../../../Collection/data/stores/providers'
import {
  Actions,
  BackdropFallback,
  BackdropImage,
  BannerRoot,
  Content,
  MetaRow,
  Overlay,
  Overview,
  RatingBadge,
  Title,
  WatchlistButton,
} from './StyledComponents'

interface Props {
  movie: MovieSummary | null
  trailerKey?: string | null
  onPlayTrailer?: () => void
}

const HeroBannerComponent = ({ movie, trailerKey, onPlayTrailer }: Props) => {
  const { t } = useTranslation(['movies', 'common'])
  const collectionStore = useCollectionStore()

  if (!movie) return null

  const inWatchlist = collectionStore.isInWatchlist(movie.id, 'movie')
  const backdropUrl = getBackdropUrl(movie.backdrop_path, 'w1280')
  const overviewText = movie.overview?.trim() || t('movies:detail.noOverview')

  const handleToggleWatchlist = () => {
    collectionStore.toggleWatchlist({
      mediaId: movie.id,
      mediaType: 'movie',
      cachedTitle: movie.title,
      cachedPoster: movie.poster_path,
    })
  }

  return (
    <BannerRoot aria-label={t('movies:hero.featuredMovie', { title: movie.title })}>
      {backdropUrl ? <BackdropImage src={backdropUrl} alt="" /> : <BackdropFallback />}
      <Overlay />
      <Content>
        <Title>{movie.title}</Title>
        <MetaRow>
          <RatingBadge>★ {movie.vote_average.toFixed(1)}</RatingBadge>
        </MetaRow>
        <Overview>{overviewText}</Overview>
        <Actions>
          {trailerKey && onPlayTrailer ? (
            <AppButton type="button" onClick={onPlayTrailer}>
              {t('movies:hero.playTrailer')}
            </AppButton>
          ) : null}
          <WatchlistButton
            type="button"
            $active={inWatchlist}
            onClick={handleToggleWatchlist}
          >
            {inWatchlist ? t('common:watchlist.remove') : t('common:watchlist.add')}
          </WatchlistButton>
        </Actions>
      </Content>
    </BannerRoot>
  )
}

export const HeroBanner = observer(HeroBannerComponent)