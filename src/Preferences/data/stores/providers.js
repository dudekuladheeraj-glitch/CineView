import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
import { PreferencesStore } from './PreferencesStore';
const preferencesStore = new PreferencesStore();
const PreferencesStoreContext = createContext(preferencesStore);
export const PreferencesProvider = ({ children }) => {
    return _jsx(PreferencesStoreContext.Provider, { value: preferencesStore, children: children });
};
export const usePreferencesStore = () => useContext(PreferencesStoreContext);
