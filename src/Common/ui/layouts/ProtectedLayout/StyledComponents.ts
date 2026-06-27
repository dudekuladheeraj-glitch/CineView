import styled from 'styled-components'

export const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
`

export const Main = styled.main`
  flex: 1;
`