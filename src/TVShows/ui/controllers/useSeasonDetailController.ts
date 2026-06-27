import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { usePreferencesStore } from '../../../Preferences/data/stores/providers'
import { useSeasonDetailStore } from '../../data/stores/providers'

export const useSeasonDetailController = () => {
  const { tvId, seasonNumber } = useParams()
  const seasonDetailStore = useSeasonDetailStore()
  const preferencesStore = usePreferencesStore()

  const parsedTvId = Number(tvId)
  const parsedSeasonNumber = Number(seasonNumber)
  const { language } = preferencesStore.preferences

  useEffect(() => {
    if (!parsedTvId || Number.isNaN(parsedTvId)) return
    if (!parsedSeasonNumber || Number.isNaN(parsedSeasonNumber)) return

    void seasonDetailStore.fetchSeasonDetail(parsedTvId, parsedSeasonNumber, language)
  }, [seasonDetailStore, parsedTvId, parsedSeasonNumber, language])

  useEffect(() => {
    return () => {
      seasonDetailStore.clear()
    }
  }, [seasonDetailStore])

  return {
    episodes: seasonDetailStore.seasonState.episodes,
    season: seasonDetailStore.seasonState.season,
    status: seasonDetailStore.seasonState.status,
    error: seasonDetailStore.seasonState.error,
  }
}