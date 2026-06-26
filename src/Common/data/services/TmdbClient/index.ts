import { z } from 'zod'

import { TMDB_DEFAULT_LANGUAGE, TMDB_DEFAULT_REGION } from '../../../core/constants/Tmdb.constants'
import { TmdbApiError } from '../../../core/errors/Tmdb.errors'
import { env, hasTmdbConfig } from '../../../core/utils/Env.utils'
import { validateTmdbResponse } from '../../../core/utils/Tmdb.utils'

export interface TmdbRequestOptions {
  language?: string
  region?: string
  params?: Record<string, string | number | boolean | undefined>
}

export class TmdbClient {
  async get<T>(
    path: string,
    schema: z.ZodType<T, z.ZodTypeDef, unknown>,
    options: TmdbRequestOptions = {},
  ): Promise<T> {
    if (!hasTmdbConfig()) {
      throw new TmdbApiError('TMDB API key is not configured', 0)
    }

    const url = new URL(`${env.tmdbBaseUrl}${path}`)
    url.searchParams.set('api_key', env.tmdbApiKey)
    url.searchParams.set('language', options.language ?? TMDB_DEFAULT_LANGUAGE)

    if (options.region ?? TMDB_DEFAULT_REGION) {
      url.searchParams.set('region', options.region ?? TMDB_DEFAULT_REGION)
    }

    if (options.params) {
      Object.entries(options.params).forEach(([key, value]) => {
        if (value !== undefined) {
          url.searchParams.set(key, String(value))
        }
      })
    }

    let response: Response

    try {
      response = await fetch(url.toString())
    } catch {
      throw new TmdbApiError('Failed to reach TMDB API', 0)
    }

    if (!response.ok) {
      throw new TmdbApiError(
        response.status === 404 ? 'Resource not found' : `TMDB request failed (${response.status})`,
        response.status,
      )
    }

    const json: unknown = await response.json()
    return validateTmdbResponse(schema, json)
  }
}

export const tmdbClient = new TmdbClient()
