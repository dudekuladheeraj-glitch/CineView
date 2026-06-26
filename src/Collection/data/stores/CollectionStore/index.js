import { makeAutoObservable } from 'mobx';
import { STORAGE_KEYS } from '../../../../Common/core/constants/Storage.constants';
import { COLLECTION_VERSION } from '../../../core/constants/Collection.constants';
const defaultState = {
    version: COLLECTION_VERSION,
    watchlist: [],
    customLists: [],
    episodeProgress: {},
};
export class CollectionStore {
    constructor() {
        Object.defineProperty(this, "collection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: defaultState
        });
        makeAutoObservable(this);
        this.hydrate();
    }
    hydrate() {
        try {
            const raw = localStorage.getItem(STORAGE_KEYS.collection);
            this.collection = raw ? JSON.parse(raw) : defaultState;
        }
        catch {
            this.collection = defaultState;
        }
    }
}
