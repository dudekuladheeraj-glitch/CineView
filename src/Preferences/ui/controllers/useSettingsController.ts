import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../Common/core/constants/Routes.constants'
import { useAuthStore } from '../../../Auth/data/stores/providers'
import { usePreferencesStore } from '../../data/stores/providers'
import type { AppLanguage, AppTheme } from '../../core/types/Preferences.types'

export const useSettingsController = () => {
  const { t } = useTranslation('preferences')
  const preferencesStore = usePreferencesStore()
  const authStore = useAuthStore()
  const navigate = useNavigate()

  const { language, region, theme } = preferencesStore.preferences

  const languageOptions = useMemo(
    () => [
      { label: t('language.en'), value: 'en' },
      { label: t('language.te'), value: 'te' },
    ],
    [t],
  )

  const regionOptions = useMemo(
    () => [
      { label: t('region.IN'), value: 'IN' },
      { label: t('region.US'), value: 'US' },
    ],
    [t],
  )

  const themeOptions = useMemo(
    () => [
      { label: t('theme.system'), value: 'system' },
      { label: t('theme.light'), value: 'light' },
      { label: t('theme.dark'), value: 'dark' },
    ],
    [t],
  )

  const onLogout = () => {
    authStore.logout()
    navigate(ROUTES.login)
  }

  return {
    language,
    region,
    theme,
    languageOptions,
    regionOptions,
    themeOptions,
    username: authStore.username,
    setLanguage: (value: string) => preferencesStore.setLanguage(value as AppLanguage),
    setRegion: preferencesStore.setRegion.bind(preferencesStore),
    setTheme: (value: string) => preferencesStore.setTheme(value as AppTheme),
    onLogout,
    t,
  }
}