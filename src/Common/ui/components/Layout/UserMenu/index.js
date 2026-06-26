import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { observer } from 'mobx-react-lite';
import { useAuthStore } from '../../../../../Auth/data/stores/providers';
import { Avatar, LogoutButton, UserMenuWrapper, Username } from './StyledComponents';
const UserMenuComponent = () => {
    const authStore = useAuthStore();
    const initial = authStore.username.charAt(0).toUpperCase() || 'U';
    return (_jsxs(UserMenuWrapper, { children: [_jsx(Avatar, { "aria-label": `Logged in as ${authStore.username}`, children: initial }), _jsx(Username, { children: authStore.username }), _jsx(LogoutButton, { type: "button", onClick: () => authStore.logout(), children: "Logout" })] }));
};
export const UserMenu = observer(UserMenuComponent);
