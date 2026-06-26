import { ChangeEvent } from 'react'

import { Input, InputRow, BarRoot, RecentChip, RecentList, SearchIcon } from './StyledComponents'

interface Props {
  value: string
  recentSearches: string[]
  onChange: (value: string) => void
  onRecentSelect: (value: string) => void
}

export const SearchBar = ({ value, recentSearches, onChange, onRecentSelect }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <BarRoot>
      <InputRow>
        <SearchIcon aria-hidden="true">🔍</SearchIcon>
        <Input
          type="search"
          value={value}
          onChange={handleChange}
          placeholder="Search movies, TV shows, and people..."
          aria-label="Search"
        />
      </InputRow>

      {recentSearches.length > 0 ? (
        <RecentList aria-label="Recent searches">
          {recentSearches.map((term) => (
            <RecentChip key={term} type="button" onClick={() => onRecentSelect(term)}>
              {term}
            </RecentChip>
          ))}
        </RecentList>
      ) : null}
    </BarRoot>
  )
}