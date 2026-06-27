import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { usePreferencesStore } from '../../../../../Preferences/data/stores/providers'
import type { AppLanguage } from '../../../../../Preferences/core/types/Preferences.types'
import { Select } from './StyledComponents'

const LanguageSwitcherComponent = () => {
  const { t } = useTranslation('preferences')
  const preferencesStore = usePreferencesStore()

  const languageOptions: { value: AppLanguage; label: string }[] = [
    { value: 'en', label: t('language.en') },
    { value: 'te', label: t('language.te') },
  ]

  return (
    <Select
      value={preferencesStore.preferences.language}
      onChange={(event) => preferencesStore.setLanguage(event.target.value as AppLanguage)}
      aria-label={t('selectLanguageAria')}
    >
      {languageOptions.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  )
}

export const LanguageSwitcher = observer(LanguageSwitcherComponent)