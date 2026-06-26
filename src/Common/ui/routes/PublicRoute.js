import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ROUTES } from '../../core/constants/Routes.constants';
import { useAuthStore } from '../../../Auth/data/stores/providers';
const PublicRouteComponent = ({ children }) => {
    const authStore = useAuthStore();
    if (authStore.isAuthenticated) {
        return _jsx(Navigate, { replace: true, to: ROUTES.home });
    }
    return _jsx(_Fragment, { children: children });
};
export const PublicRoute = observer(PublicRouteComponent);
