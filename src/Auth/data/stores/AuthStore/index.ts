import { makeAutoObservable } from 'mobx'
import { AUTH_CREDENTIALS } from '../../../core/constants/Auth.constants'
import type { AuthSession } from '../../../core/types/Auth.types'
import { clearStoredSession, getStoredSession, setStoredSession } from '../../../core/utils/Session.utils'

export class AuthStore {
  session: AuthSession | null = null

  constructor() {
    makeAutoObservable(this)
    this.hydrateSession()
  }

  get isAuthenticated() {
    return Boolean(this.session?.isAuthenticated)
  }

  get username() {
    return this.session?.username ?? ''
  }

  hydrateSession() {
    this.session = getStoredSession()
  }

  login(username: string, password: string) {
    if (username !== AUTH_CREDENTIALS.username || password !== AUTH_CREDENTIALS.password) {
      return false
    }

    this.session = {
      isAuthenticated: true,
      username,
      loginAt: new Date().toISOString(),
    }
    setStoredSession(this.session)
    return true
  }

  logout() {
    this.session = null
    clearStoredSession()
  }
}
