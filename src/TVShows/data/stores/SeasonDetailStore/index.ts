import { makeAutoObservable, runInAction } from 'mobx'
import { resolveStoreError } from '../../../../Common'
import { TmdbApiError } from '../../../../Common/core/errors/Tmdb.errors'
import type { SeasonDetailSectionState } from '../../../core/types/TVShow.types'
import type { TVShowsService } from '../../services/TVShowsService'

const createInitialState = (): SeasonDetailSectionState => ({
  status: 'idle',
  error: null,
  episodes: [],
  season: null,
})

export class SeasonDetailStore {
  seasonState: SeasonDetailSectionState = createInitialState()

  constructor(private readonly tvShowsService: TVShowsService) {
    makeAutoObservable(this)
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof TmdbApiError) return error.message
    if (error instanceof Error) return error.message
    return resolveStoreError(error, 'common:storeErrors.loadSeason')
  }

  clear() {
    this.seasonState = createInitialState()
  }

  async fetchSeasonDetail(tvId: number, seasonNumber: number, language: string) {
    this.seasonState = { status: 'loading', error: null, episodes: [], season: null }

    try {
      const data = await this.tvShowsService.getSeasonDetail(tvId, seasonNumber, language)

      runInAction(() => {
        this.seasonState = {
          status: 'success',
          error: null,
          episodes: data.episodes ?? [],
          season: {
            id: data.id,
            name: data.name,
            season_number: data.season_number,
            episode_count: data.episodes?.length ?? 0,
            poster_path: data.poster_path,
            overview: data.overview,
            air_date: data.air_date,
          },
        }
      })
    } catch (error) {
      runInAction(() => {
        this.seasonState = {
          status: 'error',
          error: this.getErrorMessage(error),
          episodes: [],
          season: null,
        }
      })
    }
  }
}