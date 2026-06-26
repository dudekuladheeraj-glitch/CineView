import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { usePreferencesStore } from '../../../Preferences/data/stores/providers'
import { useDebouncedValue } from '../../data/hooks/useDebouncedSearch'
import { useSearchStore } from '../../data/stores/providers'

export const useSearchController = () => {
  const searchStore = useSearchStore()
  const preferencesStore = usePreferencesStore()
  const [searchParams, setSearchParams] = useSearchParams()

  const urlQuery = searchParams.get('q') ?? ''
  const { language } = preferencesStore.preferences
  const debouncedQuery = useDebouncedValue(searchStore.query)

  useEffect(() => {
    searchStore.setQuery(urlQuery)
    searchStore.hydrateRecentSearches()
  }, [searchStore, urlQuery])

  useEffect(() => {
    void searchStore.search(debouncedQuery, language)
  }, [searchStore, debouncedQuery, language])

  const updateQuery = (value: string) => {
    searchStore.setQuery(value)

    if (value.trim()) {
      setSearchParams({ q: value.trim() })
    } else {
      setSearchParams({})
      searchStore.clearResults()
    }
  }

  const selectRecentSearch = (value: string) => {
    updateQuery(value)
  }

  const hasQuery = debouncedQuery.trim().length > 0

  return {
    query: searchStore.query,
    status: searchStore.status,
    error: searchStore.error,
    movies: searchStore.results.movies,
    tvShows: searchStore.results.tvShows,
    people: searchStore.results.people,
    recentSearches: searchStore.recentSearches,
    hasQuery,
    updateQuery,
    selectRecentSearch,
  }
}