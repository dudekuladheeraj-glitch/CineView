import type { AppThemeTokens } from '../types/Theme.types'

export const DEFAULT_THEME = 'system'

export const lightTheme: AppThemeTokens = {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    surfaceMuted: '#f3f4f6',
    text: '#111827',
    textMuted: '#6b7280',
    border: '#e5e7eb',
    primary: '#111827',
    primaryHover: '#1f2937',
    primaryText: '#ffffff',
    danger: '#b91c1c',
    dangerHover: '#991b1b',
    accent: '#2563eb',
    accentSurface: '#dbeafe',
    accentText: '#1d4ed8',
    rating: '#b45309',
    onMedia: '#ffffff',
    onMediaMuted: '#e5e7eb',
    onMediaSubtle: '#d1d5db',
    mediaBackdrop: '#111827',
    spinner: '#2563eb',
    errorSurface: '#fef2f2',
    errorBorder: '#fecaca',
  },
}

export const darkTheme: AppThemeTokens = {
  colors: {
    background: '#0f172a',
    surface: '#1e293b',
    surfaceMuted: '#334155',
    text: '#f8fafc',
    textMuted: '#94a3b8',
    border: '#334155',
    primary: '#f8fafc',
    primaryHover: '#e2e8f0',
    primaryText: '#0f172a',
    danger: '#f87171',
    dangerHover: '#ef4444',
    accent: '#60a5fa',
    accentSurface: '#1e3a5f',
    accentText: '#bfdbfe',
    rating: '#fbbf24',
    onMedia: '#ffffff',
    onMediaMuted: '#e5e7eb',
    onMediaSubtle: '#d1d5db',
    mediaBackdrop: '#0f172a',
    spinner: '#60a5fa',
    errorSurface: '#450a0a',
    errorBorder: '#7f1d1d',
  },
}