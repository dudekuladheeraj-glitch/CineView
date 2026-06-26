import { observer } from 'mobx-react-lite'
import { useAuthStore } from '../../../../../Auth/data/stores/providers'
import { Avatar, LogoutButton, UserMenuWrapper, Username } from './StyledComponents'

const UserMenuComponent = () => {
  const authStore = useAuthStore()
  const initial = authStore.username.charAt(0).toUpperCase() || 'U'

  return (
    <UserMenuWrapper>
      <Avatar aria-label={`Logged in as ${authStore.username}`}>{initial}</Avatar>
      <Username>{authStore.username}</Username>
      <LogoutButton type="button" onClick={() => authStore.logout()}>
        Logout
      </LogoutButton>
    </UserMenuWrapper>
  )
}

export const UserMenu = observer(UserMenuComponent)
