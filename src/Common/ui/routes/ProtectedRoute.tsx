import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { ROUTES } from '../../core/constants/Routes.constants'
import { useAuthStore } from '../../../Auth/data/stores/providers'

interface Props {
  children: ReactNode
}

const ProtectedRouteComponent = ({ children }: Props) => {
  const authStore = useAuthStore()
  const location = useLocation()

  if (!authStore.isAuthenticated) {
    return <Navigate to={ROUTES.login} replace state={{ from: location.pathname }} />
  }

  return <>{children}</>
}

export const ProtectedRoute = observer(ProtectedRouteComponent)