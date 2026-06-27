// import type { PreferencesState } from '../types/Preferences.types'
// import type { SelectOption } from '../../../Common/ui/components/AppSelect'

// export const DEFAULT_PREFERENCES: PreferencesState = {
//   language: 'en',
//   region: 'IN',
//   theme: 'system',
// }

// export const THEME_OPTIONS: SelectOption[] = [
//   { label: 'System', value: 'system' },
//   { label: 'Light', value: 'light' },
//   { label: 'Dark', value: 'dark' },
// ]

// export const LANGUAGE_OPTIONS: SelectOption[] = [
//   { label: 'English', value: 'en' },
//   { label: 'Telugu', value: 'te' },
// ]

// export const REGION_OPTIONS: SelectOption[] = [
//   { label: 'India', value: 'IN' },
//   { label: 'United States', value: 'US' },
// ]
import type { PreferencesState } from '../types/Preferences.types'

export const DEFAULT_PREFERENCES: PreferencesState = {
  language: 'en',
  region: 'IN',
  theme: 'system',
}