import { jsx as _jsx } from "react/jsx-runtime";
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AppProviders } from './Common/data/stores/providers';
export const App = () => {
    return (_jsx(AppProviders, { children: _jsx(RouterProvider, { router: router }) }));
};
