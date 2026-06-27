import { useTranslation } from 'react-i18next'

import { getPosterUrl } from '../../../core/utils/TmdbImage.utils'
import { PlaceholderContent, PosterImage, PosterWrapper } from './StyledComponents'

interface Props {
  path: string | null | undefined
  alt: string
  size?: 'w342' | 'w500'
  width?: string
  aspectRatio?: string
  className?: string
}

export const MediaPoster = ({
  path,
  alt,
  size = 'w342',
  width,
  aspectRatio,
  className,
}: Props) => {
  const { t } = useTranslation('common')
  const imageUrl = getPosterUrl(path ?? null, size)

  return (
    <PosterWrapper $width={width} $aspectRatio={aspectRatio} className={className}>
      {imageUrl ? (
        <PosterImage src={imageUrl} alt={alt} loading="lazy" />
      ) : (
        <PlaceholderContent aria-label={alt}>{t('media.noImage')}</PlaceholderContent>
      )}
    </PosterWrapper>
  )
}