import { AsyncState, MediaPoster } from '../../../../Common'
import type { AsyncStatus } from '../../../../Common/core/types/Common.types'
import type { Episode } from '../../../../Common/core/types/Tmdb.types'
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

export const EpisodeList = ({ seasonTitle, episodes, status, error }: Props) => {
  return (
    <Section aria-label={`${seasonTitle} episodes`}>
      <Title>{seasonTitle}</Title>
      <AsyncState
        status={status}
        error={error}
        isEmpty={status === 'success' && episodes.length === 0}
        emptyText="No episodes available"
      >
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id}>
            <Checkbox
              type="checkbox"
              disabled
              aria-label={`Mark episode ${episode.episode_number} as watched`}
              title="Episode tracking coming soon"
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
              {episode.air_date ? <EpisodeMeta>Aired: {episode.air_date}</EpisodeMeta> : null}
              {episode.overview ? <EpisodeOverview>{episode.overview}</EpisodeOverview> : null}
            </div>
          </EpisodeCard>
        ))}
      </AsyncState>
    </Section>
  )
}