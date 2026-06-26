import { z } from 'zod'

export const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
})

export const genreListResponseSchema = z.object({
  genres: z.array(genreSchema),
})

export const movieSummarySchema = z.object({
  id: z.number(),
  title: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  vote_average: z.number(),
  overview: z.string().optional().default(''),
  genre_ids: z.array(z.number()).optional(),
  release_date: z.string().optional(),
})

export const paginatedMoviesSchema = z.object({
  page: z.number(),
  results: z.array(movieSummarySchema),
  total_pages: z.number(),
  total_results: z.number(),
})

export const movieDetailSchema = movieSummarySchema.extend({
  runtime: z.number().nullable().optional(),
  genres: z.array(genreSchema).optional().default([]),
  tagline: z.string().optional().default(''),
  status: z.string().optional(),
})

export const tvSummarySchema = z.object({
  id: z.number(),
  name: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  vote_average: z.number(),
  overview: z.string().optional().default(''),
  genre_ids: z.array(z.number()).optional(),
  first_air_date: z.string().optional(),
})

export const paginatedTvSchema = z.object({
  page: z.number(),
  results: z.array(tvSummarySchema),
  total_pages: z.number(),
  total_results: z.number(),
})

export const seasonSummarySchema = z.object({
  id: z.number(),
  name: z.string(),
  season_number: z.number(),
  episode_count: z.number(),
  poster_path: z.string().nullable(),
  overview: z.string().optional().default(''),
  air_date: z.string().nullable().optional(),
})

export const episodeSchema = z.object({
  id: z.number(),
  name: z.string(),
  overview: z.string().optional().default(''),
  air_date: z.string().nullable().optional(),
  episode_number: z.number(),
  season_number: z.number(),
  still_path: z.string().nullable().optional(),
  runtime: z.number().nullable().optional(),
})

export const tvDetailSchema = tvSummarySchema.extend({
  genres: z.array(genreSchema).optional().default([]),
  number_of_seasons: z.number().optional(),
  number_of_episodes: z.number().optional(),
  seasons: z.array(seasonSummarySchema).optional().default([]),
  status: z.string().optional(),
  tagline: z.string().optional().default(''),
})

export const seasonDetailSchema = z.object({
  id: z.number(),
  name: z.string(),
  season_number: z.number(),
  overview: z.string().optional().default(''),
  poster_path: z.string().nullable(),
  air_date: z.string().nullable().optional(),
  episodes: z.array(episodeSchema).optional().default([]),
})

export const castMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  character: z.string(),
  profile_path: z.string().nullable(),
  order: z.number().optional(),
})

export const creditsResponseSchema = z.object({
  id: z.number(),
  cast: z.array(castMemberSchema),
})

export const videoSchema = z.object({
  id: z.string().optional(),
  key: z.string(),
  name: z.string(),
  site: z.string(),
  type: z.string(),
  official: z.boolean().optional(),
})

export const videosResponseSchema = z.object({
  id: z.number(),
  results: z.array(videoSchema),
})

export const personSummarySchema = z.object({
  id: z.number(),
  name: z.string(),
  profile_path: z.string().nullable(),
  known_for_department: z.string().optional(),
})

export const searchMultiResultSchema = z.object({
  id: z.number(),
  media_type: z.enum(['movie', 'tv', 'person']),
  title: z.string().optional(),
  name: z.string().optional(),
  poster_path: z.string().nullable().optional(),
  profile_path: z.string().nullable().optional(),
  vote_average: z.number().optional(),
  known_for_department: z.string().optional(),
})

export const paginatedSearchMultiSchema = z.object({
  page: z.number(),
  results: z.array(searchMultiResultSchema),
  total_pages: z.number(),
  total_results: z.number(),
})
