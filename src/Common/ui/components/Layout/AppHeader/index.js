import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ROUTES } from '../../../../core/constants/Routes.constants';
import { AppLogo } from '../AppLogo';
import { AppSearch } from '../AppSearch';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { UserMenu } from '../UserMenu';
import { HeaderRoot, LeftSection, NavLinks, RightSection, StyledNavLink, } from './StyledComponents';
const NAV_ITEMS = [
    { to: ROUTES.home, label: 'Home', end: true },
    { to: ROUTES.search, label: 'Search', end: false },
    { to: ROUTES.watchlist, label: 'Watchlist', end: false },
    { to: ROUTES.lists, label: 'Lists', end: false },
    { to: ROUTES.settings, label: 'Settings', end: false },
];
export const AppHeader = () => (_jsxs(HeaderRoot, { children: [_jsxs(LeftSection, { children: [_jsx(AppLogo, {}), _jsx(NavLinks, { children: NAV_ITEMS.map(({ to, label, end }) => (_jsx(StyledNavLink, { to: to, end: end, children: label }, to))) })] }), _jsxs(RightSection, { children: [_jsx(AppSearch, {}), _jsx(LanguageSwitcher, {}), _jsx(UserMenu, {})] })] }));
