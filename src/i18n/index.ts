import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { STORAGE_KEYS } from '../Common/core/constants/Storage.constants'
import { DEFAULT_PREFERENCES } from '../Preferences/core/constants/Preferences.constants'
import type { PreferencesState } from '../Preferences/core/types/Preferences.types'

import commonEn from './locales/en/common.json'
import authEn from './locales/en/auth.json'
import moviesEn from './locales/en/movies.json'
import tvShowsEn from './locales/en/tvShows.json'
import searchEn from './locales/en/search.json'
import collectionEn from './locales/en/collection.json'
import preferencesEn from './locales/en/preferences.json'

import commonTe from './locales/te/common.json'
import authTe from './locales/te/auth.json'
import moviesTe from './locales/te/movies.json'
import tvShowsTe from './locales/te/tvShows.json'
import searchTe from './locales/te/search.json'
import collectionTe from './locales/te/collection.json'
import preferencesTe from './locales/te/preferences.json'

const getStoredLanguage = (): string => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.preferences)

    if (raw) {
      const parsed = JSON.parse(raw) as PreferencesState
      return parsed.language ?? DEFAULT_PREFERENCES.language
    }
  } catch {
    // fall through to default
  }

  return DEFAULT_PREFERENCES.language
}

void i18n.use(initReactI18next).init({
  lng: getStoredLanguage(),
  fallbackLng: 'en',
  defaultNS: 'common',
  compatibilityJSON: 'v4',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      common: commonEn,
      auth: authEn,
      movies: moviesEn,
      tvShows: tvShowsEn,
      search: searchEn,
      collection: collectionEn,
      preferences: preferencesEn,
    },
    te: {
      common: commonTe,
      auth: authTe,
      movies: moviesTe,
      tvShows: tvShowsTe,
      search: searchTe,
      collection: collectionTe,
      preferences: preferencesTe,
    },
  },
})

export default i18n