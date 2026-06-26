import type { z } from 'zod'

import { TmdbValidationError } from '../errors/Tmdb.errors'

export const validateTmdbResponse = <T>(
  schema: z.ZodType<T, z.ZodTypeDef, unknown>,
  data: unknown,
): T => {
  const result = schema.safeParse(data)

  if (!result.success) {
    throw new TmdbValidationError('Invalid TMDB API response', result.error)
  }

  return result.data
}

export const getYoutubeTrailerKey = (
  videos: { key: string; site: string; type: string }[],
) => {
  const trailer = videos.find(
    (video) => video.site === 'YouTube' && video.type === 'Trailer',
  )

  return trailer?.key ?? videos.find((video) => video.site === 'YouTube')?.key ?? null
}
