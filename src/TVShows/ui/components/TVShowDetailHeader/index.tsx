import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'

import type { TvDetail } from '../../../../Common/core/types/Tmdb.types'
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
  tvShow: TvDetail
}

const TVShowDetailHeaderComponent = ({ tvShow }: Props) => {
  const { t } = useTranslation(['tvShows', 'common'])
  const collectionStore = useCollectionStore()
  const inWatchlist = collectionStore.isInWatchlist(tvShow.id, 'tv')

  const overviewText = tvShow.overview?.trim() || t('tvShows:detail.noOverview')
  const backdropUrl = getBackdropUrl(tvShow.backdrop_path, 'w1280')
  const firstAirYear = tvShow.first_air_date ? tvShow.first_air_date.slice(0, 4) : null

  const handleToggleWatchlist = () => {
    collectionStore.toggleWatchlist({
      mediaId: tvShow.id,
      mediaType: 'tv',
      cachedTitle: tvShow.name,
      cachedPoster: tvShow.poster_path,
    })
  }

  return (
    <HeaderRoot>
      {backdropUrl ? <BackdropImage src={backdropUrl} alt="" /> : <BackdropFallback />}
      <Overlay />
      <Content>
        <MediaPoster path={tvShow.poster_path} alt={tvShow.name} width="180px" />
        <Info>
          <Title>{tvShow.name}</Title>
          {tvShow.tagline ? <Tagline>{tvShow.tagline}</Tagline> : null}
          <MetaRow>
            <MetaBadge>★ {tvShow.vote_average.toFixed(1)}</MetaBadge>
            {firstAirYear ? <MetaBadge>{firstAirYear}</MetaBadge> : null}
            {tvShow.number_of_seasons ? (
              <MetaBadge>{t('tvShows:seasonCount', { count: tvShow.number_of_seasons })}</MetaBadge>
            ) : null}
            {tvShow.genres?.map((genre) => (
              <MetaBadge key={genre.id}>{genre.name}</MetaBadge>
            ))}
          </MetaRow>
          <Overview>{overviewText}</Overview>
          <Actions>
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

export const TVShowDetailHeader = observer(TVShowDetailHeaderComponent)
