import type { MovieSummary } from '../../../Common/core/types/Tmdb.types'

export const filterMoviesByGenre = (movies: MovieSummary[], genreId: number | null) => {
  if (!genreId) {
    return movies
  }

  return movies.filter((movie) => movie.genre_ids?.includes(genreId))
}
