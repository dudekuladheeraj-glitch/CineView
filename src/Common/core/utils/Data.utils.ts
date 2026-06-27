import type { AppLanguage } from '../../../Preferences/core/types/Preferences.types'

const LOCALE_MAP: Record<AppLanguage, string> = {
  en: 'en-IN',
  te: 'te-IN',
}

export const formatLocaleDate = (
  date: string | Date,
  language: AppLanguage,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
): string => {
  const parsed = typeof date === 'string' ? new Date(date) : date

  if (Number.isNaN(parsed.getTime())) {
    return typeof date === 'string' ? date : ''
  }

  return new Intl.DateTimeFormat(LOCALE_MAP[language] ?? 'en-IN', options).format(parsed)
}