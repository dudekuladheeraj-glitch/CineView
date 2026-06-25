import { createContext, ReactNode, useContext } from 'react'
import { AuthStore } from './AuthStore'

const authStore = new AuthStore()
const AuthStoreContext = createContext<AuthStore>(authStore)

interface Props {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  return <AuthStoreContext.Provider value={authStore}>{children}</AuthStoreContext.Provider>
}

export const useAuthStore = () => useContext(AuthStoreContext)
