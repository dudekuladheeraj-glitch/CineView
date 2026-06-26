import { jsx as _jsx } from "react/jsx-runtime";
import { observer } from 'mobx-react-lite';
import { usePreferencesStore } from '../../../../../Preferences/data/stores/providers';
import { Select } from './StyledComponents';
const LANGUAGE_OPTIONS = [
    { value: 'en', label: 'English' },
    { value: 'te', label: 'Telugu' },
];
const LanguageSwitcherComponent = () => {
    const preferencesStore = usePreferencesStore();
    const handleChange = (event) => {
        preferencesStore.setLanguage(event.target.value);
    };
    return (_jsx(Select, { value: preferencesStore.preferences.language, onChange: handleChange, "aria-label": "Select language", children: LANGUAGE_OPTIONS.map(({ value, label }) => (_jsx("option", { value: value, children: label }, value))) }));
};
export const LanguageSwitcher = observer(LanguageSwitcherComponent);
