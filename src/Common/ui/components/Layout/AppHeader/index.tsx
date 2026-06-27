import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'

import { ROUTES } from '../../../../core/constants/Routes.constants'
import { AppLogo } from '../AppLogo'
import { AppSearch } from '../AppSearch'
import { LanguageSwitcher } from '../LanguageSwitcher'
import { UserMenu } from '../UserMenu'
import {
  HeaderRoot,
  LeftSection,
  NavLinks,
  RightSection,
  StyledNavLink,
} from './StyledComponents'

const NAV_ROUTES = [
  { to: ROUTES.home, key: 'home', end: true },
  { to: ROUTES.search, key: 'search', end: false },
  { to: ROUTES.watchlist, key: 'watchlist', end: false },
  { to: ROUTES.lists, key: 'lists', end: false },
  { to: ROUTES.settings, key: 'settings', end: false },
] as const

const AppHeaderComponent = () => {
  const { t } = useTranslation('common')

  return (
    <HeaderRoot>
      <LeftSection>
        <AppLogo />

        <NavLinks>
          {NAV_ROUTES.map(({ to, key, end }) => (
            <StyledNavLink key={to} to={to} end={end}>
              {t(`nav.${key}`)}
            </StyledNavLink>
          ))}
        </NavLinks>
      </LeftSection>

      <RightSection>
        <AppSearch />
        <LanguageSwitcher />
        <UserMenu />
      </RightSection>
    </HeaderRoot>
  )
}

export const AppHeader = observer(AppHeaderComponent)