import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { useAuthStore } from '../../../../../Auth/data/stores/providers'
import { Avatar, LogoutButton, UserMenuWrapper, Username } from './StyledComponents'

const UserMenuComponent = () => {
  const { t } = useTranslation('common')
  const authStore = useAuthStore()
  const initial = authStore.username.charAt(0).toUpperCase() || 'U'

  return (
    <UserMenuWrapper>
      <Avatar aria-label={t('userMenu.loggedInAs', { username: authStore.username })}>
        {initial}
      </Avatar>
      <Username>{authStore.username}</Username>
      <LogoutButton type="button" onClick={() => authStore.logout()}>
        {t('userMenu.logout')}
      </LogoutButton>
    </UserMenuWrapper>
  )
}

export const UserMenu = observer(UserMenuComponent)