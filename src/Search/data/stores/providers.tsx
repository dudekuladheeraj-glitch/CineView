import { createContext, ReactNode, useContext } from 'react'

import { SearchServiceAPI } from '../services/SearchService/index.api'
import { SearchStore } from './SearchStore'

const searchService = new SearchServiceAPI()
const searchStore = new SearchStore(searchService)

const SearchStoreContext = createContext<SearchStore>(searchStore)

interface Props {
  children: ReactNode
}

export const SearchProvider = ({ children }: Props) => {
  return <SearchStoreContext.Provider value={searchStore}>{children}</SearchStoreContext.Provider>
}

export const useSearchStore = () => useContext(SearchStoreContext)