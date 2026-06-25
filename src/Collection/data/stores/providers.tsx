import { createContext, ReactNode, useContext } from 'react'
import { CollectionStore } from './CollectionStore'

const collectionStore = new CollectionStore()
const CollectionStoreContext = createContext<CollectionStore>(collectionStore)

interface Props {
  children: ReactNode
}

export const CollectionProvider = ({ children }: Props) => {
  return <CollectionStoreContext.Provider value={collectionStore}>{children}</CollectionStoreContext.Provider>
}

export const useCollectionStore = () => useContext(CollectionStoreContext)
