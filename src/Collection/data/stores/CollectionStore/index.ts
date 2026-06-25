import { makeAutoObservable } from 'mobx'
import { STORAGE_KEYS } from '../../../../Common/core/constants/Storage.constants'
import type { CollectionState } from '../../../core/types/Collection.types'
import { COLLECTION_VERSION } from '../../../core/constants/Collection.constants'

const defaultState: CollectionState = {
  version: COLLECTION_VERSION,
  watchlist: [],
  customLists: [],
  episodeProgress: {},
}

export class CollectionStore {
  collection: CollectionState = defaultState

  constructor() {
    makeAutoObservable(this)
    this.hydrate()
  }

  hydrate() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.collection)
      this.collection = raw ? (JSON.parse(raw) as CollectionState) : defaultState
    } catch {
      this.collection = defaultState
    }
  }
}
