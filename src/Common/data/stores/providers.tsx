import { ReactNode } from 'react'
import { AuthProvider } from '../../../Auth/data/stores/providers'
import { PreferencesProvider } from '../../../Preferences/data/stores/providers'
import { CollectionProvider } from '../../../Collection/data/stores/providers'

interface Props {
  children: ReactNode
}

export const AppProviders = ({ children }: Props) => {
  return (
    <PreferencesProvider>
      <AuthProvider>
        <CollectionProvider>{children}</CollectionProvider>
      </AuthProvider>
    </PreferencesProvider>
  )
}