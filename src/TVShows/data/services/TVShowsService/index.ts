import type { SeasonDetail, TvDetail } from '../../../../Common/core/types/Tmdb.types'

export interface TVShowsService {
  getTVShowDetail(tvId: number, language: string): Promise<TvDetail>
  getSeasonDetail(tvId: number, seasonNumber: number, language: string): Promise<SeasonDetail>
}