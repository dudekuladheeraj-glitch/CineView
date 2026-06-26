import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
import { AuthStore } from './AuthStore';
const authStore = new AuthStore();
const AuthStoreContext = createContext(authStore);
export const AuthProvider = ({ children }) => {
    return _jsx(AuthStoreContext.Provider, { value: authStore, children: children });
};
export const useAuthStore = () => useContext(AuthStoreContext);
