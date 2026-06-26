import { createContext, ReactNode, useContext } from 'react'

import { TVShowsServiceAPI } from '../services/TVShowsService/index.api'
import { SeasonDetailStore } from './SeasonDetailStore'
import { TVShowDetailStore } from './TVShowDetailStore'

const tvShowsService = new TVShowsServiceAPI()
const tvShowDetailStore = new TVShowDetailStore(tvShowsService)
const seasonDetailStore = new SeasonDetailStore(tvShowsService)

const TVShowDetailStoreContext = createContext<TVShowDetailStore>(tvShowDetailStore)
const SeasonDetailStoreContext = createContext<SeasonDetailStore>(seasonDetailStore)

interface Props {
  children: ReactNode
}

export const TVShowsProvider = ({ children }: Props) => {
  return (
    <TVShowDetailStoreContext.Provider value={tvShowDetailStore}>
      <SeasonDetailStoreContext.Provider value={seasonDetailStore}>
        {children}
      </SeasonDetailStoreContext.Provider>
    </TVShowDetailStoreContext.Provider>
  )
}

export const useTVShowDetailStore = () => useContext(TVShowDetailStoreContext)
export const useSeasonDetailStore = () => useContext(SeasonDetailStoreContext)