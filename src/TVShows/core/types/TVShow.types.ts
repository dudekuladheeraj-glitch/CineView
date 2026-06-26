import type { AsyncStatus } from '../../../Common/core/types/Common.types'
import type { Episode, SeasonSummary} from '../../../Common/core/types/Tmdb.types'

export type TVShowPageStatus = 'idle' | 'loading' | 'success' | 'error' | 'notFound'

export interface TVShowDetailSectionState<T> {
  status: AsyncStatus
  error: string | null
  data: T | null
}

export interface SeasonDetailSectionState {
  status: AsyncStatus
  error: string | null
  episodes: Episode[]
  season: SeasonSummary | null
}
