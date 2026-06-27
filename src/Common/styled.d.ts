import 'styled-components'
import type { AppThemeTokens } from './core/types/Theme.types'

declare module 'styled-components' {
  export interface DefaultTheme extends AppThemeTokens {}
}