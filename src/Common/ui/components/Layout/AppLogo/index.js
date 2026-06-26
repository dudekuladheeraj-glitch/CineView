import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ROUTES } from '../../../../core/constants/Routes.constants';
import { LogoLink, LogoIcon, LogoText } from './StyledComponents';
export const AppLogo = () => (_jsxs(LogoLink, { to: ROUTES.home, children: [_jsx(LogoIcon, { children: "C" }), _jsx(LogoText, { children: "CineView" })] }));
