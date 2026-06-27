import { makeAutoObservable } from 'mobx'
import i18n from '../../../../i18n'
import { STORAGE_KEYS } from '../../../../Common/core/constants/Storage.constants'
import { DEFAULT_PREFERENCES } from '../../../core/constants/Preferences.constants'
import { getSystemTheme, resolveTheme } from '../../../core/utils/Preferences.utils'
import type { AppLanguage, AppTheme, PreferencesState } from '../../../core/types/Preferences.types'

export class PreferencesStore {
  preferences: PreferencesState = DEFAULT_PREFERENCES
  systemTheme: 'light' | 'dark' = getSystemTheme()

  constructor() {
    makeAutoObservable(this)
    this.hydrate()
    void this.syncLanguage()
    this.applyThemeToDom()
  }

  get resolvedTheme(): 'light' | 'dark' {
    return resolveTheme(this.preferences.theme, this.systemTheme)
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

  async syncLanguage() {
    await i18n.changeLanguage(this.preferences.language)
  }

  setSystemTheme(theme: 'light' | 'dark') {
    this.systemTheme = theme
    this.applyThemeToDom()
  }

  applyThemeToDom() {
    document.documentElement.dataset.theme = this.resolvedTheme
  }

  setLanguage(language: AppLanguage) {
    this.preferences.language = language
    this.persist()
    void this.syncLanguage()
  }

  setRegion(region: string) {
    this.preferences.region = region
    this.persist()
  }

  setTheme(theme: AppTheme) {
    this.preferences.theme = theme
    this.persist()
    this.applyThemeToDom()
  }
}