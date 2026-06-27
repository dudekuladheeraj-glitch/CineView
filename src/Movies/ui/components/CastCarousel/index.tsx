import { useTranslation } from 'react-i18next'

import { AsyncState } from '../../../../Common'
import type { AsyncStatus } from '../../../../Common/core/types/Common.types'
import type { CastMember } from '../../../../Common/core/types/Tmdb.types'
import { MediaPoster } from '../../../../Common/ui/components/MediaPoster'
import { CastCard, CastCharacter, CastName, ScrollTrack, Section, Title } from './StyledComponents'

interface Props {
  cast: CastMember[]
  status: AsyncStatus
  error?: string | null
  onRetry?: () => void
}

export const CastCarousel = ({ cast, status, error, onRetry }: Props) => {
  const { t } = useTranslation('movies')

  return (
    <Section aria-label={t('cast.ariaLabel')}>
      <Title>{t('cast.title')}</Title>
      <AsyncState
        status={status}
        error={error}
        isEmpty={status === 'success' && cast.length === 0}
        emptyText={t('cast.empty')}
        onRetry={onRetry}
      >
        <ScrollTrack>
          {cast.slice(0, 15).map((member) => (
            <CastCard key={member.id}>
              <MediaPoster
                path={member.profile_path}
                alt={member.name}
                width="120px"
                aspectRatio="2 / 3"
              />
              <CastName>{member.name}</CastName>
              <CastCharacter>{member.character}</CastCharacter>
            </CastCard>
          ))}
        </ScrollTrack>
      </AsyncState>
    </Section>
  )
}