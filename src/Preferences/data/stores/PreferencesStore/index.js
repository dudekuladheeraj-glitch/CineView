import { makeAutoObservable } from 'mobx';
import { STORAGE_KEYS } from '../../../../Common/core/constants/Storage.constants';
import { DEFAULT_PREFERENCES } from '../../../core/constants/Preferences.constants';
export class PreferencesStore {
    constructor() {
        Object.defineProperty(this, "preferences", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: DEFAULT_PREFERENCES
        });
        makeAutoObservable(this);
        this.hydrate();
    }
    hydrate() {
        try {
            const raw = localStorage.getItem(STORAGE_KEYS.preferences);
            this.preferences = raw ? JSON.parse(raw) : DEFAULT_PREFERENCES;
        }
        catch {
            this.preferences = DEFAULT_PREFERENCES;
        }
    }
    persist() {
        localStorage.setItem(STORAGE_KEYS.preferences, JSON.stringify(this.preferences));
    }
    setLanguage(language) {
        this.preferences.language = language;
        this.persist();
    }
    setRegion(region) {
        this.preferences.region = region;
        this.persist();
    }
    setTheme(theme) {
        this.preferences.theme = theme;
        this.persist();
    }
}
