import { describe, expect, it } from 'vitest'

import { filterMoviesByGenre } from '../Movies/core/utils/Movies.utils'

describe('filterMoviesByGenre', () => {
  const movies = [
    {
      id: 1,
      title: 'Action Movie',
      poster_path: null,
      backdrop_path: null,
      vote_average: 8,
      overview: '',
      genre_ids: [28],
    },
    {
      id: 2,
      title: 'Comedy Movie',
      poster_path: null,
      backdrop_path: null,
      vote_average: 7,
      overview: '',
      genre_ids: [35],
    },
  ]

  it('returns all movies when no genre is selected', () => {
    expect(filterMoviesByGenre(movies, null)).toHaveLength(2)
  })

  it('filters movies by selected genre', () => {
    expect(filterMoviesByGenre(movies, 28)).toEqual([movies[0]])
  })
})
