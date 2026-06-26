import type { HomeRowKey } from '../constants/Movies.constants'
import type { AsyncStatus } from '../../../Common/core/types/Common.types'
import type {
  CastMember,
  Genre,
  MovieDetail,
  MovieSummary,
} from '../../../Common/core/types/Tmdb.types'

export interface HomeRowState {
  status: AsyncStatus
  error: string | null
  items: MovieSummary[]
}

export type HomeRowsState = Record<HomeRowKey, HomeRowState>

export interface HomePageState {
  rows: HomeRowsState
  genres: Genre[]
  genresStatus: AsyncStatus
  genresError: string | null
  heroTrailerKey: string | null
}

export type MovieDetailPageStatus = 'idle' | 'loading' | 'success' | 'error' | 'notFound'

export interface MovieDetailSectionState<T> {
  status: AsyncStatus
  error: string | null
  data: T | null
}

export interface MovieListSectionState {
  status: AsyncStatus
  error: string | null
  items: MovieSummary[]
}

export interface MovieDetailPageState {
  pageStatus: MovieDetailPageStatus
  pageError: string | null
  movie: MovieDetailSectionState<MovieDetail>
  credits: MovieDetailSectionState<CastMember[]>
  similar: MovieListSectionState
  recommendations: MovieListSectionState
  trailerKey: string | null
}