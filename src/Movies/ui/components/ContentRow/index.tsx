import { useTranslation } from 'react-i18next'

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
  emptyText,
  onRetry,
}: Props) => {
  const { t } = useTranslation('movies')

  return (
    <RowSection aria-label={title}>
      <RowHeader>
        <RowTitle>{title}</RowTitle>
      </RowHeader>
      <AsyncState
        status={status}
        error={error}
        isEmpty={status === 'success' && items.length === 0}
        emptyText={emptyText ?? t('contentRow.empty')}
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