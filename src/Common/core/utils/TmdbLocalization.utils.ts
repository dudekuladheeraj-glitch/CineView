import { mapAppLanguageToTmdb, TMDB_DEFAULT_LANGUAGE } from '../constants/Tmdb.constants'

type LocalizableText = {
  overview?: string
  title?: string
  name?: string
  tagline?: string
}

export const mergeWithEnglishTextFallback = <T extends LocalizableText>(
  localized: T,
  english: T,
): T => ({
  ...localized,
  overview: localized.overview?.trim() ? localized.overview : english.overview,
  title: localized.title?.trim() ? localized.title : english.title,
  name: localized.name?.trim() ? localized.name : english.name,
  tagline: localized.tagline?.trim() ? localized.tagline : english.tagline,
})

export const needsEnglishTextFallback = (language: string, data: LocalizableText) =>
  mapAppLanguageToTmdb(language) !== TMDB_DEFAULT_LANGUAGE &&
  !data.overview?.trim()