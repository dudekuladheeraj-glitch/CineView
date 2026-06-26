import { makeAutoObservable } from 'mobx'
import { STORAGE_KEYS } from '../../../../Common/core/constants/Storage.constants'
import { DEFAULT_PREFERENCES } from '../../../core/constants/Preferences.constants'
import type { AppLanguage, AppTheme, PreferencesState } from '../../../core/types/Preferences.types'

export class PreferencesStore {
  preferences: PreferencesState = DEFAULT_PREFERENCES

  constructor() {
    makeAutoObservable(this)
    this.hydrate()
  }

  hydrate() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.preferences)
      this.preferences = raw ? (JSON.parse(raw) as PreferencesState) : DEFAULT_PREFERENCES
    } catch {
      this.preferences = DEFAULT_PREFERENCES
    }
  }

  persist() {
    localStorage.setItem(STORAGE_KEYS.preferences, JSON.stringify(this.preferences))
  }

  setLanguage(language: AppLanguage) {
    this.preferences.language = language
    this.persist()
  }

  setRegion(region: string) {
    this.preferences.region = region
    this.persist()
  }

  setTheme(theme: AppTheme) {
    this.preferences.theme = theme
    this.persist()
  }
}