// import { AppButton } from '../../../../Common'
import type { TvDetail } from '../../../../Common/core/types/Tmdb.types'
import { getBackdropUrl } from '../../../../Common/core/utils/TmdbImage.utils'
import { MediaPoster } from '../../../../Common/ui/components/MediaPoster'
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

export const TVShowDetailHeader = ({ tvShow }: Props) => {
  const backdropUrl = getBackdropUrl(tvShow.backdrop_path, 'w1280')
  const firstAirYear = tvShow.first_air_date ? tvShow.first_air_date.slice(0, 4) : null

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
              <MetaBadge>{tvShow.number_of_seasons} Seasons</MetaBadge>
            ) : null}
            {tvShow.genres?.map((genre) => (
              <MetaBadge key={genre.id}>{genre.name}</MetaBadge>
            ))}
          </MetaRow>
          {tvShow.overview ? <Overview>{tvShow.overview}</Overview> : null}
          <Actions>
            <WatchlistButton type="button" disabled title="Watchlist coming soon">
              + Watchlist
            </WatchlistButton>
          </Actions>
        </Info>
      </Content>
    </HeaderRoot>
  )
}