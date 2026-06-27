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

  it('accepts a minimal movie summary with defaults', () => {
    const result = movieSummarySchema.safeParse({
      id: 1,
      title: 'Test Movie',
    })

    expect(result.success).toBe(true)

    if (result.success) {
      expect(result.data.poster_path).toBeNull()
      expect(result.data.backdrop_path).toBeNull()
      expect(result.data.vote_average).toBe(0)
      expect(result.data.overview).toBe('')
    }
  })

  it('coerces null title to empty string', () => {
    const result = movieSummarySchema.safeParse({
      id: 1,
      title: null,
      poster_path: null,
      backdrop_path: null,
    })

    expect(result.success).toBe(true)

    if (result.success) {
      expect(result.data.title).toBe('')
    }
  })

  it('rejects a movie summary without id', () => {
    const result = movieSummarySchema.safeParse({
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