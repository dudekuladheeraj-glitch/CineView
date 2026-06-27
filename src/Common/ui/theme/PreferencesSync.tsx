import { ReactNode, useEffect } from 'react'
import { usePreferencesStore } from '../../../Preferences/data/stores/providers'

interface Props {
  children: ReactNode
}

export const PreferencesSync = ({ children }: Props) => {
  const preferencesStore = usePreferencesStore()

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const updateSystemTheme = () => {
      preferencesStore.setSystemTheme(media.matches ? 'dark' : 'light')
    }

    updateSystemTheme()
    media.addEventListener('change', updateSystemTheme)

    return () => {
      media.removeEventListener('change', updateSystemTheme)
    }
  }, [preferencesStore])

  return <>{children}</>
}