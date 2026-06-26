import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { useAuthStore } from '../../../Auth/data/stores/providers'
import { ROUTES } from '../../core/constants/Routes.constants'

interface Props {
  children: ReactNode
}

const ProtectedRouteComponent = ({ children }: Props) => {
  const authStore = useAuthStore()
  const location = useLocation()

  if (!authStore.isAuthenticated) {
    return (
      <Navigate
        replace
        to={ROUTES.login}
        state={{
          from: location,
        }}
      />
    )
  }

  return <>{children}</>
}

export const ProtectedRoute = observer(ProtectedRouteComponent)