import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { ROUTES } from '../../core/constants/Routes.constants'
import { useAuthStore } from '../../../Auth/data/stores/providers'

interface Props {
  children: ReactNode
}

const PublicRouteComponent = ({ children }: Props) => {
  const authStore = useAuthStore()

  if (authStore.isAuthenticated) {
    return <Navigate to={ROUTES.home} replace />
  }

  return <>{children}</>
}

export const PublicRoute = observer(PublicRouteComponent)