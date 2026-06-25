import { Link, Outlet } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { ROUTES } from '../../../core/constants/Routes.constants'
import { useAuthStore } from '../../../../Auth/data/stores/providers'
import { Layout, Nav, Main, Brand, NavLinks, LogoutButton } from './StyledComponents'

const ProtectedLayoutComponent = () => {
  const authStore = useAuthStore()

  return (
    <Layout>
      <Nav>
        <Brand>CineView</Brand>

        <NavLinks>
          <Link to={ROUTES.home}>Home</Link>
          <Link to={ROUTES.search}>Search</Link>
          <Link to={ROUTES.watchlist}>Watchlist</Link>
          <Link to={ROUTES.lists}>Lists</Link>
          <Link to={ROUTES.settings}>Settings</Link>
        </NavLinks>

        <LogoutButton type="button" onClick={() => authStore.logout()}>
          Logout
        </LogoutButton>
      </Nav>

      <Main>
        <Outlet />
      </Main>
    </Layout>
  )
}

export const ProtectedLayout = observer(ProtectedLayoutComponent)