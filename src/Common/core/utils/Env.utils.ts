export const env = {
  basePath: import.meta.env.VITE_BASE_PATH ?? '/',
  tmdbApiKey: import.meta.env.VITE_TMDB_API_KEY ?? '',
  tmdbBaseUrl: import.meta.env.VITE_TMDB_BASE_URL ?? 'https://api.themoviedb.org/3',
  tmdbImageBaseUrl: import.meta.env.VITE_TMDB_IMAGE_BASE_URL ?? 'https://image.tmdb.org/t/p',
}

export const hasTmdbConfig = () => Boolean(env.tmdbApiKey)

/** React Router basename: leading slash, no trailing slash. Root deploys return undefined. */
export const getRouterBasename = () => {
  const normalized = env.basePath.replace(/\/$/, '')
  return normalized === '' ? undefined : normalized
}
