import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation('movies')

  if (!movie) {
    return null
  }

  const backdropUrl = getBackdropUrl(movie.backdrop_path, 'w1280')
  const overviewText = movie.overview?.trim() || t('detail.noOverview')


  return (
    <BannerRoot aria-label={t('hero.featuredMovie', { title: movie.title })}>
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
              {t('hero.playTrailer')}
            </AppButton>
          ) : null}
        </Actions>
      </Content>
    </BannerRoot>
  )
}