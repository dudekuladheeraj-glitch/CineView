import { AsyncState } from '../../../../Common'
import type { AsyncStatus } from '../../../../Common/core/types/Common.types'
import type { MovieSummary } from '../../../../Common/core/types/Tmdb.types'
import { MovieCard } from '../MovieCard'
import { CardSlot, RowHeader, RowSection, RowTitle, ScrollTrack } from './StyledComponents'

interface Props {
  title: string
  items: MovieSummary[]
  status: AsyncStatus
  error?: string | null
  emptyText?: string
  onRetry?: () => void
}

export const ContentRow = ({
  title,
  items,
  status,
  error,
  emptyText = 'No movies to show',
  onRetry,
}: Props) => {
  return (
    <RowSection aria-label={title}>
      <RowHeader>
        <RowTitle>{title}</RowTitle>
      </RowHeader>
      <AsyncState
        status={status}
        error={error}
        isEmpty={status === 'success' && items.length === 0}
        emptyText={emptyText}
        onRetry={onRetry}
      >
        <ScrollTrack>
          {items.map((movie) => (
            <CardSlot key={movie.id}>
              <MovieCard movie={movie} />
            </CardSlot>
          ))}
        </ScrollTrack>
      </AsyncState>
    </RowSection>
  )
}
