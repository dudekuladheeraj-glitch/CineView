import { Outlet } from 'react-router-dom'
import { AppHeader } from '../../components/Layout/AppHeader'
import { Layout, Main } from './StyledComponents'

export const ProtectedLayout = () => (
  <Layout>
    <AppHeader />
    <Main>
      <Outlet />
    </Main>
  </Layout>
)
