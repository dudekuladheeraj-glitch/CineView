import { makeAutoObservable } from 'mobx';
import { AUTH_CREDENTIALS } from '../../../core/constants/Auth.constants';
import { clearStoredSession, getStoredSession, setStoredSession } from '../../../core/utils/Session.utils';
export class AuthStore {
    constructor() {
        Object.defineProperty(this, "session", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        makeAutoObservable(this);
        this.hydrateSession();
    }
    get isAuthenticated() {
        return Boolean(this.session?.isAuthenticated);
    }
    get username() {
        return this.session?.username ?? '';
    }
    hydrateSession() {
        this.session = getStoredSession();
    }
    login(username, password) {
        if (username !== AUTH_CREDENTIALS.username || password !== AUTH_CREDENTIALS.password) {
            return false;
        }
        this.session = {
            isAuthenticated: true,
            username,
            loginAt: new Date().toISOString(),
        };
        setStoredSession(this.session);
        return true;
    }
    logout() {
        this.session = null;
        clearStoredSession();
    }
}
