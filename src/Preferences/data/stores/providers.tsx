import { createContext, ReactNode, useContext } from 'react'
import { PreferencesStore } from './PreferencesStore'

const preferencesStore = new PreferencesStore()
const PreferencesStoreContext = createContext<PreferencesStore>(preferencesStore)

interface Props {
  children: ReactNode
}

export const PreferencesProvider = ({ children }: Props) => {
  return <PreferencesStoreContext.Provider value={preferencesStore}>{children}</PreferencesStoreContext.Provider>
}

export const usePreferencesStore = () => useContext(PreferencesStoreContext)
