import i18n from '../../../i18n'
import { TmdbApiError } from '../errors/Tmdb.errors'

export const resolveStoreError = (error: unknown, fallbackKey: string) => {
  if (error instanceof TmdbApiError) return error.message
  if (error instanceof Error) return error.message
  return i18n.t(fallbackKey)
}