import type { PaginatedSearchMulti } from '../../../../Common/core/types/Tmdb.types'

export interface SearchService {
  searchMulti(query: string, language: string, page?: number): Promise<PaginatedSearchMulti>
}