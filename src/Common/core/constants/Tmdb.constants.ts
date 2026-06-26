export const TMDB_DEFAULT_LANGUAGE = 'en-US'
export const TMDB_DEFAULT_REGION = 'IN'

export const TMDB_LANGUAGE_MAP: Record<string, string> = {
  en: 'en-US',
  te: 'te-IN',
}

export const mapAppLanguageToTmdb = (language: string) =>
  TMDB_LANGUAGE_MAP[language] ?? TMDB_DEFAULT_LANGUAGE
