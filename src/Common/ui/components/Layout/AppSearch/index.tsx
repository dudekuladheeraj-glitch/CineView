import { KeyboardEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../../core/constants/Routes.constants'
import { SearchWrapper, SearchIcon, SearchInput } from './StyledComponents'

export const AppSearch = () => {
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
        placeholder="Search movies &amp; shows..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="Search"
      />
    </SearchWrapper>
  )
}
