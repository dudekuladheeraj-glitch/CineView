import { useTranslation } from 'react-i18next'

import type { Genre } from '../../../../Common/core/types/Tmdb.types'
import { Chip, ChipList, FilterSection, FilterTitle } from './StyledComponents'

interface Props {
  genres: Genre[]
  activeGenreId: number | null
  onSelect: (genreId: number | null) => void
}

export const GenreFilter = ({ genres, activeGenreId, onSelect }: Props) => {
  const { t } = useTranslation('movies')

  if (genres.length === 0) {
    return null
  }

  return (
    <FilterSection aria-label={t('genreFilter.ariaLabel')}>
      <FilterTitle>{t('genreFilter.title')}</FilterTitle>
      <ChipList>
        <Chip type="button" $active={activeGenreId === null} onClick={() => onSelect(null)}>
          {t('genreFilter.all')}
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