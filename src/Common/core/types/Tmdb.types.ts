import type { z } from 'zod'

import type {
  castMemberSchema,
  creditsResponseSchema,
  genreSchema,
  genreListResponseSchema,
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
  episodeSchema,
} from './index.zod.ts'

export type Genre = z.output<typeof genreSchema>
export type GenreListResponse = z.output<typeof genreListResponseSchema>

export type MovieSummary = z.output<typeof movieSummarySchema>
export type PaginatedMovies = z.output<typeof paginatedMoviesSchema>
export type MovieDetail = z.output<typeof movieDetailSchema>

export type TvSummary = z.output<typeof tvSummarySchema>
export type PaginatedTvShows = z.output<typeof paginatedTvSchema>
export type TvDetail = z.output<typeof tvDetailSchema>

export type SeasonSummary = z.output<typeof seasonSummarySchema>
export type SeasonDetail = z.output<typeof seasonDetailSchema>

export type CastMember = z.output<typeof castMemberSchema>
export type CreditsResponse = z.output<typeof creditsResponseSchema>

export type Video = z.output<typeof videoSchema>
export type VideosResponse = z.output<typeof videosResponseSchema>

export type PersonSummary = z.output<typeof personSummarySchema>
export type SearchMultiResult = z.output<typeof searchMultiResultSchema>
export type PaginatedSearchMulti = z.output<typeof paginatedSearchMultiSchema>
export type Episode = z.output<typeof episodeSchema>
