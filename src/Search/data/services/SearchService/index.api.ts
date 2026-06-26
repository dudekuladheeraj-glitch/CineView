import { mapAppLanguageToTmdb, paginatedSearchMultiSchema, tmdbClient } from '../../../../Common'
import type { SearchService } from './index'

export class SearchServiceAPI implements SearchService {
  async searchMulti(query: string, language: string, page = 1) {
    return tmdbClient.get('/search/multi', paginatedSearchMultiSchema, {
      language: mapAppLanguageToTmdb(language),
      params: {
        query,
        page,
        include_adult: false,
      },
    })
  }
}