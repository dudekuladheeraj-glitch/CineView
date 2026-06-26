import type { SearchMultiResult } from '../../../Common/core/types/Tmdb.types'
import type { GroupedSearchResults } from '../types/Search.types'
import { MAX_RECENT_SEARCHES, RECENT_SEARCHES_KEY } from '../constants/Search.constants'

export const groupSearchResults = (results: SearchMultiResult[]): GroupedSearchResults => ({
  movies: results.filter((item) => item.media_type === 'movie'),
  tvShows: results.filter((item) => item.media_type === 'tv'),
  people: results.filter((item) => item.media_type === 'person'),
})

export const getRecentSearches = (): string[] => {
  try {
    const raw = localStorage.getItem(RECENT_SEARCHES_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

export const saveRecentSearch = (query: string) => {
  const trimmed = query.trim()
  if (!trimmed) return

  const existing = getRecentSearches().filter(
    (item) => item.toLowerCase() !== trimmed.toLowerCase(),
  )

  const updated = [trimmed, ...existing].slice(0, MAX_RECENT_SEARCHES)
  localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated))
}