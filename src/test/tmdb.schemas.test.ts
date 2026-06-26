import { describe, expect, it } from 'vitest'

import { genreListResponseSchema, movieSummarySchema } from '../Common'

describe('TMDB Zod schemas', () => {
  it('validates a movie summary', () => {
    const result = movieSummarySchema.safeParse({
      id: 1,
      title: 'Test Movie',
      poster_path: '/poster.jpg',
      backdrop_path: null,
      vote_average: 8.2,
    })

    expect(result.success).toBe(true)
  })

  it('rejects a movie summary without required fields', () => {
    const result = movieSummarySchema.safeParse({
      id: 1,
      title: 'Test Movie',
    })

    expect(result.success).toBe(false)
  })

  it('validates a genre list response', () => {
    const result = genreListResponseSchema.safeParse({
      genres: [{ id: 28, name: 'Action' }],
    })

    expect(result.success).toBe(true)
  })
})
