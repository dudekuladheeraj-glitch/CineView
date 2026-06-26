import type { Genre } from '../../../../Common/core/types/Tmdb.types'
import { Chip, ChipList, FilterSection, FilterTitle } from './StyledComponents'

interface Props {
  genres: Genre[]
  activeGenreId: number | null
  onSelect: (genreId: number | null) => void
}

export const GenreFilter = ({ genres, activeGenreId, onSelect }: Props) => {
  if (genres.length === 0) {
    return null
  }

  return (
    <FilterSection aria-label="Genre filter">
      <FilterTitle>Browse by Genre</FilterTitle>
      <ChipList>
        <Chip type="button" $active={activeGenreId === null} onClick={() => onSelect(null)}>
          All
        </Chip>
        {genres.map((genre) => (
          <Chip
            key={genre.id}
            type="button"
            $active={activeGenreId === genre.id}
            onClick={() => onSelect(genre.id)}
          >
            {genre.name}
          </Chip>
        ))}
      </ChipList>
    </FilterSection>
  )
}
