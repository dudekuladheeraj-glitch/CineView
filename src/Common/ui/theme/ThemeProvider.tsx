import { ReactNode } from 'react'
import { ThemeProvider as ScThemeProvider, createGlobalStyle } from 'styled-components'
import { observer } from 'mobx-react-lite'
import { usePreferencesStore } from '../../../Preferences/data/stores/providers'
import { darkTheme, lightTheme } from '../../core/constants/Theme.constants'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition:
      background 0.2s ease,
      color 0.2s ease;
  }
`

interface Props {
  children: ReactNode
}

const ThemeProviderComponent = ({ children }: Props) => {
  const preferencesStore = usePreferencesStore()
  const theme = preferencesStore.resolvedTheme === 'dark' ? darkTheme : lightTheme

  return (
    <ScThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ScThemeProvider>
  )
}

export const ThemeProvider = observer(ThemeProviderComponent)