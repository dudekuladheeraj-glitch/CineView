import type { SearchMultiResult } from '../../../Common/core/types/Tmdb.types'
import type { AsyncStatus } from '../../../Common/core/types/Common.types'

export interface GroupedSearchResults {
  movies: SearchMultiResult[]
  tvShows: SearchMultiResult[]
  people: SearchMultiResult[]
}

export interface SearchState {
  query: string
  status: AsyncStatus
  error: string | null
  results: GroupedSearchResults
  recentSearches: string[]
}