import { makeAutoObservable, runInAction } from 'mobx'

import { getYoutubeTrailerKey } from '../../../../Common'
import { TmdbApiError } from '../../../../Common/core/errors/Tmdb.errors'
import {
  HOME_ROW_KEYS,
  type HomeRowKey,
} from '../../../core/constants/Movies.constants'
import type { Genre } from '../../../../Common/core/types/Tmdb.types'
import type { HomeRowState, HomeRowsState } from '../../../core/types/Movie.types'
import type { MoviesService } from '../../services/MoviesService'

const createRowState = (): HomeRowState => ({
  status: 'idle',
  error: null,
  items: [],
})

const createInitialRows = (): HomeRowsState =>
  HOME_ROW_KEYS.reduce((rows, key) => {
    rows[key] = createRowState()
    return rows
  }, {} as HomeRowsState)

export class HomeStore {
  rows: HomeRowsState = createInitialRows()
  genres: Genre[] = []
  genresStatus: HomeRowState['status'] = 'idle'
  genresError: string | null = null
  heroTrailerKey: string | null = null

  constructor(private readonly moviesService: MoviesService) {
    makeAutoObservable(this)
  }

  get heroMovie() {
    return this.rows.trending.items[0] ?? null
  }

  private setRowLoading(key: HomeRowKey) {
    this.rows[key] = {
      ...this.rows[key],
      status: 'loading',
      error: null,
    }
  }

  private setRowSuccess(key: HomeRowKey, items: HomeRowState['items']) {
    this.rows[key] = {
      status: 'success',
      error: null,
      items,
    }
  }

  private setRowError(key: HomeRowKey, error: string) {
    this.rows[key] = {
      ...this.rows[key],
      status: 'error',
      error,
      items: [],
    }
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof TmdbApiError) {
      return error.message
    }

    if (error instanceof Error) {
      return error.message
    }

    return 'Failed to load movies'
  }

  async fetchRow(key: HomeRowKey, language: string, region: string) {
    this.setRowLoading(key)

    try {
      const response = await this.fetchRowData(key, language, region)

      runInAction(() => {
        this.setRowSuccess(key, response.results)

        if (key === 'trending' && response.results[0]) {
          void this.fetchHeroTrailer(response.results[0].id, language)
        }
      })
    } catch (error) {
      runInAction(() => {
        this.setRowError(key, this.getErrorMessage(error))
      })
    }
  }

  async fetchGenres(language: string) {
    this.genresStatus = 'loading'
    this.genresError = null

    try {
      const response = await this.moviesService.getGenres(language)

      runInAction(() => {
        this.genres = response.genres
        this.genresStatus = 'success'
      })
    } catch (error) {
      runInAction(() => {
        this.genres = []
        this.genresStatus = 'error'
        this.genresError = this.getErrorMessage(error)
      })
    }
  }

  async fetchHomeData(language: string, region: string) {
    this.heroTrailerKey = null

    await Promise.all([
      ...HOME_ROW_KEYS.map((key) => this.fetchRow(key, language, region)),
      this.fetchGenres(language),
    ])
  }

  private async fetchHeroTrailer(movieId: number, language: string) {
    try {
      const response = await this.moviesService.getMovieVideos(movieId, language)

      runInAction(() => {
        this.heroTrailerKey = getYoutubeTrailerKey(response.results)
      })
    } catch {
      runInAction(() => {
        this.heroTrailerKey = null
      })
    }
  }

  private fetchRowData(key: HomeRowKey, language: string, region: string) {
    switch (key) {
      case 'trending':
        return this.moviesService.getTrending(language, region)
      case 'popular':
        return this.moviesService.getPopular(language, region)
      case 'topRated':
        return this.moviesService.getTopRated(language, region)
      case 'upcoming':
        return this.moviesService.getUpcoming(language, region)
    }
  }
}
