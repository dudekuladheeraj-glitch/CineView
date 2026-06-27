import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'

import { AsyncState, formatLocaleDate, MediaPoster } from '../../../../Common'
import type { AsyncStatus } from '../../../../Common/core/types/Common.types'
import type { Episode } from '../../../../Common/core/types/Tmdb.types'
import { usePreferencesStore } from '../../../../Preferences/data/stores/providers'
import {
  Checkbox,
  EpisodeCard,
  EpisodeMeta,
  EpisodeOverview,
  EpisodeTitle,
  Section,
  Title,
} from './StyledComponents'

interface Props {
  seasonTitle: string
  episodes: Episode[]
  status: AsyncStatus
  error?: string | null
}

const EpisodeListComponent = ({ seasonTitle, episodes, status, error }: Props) => {
  const { t } = useTranslation(['tvShows', 'common'])
  const preferencesStore = usePreferencesStore()
  const language = preferencesStore.preferences.language



  return (
    <Section aria-label={t('tvShows:episodes.sectionAria', { seasonTitle })}>
      <Title>{seasonTitle}</Title>
      <AsyncState
        status={status}
        error={error}
        isEmpty={status === 'success' && episodes.length === 0}
        emptyText={t('tvShows:episodes.empty')}
      >
       {episodes.map((episode) => {
  const overviewText = episode.overview?.trim() || t('tvShows:episodes.noOverview')

  return (
    <EpisodeCard key={episode.id}>
      <Checkbox
        type="checkbox"
        disabled
        aria-label={t('tvShows:episodes.markWatched', { number: episode.episode_number })}
        title={t('tvShows:episodes.trackingComingSoon')}
      />
      <MediaPoster
        path={episode.still_path ?? null}
        alt={episode.name}
        width="120px"
        aspectRatio="16 / 9"
      />
      <div>
        <EpisodeTitle>
          {episode.episode_number}. {episode.name}
        </EpisodeTitle>
        {episode.air_date ? (
          <EpisodeMeta>
            {t('tvShows:episodes.airedOn', {
              date: formatLocaleDate(episode.air_date, language),
            })}
          </EpisodeMeta>
        ) : null}
        <EpisodeOverview>{overviewText}</EpisodeOverview>
      </div>
    </EpisodeCard>
  )
})}
      </AsyncState>
    </Section>
  )
}

export const EpisodeList = observer(EpisodeListComponent)