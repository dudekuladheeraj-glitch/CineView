import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { usePreferencesStore } from '../../../Preferences/data/stores/providers'
import { useMovieDetailStore } from '../../data/stores/providers'

export const useMovieDetailController = () => {
  const { movieId } = useParams()
  const movieDetailStore = useMovieDetailStore()
  const preferencesStore = usePreferencesStore()
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)

  const { language } = preferencesStore.preferences
  const parsedMovieId = Number(movieId)

  useEffect(() => {
    if (!parsedMovieId || Number.isNaN(parsedMovieId)) {
      return
    }

    void movieDetailStore.fetchMovieDetail(parsedMovieId, language)

    return () => {
      movieDetailStore.clear()
    }
  }, [movieDetailStore, parsedMovieId, language])

  return {
    movie: movieDetailStore.movie.data,
    movieStatus: movieDetailStore.movie.status,
    movieError: movieDetailStore.movie.error,
    credits: movieDetailStore.credits.data ?? [],
    creditsStatus: movieDetailStore.credits.status,
    creditsError: movieDetailStore.credits.error,
    similar: movieDetailStore.similar.items,
    similarStatus: movieDetailStore.similar.status,
    similarError: movieDetailStore.similar.error,
    recommendations: movieDetailStore.recommendations.items,
    recommendationsStatus: movieDetailStore.recommendations.status,
    recommendationsError: movieDetailStore.recommendations.error,
    trailerKey: movieDetailStore.trailerKey,
    pageStatus: movieDetailStore.pageStatus,
    pageError: movieDetailStore.pageError,
    isTrailerOpen,
    openTrailer: () => setIsTrailerOpen(true),
    closeTrailer: () => setIsTrailerOpen(false),
    retryCredits: () => movieDetailStore.retryCredits(language),
    retrySimilar: () => movieDetailStore.retrySimilar(language),
    retryRecommendations: () => movieDetailStore.retryRecommendations(language),
  }
}