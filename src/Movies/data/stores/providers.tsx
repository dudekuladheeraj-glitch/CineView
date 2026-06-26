import { createContext, ReactNode, useContext } from 'react'

import { MoviesServiceAPI } from '../services/MoviesService/index.api'
import { HomeStore } from './HomeStore'
import { MovieDetailStore } from './MovieDetailStore'

const moviesService = new MoviesServiceAPI()
const homeStore = new HomeStore(moviesService)
const movieDetailStore = new MovieDetailStore(moviesService)

const HomeStoreContext = createContext<HomeStore>(homeStore)
const MovieDetailStoreContext = createContext<MovieDetailStore>(movieDetailStore)

interface Props {
  children: ReactNode
}

export const MoviesProvider = ({ children }: Props) => {
  return (
    <HomeStoreContext.Provider value={homeStore}>
      <MovieDetailStoreContext.Provider value={movieDetailStore}>
        {children}
      </MovieDetailStoreContext.Provider>
    </HomeStoreContext.Provider>
  )
}

export const useHomeStore = () => useContext(HomeStoreContext)
export const useMovieDetailStore = () => useContext(MovieDetailStoreContext)