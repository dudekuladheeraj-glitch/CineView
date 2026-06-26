import { useEffect, useState } from 'react'

import { usePreferencesStore } from '../../../Preferences/data/stores/providers'
import {
  HOME_ROW_KEYS,
  HOME_ROW_TITLES,
  type HomeRowKey,
} from '../../core/constants/Movies.constants'
import { filterMoviesByGenre } from '../../core/utils/Movies.utils'
import { useHomeStore } from '../../data/stores/providers'

export const useHomeController = () => {
  const homeStore = useHomeStore()
  const preferencesStore = usePreferencesStore()
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null)
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)

  const { language, region } = preferencesStore.preferences

  useEffect(() => {
    void homeStore.fetchHomeData(language, region)
  }, [homeStore, language, region])

  const getFilteredItems = (key: HomeRowKey) =>
    filterMoviesByGenre(homeStore.rows[key].items, selectedGenreId)

  const retryRow = (key: HomeRowKey) => {
    void homeStore.fetchRow(key, language, region)
  }

  const rows = HOME_ROW_KEYS.map((key) => ({
    key,
    title: HOME_ROW_TITLES[key],
    status: homeStore.rows[key].status,
    error: homeStore.rows[key].error,
    items: getFilteredItems(key),
    onRetry: () => retryRow(key),
  }))

  return {
    heroMovie: homeStore.heroMovie,
    heroTrailerKey: homeStore.heroTrailerKey,
    genres: homeStore.genres,
    rows,
    selectedGenreId,
    setSelectedGenreId,
    isTrailerOpen,
    openTrailer: () => setIsTrailerOpen(true),
    closeTrailer: () => setIsTrailerOpen(false),
  }
}
