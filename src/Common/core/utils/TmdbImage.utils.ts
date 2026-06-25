import { env } from './Env.utils'

export const getPosterUrl = (path: string | null, size: 'w342' | 'w500' = 'w342') =>
  path ? `${env.tmdbImageBaseUrl}/${size}${path}` : ''

export const getBackdropUrl = (path: string | null, size: 'w780' | 'w1280' = 'w780') =>
  path ? `${env.tmdbImageBaseUrl}/${size}${path}` : ''
