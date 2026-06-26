import { AppButton } from '../../../../Common'
import type { MovieSummary } from '../../../../Common/core/types/Tmdb.types'
import { getBackdropUrl } from '../../../../Common/core/utils/TmdbImage.utils'
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
} from './StyledComponents'

interface Props {
  movie: MovieSummary | null
  trailerKey?: string | null
  onPlayTrailer?: () => void
}

export const HeroBanner = ({ movie, trailerKey, onPlayTrailer }: Props) => {
  if (!movie) {
    return null
  }

  const backdropUrl = getBackdropUrl(movie.backdrop_path, 'w1280')

  return (
    <BannerRoot aria-label={`Featured movie: ${movie.title}`}>
      {backdropUrl ? <BackdropImage src={backdropUrl} alt="" /> : <BackdropFallback />}
      <Overlay />
      <Content>
        <Title>{movie.title}</Title>
        <MetaRow>
          <RatingBadge>★ {movie.vote_average.toFixed(1)}</RatingBadge>
        </MetaRow>
        {movie.overview ? <Overview>{movie.overview}</Overview> : null}
        <Actions>
          {trailerKey && onPlayTrailer ? (
            <AppButton type="button" onClick={onPlayTrailer}>
              Play Trailer
            </AppButton>
          ) : null}
        </Actions>
      </Content>
    </BannerRoot>
  )
}
