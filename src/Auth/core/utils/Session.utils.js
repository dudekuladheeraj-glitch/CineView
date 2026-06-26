import { STORAGE_KEYS } from '../../../Common/core/constants/Storage.constants';
export const getStoredSession = () => {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEYS.auth);
        return raw ? JSON.parse(raw) : null;
    }
    catch {
        return null;
    }
};
export const setStoredSession = (session) => {
    sessionStorage.setItem(STORAGE_KEYS.auth, JSON.stringify(session));
};
export const clearStoredSession = () => {
    sessionStorage.removeItem(STORAGE_KEYS.auth);
};
