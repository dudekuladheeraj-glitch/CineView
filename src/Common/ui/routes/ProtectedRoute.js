import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useAuthStore } from '../../../Auth/data/stores/providers';
import { ROUTES } from '../../core/constants/Routes.constants';
const ProtectedRouteComponent = ({ children }) => {
    const authStore = useAuthStore();
    const location = useLocation();
    if (!authStore.isAuthenticated) {
        return (_jsx(Navigate, { replace: true, to: ROUTES.login, state: {
                from: location,
            } }));
    }
    return _jsx(_Fragment, { children: children });
};
export const ProtectedRoute = observer(ProtectedRouteComponent);
