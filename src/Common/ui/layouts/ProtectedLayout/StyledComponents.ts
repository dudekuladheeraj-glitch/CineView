import styled from 'styled-components'

export const Layout = styled.div`
  min-height: 100vh;
`

export const Nav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e5e5;
`

export const Brand = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
`

export const NavLinks = styled.nav`
  display: flex;
  gap: 16px;
`

export const Main = styled.main`
  padding: 24px;
`

export const LogoutButton = styled.button`
  padding: 8px 12px;
  cursor: pointer;
`
