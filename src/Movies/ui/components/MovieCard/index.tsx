import { useNavigate } from 'react-router-dom'

import { MediaPoster } from '../../../../Common'
import type { MovieSummary } from '../../../../Common/core/types/Tmdb.types'
import {
  CardBody,
  CardLink,
  MetaRow,
  Rating,
  Title,
  WatchlistButton,
} from './StyledComponents'

interface Props {
  movie: MovieSummary
}

export const MovieCard = ({ movie }: Props) => {
  const navigate = useNavigate()

  const handleOpen = () => {
    navigate(`/movies/${movie.id}`)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleOpen()
    }
  }

  return (
    <CardLink
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      aria-label={`Open ${movie.title}`}
    >
      <CardBody>
        <MediaPoster path={movie.poster_path} alt={movie.title} width="160px" />

        <Title>{movie.title}</Title>

        <MetaRow>
          <Rating>★ {movie.vote_average.toFixed(1)}</Rating>

          <WatchlistButton
            type="button"
            aria-label="Add to watchlist"
            title="Watchlist coming soon"
            onClick={(event) => event.stopPropagation()}
            disabled
          >
            +
          </WatchlistButton>
        </MetaRow>
      </CardBody>
    </CardLink>
  )
}