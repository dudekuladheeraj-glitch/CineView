import { jsx as _jsx } from "react/jsx-runtime";
import { AuthProvider } from '../../../Auth/data/stores/providers';
import { PreferencesProvider } from '../../../Preferences/data/stores/providers';
import { CollectionProvider } from '../../../Collection/data/stores/providers';
export const AppProviders = ({ children }) => {
    return (_jsx(PreferencesProvider, { children: _jsx(AuthProvider, { children: _jsx(CollectionProvider, { children: children }) }) }));
};
