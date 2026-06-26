import { ChangeEvent } from 'react'
import { observer } from 'mobx-react-lite'
import { usePreferencesStore } from '../../../../../Preferences/data/stores/providers'
import type { AppLanguage } from '../../../../../Preferences/core/types/Preferences.types'
import { Select } from './StyledComponents'

const LANGUAGE_OPTIONS: { value: AppLanguage; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'te', label: 'Telugu' },
]

const LanguageSwitcherComponent = () => {
  const preferencesStore = usePreferencesStore()

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    preferencesStore.setLanguage(event.target.value as AppLanguage)
  }

  return (
    <Select
      value={preferencesStore.preferences.language}
      onChange={handleChange}
      aria-label="Select language"
    >
      {LANGUAGE_OPTIONS.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  )
}

export const LanguageSwitcher = observer(LanguageSwitcherComponent)
