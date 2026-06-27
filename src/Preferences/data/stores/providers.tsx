import { createContext, ReactNode, useContext } from 'react'
import { ThemeProvider } from '../../../Common/ui/theme/ThemeProvider'
import { PreferencesSync } from '../../../Common/ui/theme/PreferencesSync'
import { PreferencesStore } from './PreferencesStore'

const preferencesStore = new PreferencesStore()
const PreferencesStoreContext = createContext<PreferencesStore>(preferencesStore)

interface Props {
  children: ReactNode
}

export const PreferencesProvider = ({ children }: Props) => {
  return (
    <PreferencesStoreContext.Provider value={preferencesStore}>
      <PreferencesSync>
        <ThemeProvider>{children}</ThemeProvider>
      </PreferencesSync>
    </PreferencesStoreContext.Provider>
  )
}

export const usePreferencesStore = () => useContext(PreferencesStoreContext)