export const ROUTES = {
  login: '/login',
  home: '/',
  search: '/search',
  movieDetail: '/movies/:movieId',
  tvShowDetail: '/tv/:tvId',
  seasonDetail: '/tv/:tvId/season/:seasonNumber',
  watchlist: '/watchlist',
  lists: '/lists',
  listDetail: '/lists/:listId',
  settings: '/settings',
} as const
