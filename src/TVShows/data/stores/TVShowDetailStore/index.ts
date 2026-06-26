import { makeAutoObservable, runInAction } from 'mobx'

import { TmdbApiError } from '../../../../Common/core/errors/Tmdb.errors'
import type { TvDetail } from '../../../../Common/core/types/Tmdb.types'
import type {
  TVShowDetailSectionState,
  TVShowPageStatus,
} from '../../../core/types/TVShow.types'
import type { TVShowsService } from '../../services/TVShowsService'

const createTVShowSection = (): TVShowDetailSectionState<TvDetail> => ({
  status: 'idle',
  error: null,
  data: null,
})

export class TVShowDetailStore {
  tvId: number | null = null
  pageStatus: TVShowPageStatus = 'idle'
  pageError: string | null = null
  tvShow: TVShowDetailSectionState<TvDetail> = createTVShowSection()

  constructor(private readonly tvShowsService: TVShowsService) {
    makeAutoObservable(this)
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof TmdbApiError) return error.message
    if (error instanceof Error) return error.message
    return 'Failed to load TV show'
  }

  clear() {
    this.tvId = null
    this.pageStatus = 'idle'
    this.pageError = null
    this.tvShow = createTVShowSection()
  }

  async fetchTVShowDetail(tvId: number, language: string) {
    this.tvId = tvId
    this.pageStatus = 'loading'
    this.pageError = null
    this.tvShow = { status: 'loading', error: null, data: null }

    try {
      const data = await this.tvShowsService.getTVShowDetail(tvId, language)

      runInAction(() => {
        this.tvShow = { status: 'success', error: null, data }
        this.pageStatus = 'success'
      })
    } catch (error) {
      runInAction(() => {
        if (error instanceof TmdbApiError && error.statusCode === 404) {
          this.pageStatus = 'notFound'
          this.pageError = 'TV show not found'
          return
        }

        this.pageStatus = 'error'
        this.pageError = this.getErrorMessage(error)
        this.tvShow = {
          status: 'error',
          error: this.getErrorMessage(error),
          data: null,
        }
      })
    }
  }
}