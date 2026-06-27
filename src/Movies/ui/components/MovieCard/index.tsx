import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { MediaPoster } from '../../../../Common'
import type { MovieSummary } from '../../../../Common/core/types/Tmdb.types'
import { useCollectionStore } from '../../../../Collection/data/stores/providers'
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

const MovieCardComponent = ({ movie }: Props) => {
  const { t } = useTranslation(['movies', 'common'])
  const navigate = useNavigate()
  const collectionStore = useCollectionStore()

  const inWatchlist = collectionStore.isInWatchlist(movie.id, 'movie')

  const handleOpen = () => {
    navigate(`/movies/${movie.id}`)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleOpen()
    }
  }

  const handleToggleWatchlist = (event: React.MouseEvent) => {
    event.stopPropagation()
    collectionStore.toggleWatchlist({
      mediaId: movie.id,
      mediaType: 'movie',
      cachedTitle: movie.title,
      cachedPoster: movie.poster_path,
    })
  }

  return (
    <CardLink
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      aria-label={t('movies:card.openMovie', { title: movie.title })}
    >
      <CardBody>
        <MediaPoster path={movie.poster_path} alt={movie.title} width="160px" />
        <Title>{movie.title}</Title>
        <MetaRow>
          <Rating>★ {movie.vote_average.toFixed(1)}</Rating>
          <WatchlistButton
            type="button"
            aria-label={
              inWatchlist
                ? t('common:watchlist.remove')
                : t('common:watchlist.add')
            }
            $active={inWatchlist}
            onClick={handleToggleWatchlist}
          >
            {inWatchlist ? '✓' : '+'}
          </WatchlistButton>
        </MetaRow>
      </CardBody>
    </CardLink>
  )
}

export const MovieCard = observer(MovieCardComponent)
