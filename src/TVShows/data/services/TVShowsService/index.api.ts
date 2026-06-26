import { mapAppLanguageToTmdb, seasonDetailSchema, tmdbClient, tvDetailSchema } from '../../../../Common'
import type { TVShowsService } from './index'

export class TVShowsServiceAPI implements TVShowsService {
  async getTVShowDetail(tvId: number, language: string) {
    return tmdbClient.get(`/tv/${tvId}`, tvDetailSchema, {
      language: mapAppLanguageToTmdb(language),
    })
  }

  async getSeasonDetail(tvId: number, seasonNumber: number, language: string) {
    return tmdbClient.get(`/tv/${tvId}/season/${seasonNumber}`, seasonDetailSchema, {
      language: mapAppLanguageToTmdb(language),
    })
  }
}