import { STORAGE_KEYS } from '../../../Common/core/constants/Storage.constants'
import type { AuthSession } from '../types/Auth.types'

export const getStoredSession = (): AuthSession | null => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEYS.auth)
    return raw ? (JSON.parse(raw) as AuthSession) : null
  } catch {
    return null
  }
}

export const setStoredSession = (session: AuthSession) => {
  sessionStorage.setItem(STORAGE_KEYS.auth, JSON.stringify(session))
}

export const clearStoredSession = () => {
  sessionStorage.removeItem(STORAGE_KEYS.auth)
}
