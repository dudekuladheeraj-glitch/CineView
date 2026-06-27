export const MOVIES_MODULE = 'Movies'

export const HOME_ROW_KEYS = ['trending', 'popular', 'topRated', 'upcoming'] as const
export type HomeRowKey = (typeof HOME_ROW_KEYS)[number]

export const HOME_ROW_I18N_KEYS: Record<HomeRowKey, string> = {
  trending: 'rows.trending',
  popular: 'rows.popular',
  topRated: 'rows.topRated',
  upcoming: 'rows.upcoming',
}

export const TMDB_MOVIE_ENDPOINTS = {
  trending: '/trending/movie/day',
  popular: '/movie/popular',
  topRated: '/movie/top_rated',
  upcoming: '/movie/upcoming',
  genres: '/genre/movie/list',
} as const