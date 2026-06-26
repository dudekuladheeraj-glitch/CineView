import { useNavigate } from 'react-router-dom'

import { AsyncState, MediaPoster } from '../../../../Common'
import type { AsyncStatus } from '../../../../Common/core/types/Common.types'
import type { SearchMultiResult } from '../../../../Common/core/types/Tmdb.types'
import { MovieCard } from '../../../../Movies/ui/components/MovieCard'
import {
  Grid,
  PersonCard,
  ResultCard,
  ResultMeta,
  ResultTitle,
  Section,
  Title,
} from './StyledComponents'

interface Props {
  title: string
  type: 'movie' | 'tv' | 'person'
  items: SearchMultiResult[]
  status: AsyncStatus
  error?: string | null
  emptyText?: string
}

const toMovieSummary = (item: SearchMultiResult) => ({
  id: item.id,
  title: item.title ?? 'Untitled',
  poster_path: item.poster_path ?? null,
  backdrop_path: null,
  vote_average: item.vote_average ?? 0,
  overview: '',
})

export const SearchResultsSection = ({
  title,
  type,
  items,
  status,
  error,
  emptyText = 'No results found',
}: Props) => {
  const navigate = useNavigate()

  if (status === 'success' && items.length === 0) {
    return null
  }

  return (
    <Section aria-label={title}>
      <Title>{title}</Title>
      <AsyncState status={status} error={error} emptyText={emptyText}>
        <Grid>
          {type === 'movie' &&
            items.map((item) => <MovieCard key={item.id} movie={toMovieSummary(item)} />)}

          {type === 'tv' &&
            items.map((item) => (
              <ResultCard
                key={item.id}
                type="button"
                onClick={() => navigate(`/tv/${item.id}`)}
                aria-label={`Open ${item.name}`}
              >
                <MediaPoster path={item.poster_path ?? null} alt={item.name ?? 'TV show'} width="100%" />
                <ResultTitle>{item.name}</ResultTitle>
                {item.vote_average ? <ResultMeta>★ {item.vote_average.toFixed(1)}</ResultMeta> : null}
              </ResultCard>
            ))}

          {type === 'person' &&
            items.map((item) => (
              <PersonCard key={item.id}>
                <MediaPoster
                  path={item.profile_path ?? null}
                  alt={item.name ?? 'Person'}
                  width="100%"
                />
                <ResultTitle>{item.name}</ResultTitle>
                <ResultMeta>{item.known_for_department ?? 'Person'}</ResultMeta>
              </PersonCard>
            ))}
        </Grid>
      </AsyncState>
    </Section>
  )
}