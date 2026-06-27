import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'

import { AppButton } from '../../../../Common'
import type { MovieDetail } from '../../../../Common/core/types/Tmdb.types'
import { getBackdropUrl } from '../../../../Common/core/utils/TmdbImage.utils'
import { MediaPoster } from '../../../../Common/ui/components/MediaPoster'
import { useCollectionStore } from '../../../../Collection/data/stores/providers'
import {
  Actions,
  BackdropFallback,
  BackdropImage,
  Content,
  HeaderRoot,
  Info,
  MetaBadge,
  MetaRow,
  Overlay,
  Overview,
  Tagline,
  Title,
  WatchlistButton,
} from './StyledComponents'

interface Props {
  movie: MovieDetail
  trailerKey?: string | null
  onPlayTrailer?: () => void
}

const MovieDetailHeaderComponent = ({ movie, trailerKey, onPlayTrailer }: Props) => {
  const { t } = useTranslation(['movies', 'common'])
  const collectionStore = useCollectionStore()
  const inWatchlist = collectionStore.isInWatchlist(movie.id, 'movie')

  const overviewText = movie.overview?.trim() || t('detail.noOverview')
  const backdropUrl = getBackdropUrl(movie.backdrop_path, 'w1280')
  const runtimeLabel = movie.runtime
    ? t('movies:detail.runtimeMinutes', { count: movie.runtime })
    : null
  const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : null

  const handleToggleWatchlist = () => {
    collectionStore.toggleWatchlist({
      mediaId: movie.id,
      mediaType: 'movie',
      cachedTitle: movie.title,
      cachedPoster: movie.poster_path,
    })
  }

  return (
    <HeaderRoot>
      {backdropUrl ? <BackdropImage src={backdropUrl} alt="" /> : <BackdropFallback />}
      <Overlay />
      <Content>
        <MediaPoster path={movie.poster_path} alt={movie.title} width="180px" />
        <Info>
          <Title>{movie.title}</Title>
          {movie.tagline ? <Tagline>{movie.tagline}</Tagline> : null}
          <MetaRow>
            <MetaBadge>★ {movie.vote_average.toFixed(1)}</MetaBadge>
            {runtimeLabel ? <MetaBadge>{runtimeLabel}</MetaBadge> : null}
            {releaseYear ? <MetaBadge>{releaseYear}</MetaBadge> : null}
            {movie.genres?.map((genre) => (
              <MetaBadge key={genre.id}>{genre.name}</MetaBadge>
            ))}
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
              {inWatchlist
                ? t('common:watchlist.remove')
                : t('common:watchlist.add')}
            </WatchlistButton>
          </Actions>
        </Info>
      </Content>
    </HeaderRoot>
  )
}

export const MovieDetailHeader = observer(MovieDetailHeaderComponent)
