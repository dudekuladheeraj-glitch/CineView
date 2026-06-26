export { ProtectedRoute } from './ui/routes/ProtectedRoute'
export { PublicRoute } from './ui/routes/PublicRoute'
export { ProtectedLayout } from './ui/layouts/ProtectedLayout'
export { NotFoundPage } from './ui/pages/NotFoundPage'
export { PagePlaceholder } from './ui/components/PagePlaceholder'

export { AppButton } from './ui/components/AppButton'
export type { AppButtonVariant } from './ui/components/AppButton'

export { AppInput } from './ui/components/AppInput'

export { AppSelect } from './ui/components/AppSelect'
export type { SelectOption } from './ui/components/AppSelect'

export { AppCard } from './ui/components/AppCard'
export { PageContainer } from './ui/components/PageContainer'
export { AppHeader } from './ui/components/Layout/AppHeader'
export { AppLogo } from './ui/components/Layout/AppLogo'
export { AppSearch } from './ui/components/Layout/AppSearch'
export { UserMenu } from './ui/components/Layout/UserMenu'
export { LanguageSwitcher } from './ui/components/Layout/LanguageSwitcher'

export { ErrorBoundary } from './ui/components/ErrorBoundary'
export { AsyncState } from './ui/components/AsyncState'
export { MediaPoster } from './ui/components/MediaPoster'

export { tmdbClient, TmdbClient } from './data/services/TmdbClient'
export type { TmdbRequestOptions } from './data/services/TmdbClient'

export { TmdbApiError, TmdbValidationError } from './core/errors/Tmdb.errors'
export { validateTmdbResponse, getYoutubeTrailerKey } from './core/utils/Tmdb.utils'
export { mapAppLanguageToTmdb, TMDB_DEFAULT_LANGUAGE, TMDB_DEFAULT_REGION } from './core/constants/Tmdb.constants'
export { getPosterUrl, getBackdropUrl } from './core/utils/TmdbImage.utils'

export type { AsyncStatus } from './core/types/Common.types'
export type {
  CastMember,
  CreditsResponse,
  Genre,
  GenreListResponse,
  MovieDetail,
  MovieSummary,
  PaginatedMovies,
  PaginatedSearchMulti,
  PaginatedTvShows,
  PersonSummary,
  SearchMultiResult,
  SeasonDetail,
  SeasonSummary,
  TvDetail,
  TvSummary,
  Video,
  VideosResponse,
} from './core/types/Tmdb.types'

export {
  castMemberSchema,
  creditsResponseSchema,
  episodeSchema,
  genreListResponseSchema,
  genreSchema,
  movieDetailSchema,
  movieSummarySchema,
  paginatedMoviesSchema,
  paginatedSearchMultiSchema,
  paginatedTvSchema,
  personSummarySchema,
  searchMultiResultSchema,
  seasonDetailSchema,
  seasonSummarySchema,
  tvDetailSchema,
  tvSummarySchema,
  videoSchema,
  videosResponseSchema,
} from './core/types/index.zod'
