import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { Input, InputRow, BarRoot, RecentChip, RecentList, SearchIcon } from './StyledComponents'

interface Props {
  value: string
  recentSearches: string[]
  onChange: (value: string) => void
  onRecentSelect: (value: string) => void
}

export const SearchBar = ({ value, recentSearches, onChange, onRecentSelect }: Props) => {
  const { t } = useTranslation('search')

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
          placeholder={t('placeholder')}
          aria-label={t('ariaLabel')}
        />
      </InputRow>

      {recentSearches.length > 0 ? (
        <RecentList aria-label={t('recentSearches')}>
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