import { KeyboardEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../../core/constants/Routes.constants'
import { SearchWrapper, SearchIcon, SearchInput } from './StyledComponents'

export const AppSearch = () => {
  const { t } = useTranslation('common')
  const navigate = useNavigate()
  const [value, setValue] = useState('')

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && value.trim()) {
      navigate(`${ROUTES.search}?q=${encodeURIComponent(value.trim())}`)
      setValue('')
    }
  }

  return (
    <SearchWrapper>
      <SearchIcon>🔍</SearchIcon>
      <SearchInput
        type="search"
        placeholder={t('search.placeholder')}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label={t('search.ariaLabel')}
      />
    </SearchWrapper>
  )
}