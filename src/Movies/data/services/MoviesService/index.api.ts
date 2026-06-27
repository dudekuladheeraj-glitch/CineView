import {
  creditsResponseSchema,
  genreListResponseSchema,
  mapAppLanguageToTmdb,
  movieDetailSchema,
  paginatedMoviesSchema,
  TMDB_DEFAULT_LANGUAGE,
  tmdbClient,
  videosResponseSchema,
} from '../../../../Common'
import {
  mergeWithEnglishTextFallback,
  needsEnglishTextFallback,
} from '../../../../Common/core/utils/TmdbLocalization.utils'
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
    const tmdbLanguage = mapAppLanguageToTmdb(language)
    const detail = await tmdbClient.get(`/movie/${movieId}`, movieDetailSchema, {
      language: tmdbLanguage,
    })

    if (!needsEnglishTextFallback(language, detail)) {
      return detail
    }

    try {
      const englishDetail = await tmdbClient.get(`/movie/${movieId}`, movieDetailSchema, {
        language: TMDB_DEFAULT_LANGUAGE,
      })
      return mergeWithEnglishTextFallback(detail, englishDetail)
    } catch {
      return detail
    }
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