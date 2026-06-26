import { makeAutoObservable, runInAction } from 'mobx'

import { TmdbApiError } from '../../../../Common/core/errors/Tmdb.errors'
import type { GroupedSearchResults } from '../../../core/types/Search.types'
import {
  getRecentSearches,
  groupSearchResults,
  saveRecentSearch,
} from '../../../core/utils/Search.utils'
import type { SearchService } from '../../services/SearchService'

const emptyResults = (): GroupedSearchResults => ({
  movies: [],
  tvShows: [],
  people: [],
})

export class SearchStore {
  query = ''
  status: 'idle' | 'loading' | 'success' | 'error' = 'idle'
  error: string | null = null
  results: GroupedSearchResults = emptyResults()
  recentSearches: string[] = getRecentSearches()

  constructor(private readonly searchService: SearchService) {
    makeAutoObservable(this)
  }

  setQuery(query: string) {
    this.query = query
  }

  hydrateRecentSearches() {
    this.recentSearches = getRecentSearches()
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof TmdbApiError) return error.message
    if (error instanceof Error) return error.message
    return 'Search failed'
  }

  async search(query: string, language: string) {
    const trimmed = query.trim()

    if (!trimmed) {
      this.status = 'idle'
      this.error = null
      this.results = emptyResults()
      return
    }

    this.status = 'loading'
    this.error = null

    try {
      const response = await this.searchService.searchMulti(trimmed, language)

      runInAction(() => {
        this.results = groupSearchResults(response.results)
        this.status = 'success'
        saveRecentSearch(trimmed)
        this.recentSearches = getRecentSearches()
      })
    } catch (error) {
      runInAction(() => {
        this.status = 'error'
        this.error = this.getErrorMessage(error)
        this.results = emptyResults()
      })
    }
  }

  clearResults() {
    this.status = 'idle'
    this.error = null
    this.results = emptyResults()
  }
}