import { makeAutoObservable, runInAction } from 'mobx'

import { getYoutubeTrailerKey } from '../../../../Common'
import { TmdbApiError } from '../../../../Common/core/errors/Tmdb.errors'
import type {
    MovieDetailPageStatus,
    MovieDetailSectionState,
    MovieListSectionState,
  } from '../../../core/types/Movie.types'
  
import type {
    MovieDetail,
    CastMember,
  } from '../../../../Common/core/types/Tmdb.types'
import type { MoviesService } from '../../services/MoviesService'

const createDetailSection = <T>(): MovieDetailSectionState<T> => ({
  status: 'idle',
  error: null,
  data: null,
})

const createListSection = (): MovieListSectionState => ({
  status: 'idle',
  error: null,
  items: [],
})

export class MovieDetailStore {
  movieId: number | null = null
  pageStatus: MovieDetailPageStatus = 'idle'
  pageError: string | null = null
  movie = createDetailSection<MovieDetail>()
  credits = createDetailSection<CastMember[]>()
  similar = createListSection()
  recommendations = createListSection()
  trailerKey: string | null = null

  constructor(private readonly moviesService: MoviesService) {
    makeAutoObservable(this)
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof TmdbApiError) {
      return error.message
    }

    if (error instanceof Error) {
      return error.message
    }

    return 'Failed to load movie details'
  }

  clear() {
    this.movieId = null
    this.pageStatus = 'idle'
    this.pageError = null
    this.movie = createDetailSection<MovieDetail>()
    this.credits = createDetailSection<CastMember[]>()
    this.similar = createListSection()
    this.recommendations = createListSection()
    this.trailerKey = null
  }

  async fetchMovieDetail(movieId: number, language: string) {
    this.movieId = movieId
    this.pageStatus = 'loading'
    this.pageError = null
    this.movie = { status: 'loading', error: null, data: null }
    this.credits = { status: 'loading', error: null, data: null }
    this.similar = { status: 'loading', error: null, items: [] }
    this.recommendations = { status: 'loading', error: null, items: [] }
    this.trailerKey = null

    try {
      const movie = await this.moviesService.getMovieDetail(movieId, language)

      runInAction(() => {
        this.movie = { status: 'success', error: null, data: movie }
        this.pageStatus = 'success'
      })

      void this.fetchCredits(movieId, language)
      void this.fetchSimilar(movieId, language)
      void this.fetchRecommendations(movieId, language)
      void this.fetchTrailer(movieId, language)
    } catch (error) {
      runInAction(() => {
        if (error instanceof TmdbApiError && error.statusCode === 404) {
          this.pageStatus = 'notFound'
          this.pageError = 'Movie not found'
          return
        }

        this.pageStatus = 'error'
        this.pageError = this.getErrorMessage(error)
        this.movie = {
          status: 'error',
          error: this.getErrorMessage(error),
          data: null,
        }
      })
    }
  }

  private async fetchCredits(movieId: number, language: string) {
    try {
      const response = await this.moviesService.getMovieCredits(movieId, language)

      runInAction(() => {
        this.credits = {
          status: 'success',
          error: null,
          data: response.cast,
        }
      })
    } catch (error) {
      runInAction(() => {
        this.credits = {
          status: 'error',
          error: this.getErrorMessage(error),
          data: null,
        }
      })
    }
  }

  private async fetchSimilar(movieId: number, language: string) {
    try {
      const response = await this.moviesService.getSimilarMovies(movieId, language)

      runInAction(() => {
        this.similar = {
          status: 'success',
          error: null,
          items: response.results,
        }
      })
    } catch (error) {
      runInAction(() => {
        this.similar = {
          status: 'error',
          error: this.getErrorMessage(error),
          items: [],
        }
      })
    }
  }

  private async fetchRecommendations(movieId: number, language: string) {
    try {
      const response = await this.moviesService.getRecommendedMovies(movieId, language)

      runInAction(() => {
        this.recommendations = {
          status: 'success',
          error: null,
          items: response.results,
        }
      })
    } catch (error) {
      runInAction(() => {
        this.recommendations = {
          status: 'error',
          error: this.getErrorMessage(error),
          items: [],
        }
      })
    }
  }

  private async fetchTrailer(movieId: number, language: string) {
    try {
      const response = await this.moviesService.getMovieVideos(movieId, language)

      runInAction(() => {
        this.trailerKey = getYoutubeTrailerKey(response.results)
      })
    } catch {
      runInAction(() => {
        this.trailerKey = null
      })
    }
  }

  retryCredits(language: string) {
    if (!this.movieId) return
    void this.fetchCredits(this.movieId, language)
  }

  retrySimilar(language: string) {
    if (!this.movieId) return
    void this.fetchSimilar(this.movieId, language)
  }

  retryRecommendations(language: string) {
    if (!this.movieId) return
    void this.fetchRecommendations(this.movieId, language)
  }
}