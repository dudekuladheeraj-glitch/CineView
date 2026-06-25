export type AppTheme = 'light' | 'dark' | 'system'
export type AppLanguage = 'en' | 'te'

export interface PreferencesState {
  language: AppLanguage
  region: string
  theme: AppTheme
}
