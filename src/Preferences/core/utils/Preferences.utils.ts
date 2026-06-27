import type { AppTheme } from '../types/Preferences.types'

export const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const resolveTheme = (
  theme: AppTheme,
  systemTheme: 'light' | 'dark',
): 'light' | 'dark' => {
  if (theme === 'system') {
    return systemTheme
  }

  return theme
}