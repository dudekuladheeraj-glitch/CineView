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

const NAV_ITEMS = [
  { to: ROUTES.home, label: 'Home', end: true },
  { to: ROUTES.search, label: 'Search', end: false },
  { to: ROUTES.watchlist, label: 'Watchlist', end: false },
  { to: ROUTES.lists, label: 'Lists', end: false },
  { to: ROUTES.settings, label: 'Settings', end: false },
] as const

export const AppHeader = () => (
  <HeaderRoot>
    <LeftSection>
      <AppLogo />

      <NavLinks>
        {NAV_ITEMS.map(({ to, label, end }) => (
          <StyledNavLink key={to} to={to} end={end}>
            {label}
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
