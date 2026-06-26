import {
  creditsResponseSchema,
  genreListResponseSchema,
  mapAppLanguageToTmdb,
  movieDetailSchema,
  paginatedMoviesSchema,
  tmdbClient,
  videosResponseSchema,
} from '../../../../Common'
import { TMDB_MOVIE_ENDPOINTS } from '../../../core/constants/Movies.constants'
import type { MoviesService } from './index'

export class MoviesServiceAPI implements MoviesService {
  async getTrending(language: string, region: string) {
    return tmdbClient.get(TMDB_MOVIE_ENDPOINTS.trending, paginatedMoviesSchema, {
      language: mapAppLanguageToTmdb(language),
      region,
    })
  }

  async getPopular(language: string, region: string) {
    return tmdbClient.get(TMDB_MOVIE_ENDPOINTS.popular, paginatedMoviesSchema, {
      language: mapAppLanguageToTmdb(language),
      region,
    })
  }

  async getTopRated(language: string, region: string) {
    return tmdbClient.get(TMDB_MOVIE_ENDPOINTS.topRated, paginatedMoviesSchema, {
      language: mapAppLanguageToTmdb(language),
      region,
    })
  }

  async getUpcoming(language: string, region: string) {
    return tmdbClient.get(TMDB_MOVIE_ENDPOINTS.upcoming, paginatedMoviesSchema, {
      language: mapAppLanguageToTmdb(language),
      region,
    })
  }

  async getGenres(language: string) {
    return tmdbClient.get(TMDB_MOVIE_ENDPOINTS.genres, genreListResponseSchema, {
      language: mapAppLanguageToTmdb(language),
    })
  }

  async getMovieVideos(movieId: number, language: string) {
    return tmdbClient.get(`/movie/${movieId}/videos`, videosResponseSchema, {
      language: mapAppLanguageToTmdb(language),
    })
  }

  async getMovieDetail(movieId: number, language: string) {
    return tmdbClient.get(`/movie/${movieId}`, movieDetailSchema, {
      language: mapAppLanguageToTmdb(language),
    })
  }

  async getMovieCredits(movieId: number, language: string) {
    return tmdbClient.get(`/movie/${movieId}/credits`, creditsResponseSchema, {
      language: mapAppLanguageToTmdb(language),
    })
  }

  async getSimilarMovies(movieId: number, language: string) {
    return tmdbClient.get(`/movie/${movieId}/similar`, paginatedMoviesSchema, {
      language: mapAppLanguageToTmdb(language),
    })
  }

  async getRecommendedMovies(movieId: number, language: string) {
    return tmdbClient.get(`/movie/${movieId}/recommendations`, paginatedMoviesSchema, {
      language: mapAppLanguageToTmdb(language),
    })
  }
}