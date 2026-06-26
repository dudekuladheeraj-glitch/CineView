import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import { AppHeader } from '../../components/Layout/AppHeader';
import { Layout, Main } from './StyledComponents';
export const ProtectedLayout = () => (_jsxs(Layout, { children: [_jsx(AppHeader, {}), _jsx(Main, { children: _jsx(Outlet, {}) })] }));
