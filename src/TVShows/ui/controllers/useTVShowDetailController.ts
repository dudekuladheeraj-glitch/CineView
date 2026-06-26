import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { usePreferencesStore } from '../../../Preferences/data/stores/providers'
import { useTVShowDetailStore } from '../../data/stores/providers'

export const useTVShowDetailController = () => {
  const { tvId } = useParams()
  const tvShowDetailStore = useTVShowDetailStore()
  const preferencesStore = usePreferencesStore()

  const parsedTvId = Number(tvId)
  const { language } = preferencesStore.preferences

  useEffect(() => {
    if (!parsedTvId || Number.isNaN(parsedTvId)) return

    void tvShowDetailStore.fetchTVShowDetail(parsedTvId, language)

    return () => {
      tvShowDetailStore.clear()
    }
  }, [tvShowDetailStore, parsedTvId, language])

  return {
    tvShow: tvShowDetailStore.tvShow.data,
    seasons: tvShowDetailStore.tvShow.data?.seasons ?? [],
    pageStatus: tvShowDetailStore.pageStatus,
    pageError: tvShowDetailStore.pageError,
    parsedTvId,
  }
}