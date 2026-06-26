import { AppButton } from '../../../../Common'
import type { MovieDetail } from '../../../../Common/core/types/Tmdb.types'
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
  movie: MovieDetail
  trailerKey?: string | null
  onPlayTrailer?: () => void
}

export const MovieDetailHeader = ({ movie, trailerKey, onPlayTrailer }: Props) => {
  const backdropUrl = getBackdropUrl(movie.backdrop_path, 'w1280')
  const runtimeLabel = movie.runtime ? `${movie.runtime} min` : null
  const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : null

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
          {movie.overview ? <Overview>{movie.overview}</Overview> : null}
          <Actions>
            {trailerKey && onPlayTrailer ? (
              <AppButton type="button" onClick={onPlayTrailer}>
                Play Trailer
              </AppButton>
            ) : null}
            <WatchlistButton type="button" disabled title="Watchlist coming soon">
              + Watchlist
            </WatchlistButton>
          </Actions>
        </Info>
      </Content>
    </HeaderRoot>
  )
}