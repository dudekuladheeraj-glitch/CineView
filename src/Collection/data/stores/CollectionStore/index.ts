import { makeAutoObservable, action } from 'mobx'
// use built-in crypto.randomUUID
import { STORAGE_KEYS } from '../../../../Common/core/constants/Storage.constants'
import type { CollectionState, WatchlistEntry, WatchStatus } from '../../../core/types/Collection.types'
import { COLLECTION_VERSION } from '../../../core/constants/Collection.constants'
import { watchlistWriteSchema, watchlistUpdateSchema } from '../../../core/types/index.zod'

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

  private persist() {
    try {
      localStorage.setItem(STORAGE_KEYS.collection, JSON.stringify(this.collection))
    } catch {
      // storage full or unavailable
    }
  }

  // Computed helpers
  isInWatchlist(mediaId: number, mediaType: 'movie' | 'tv'): boolean {
    return this.collection.watchlist.some(
      (e) => e.mediaId === mediaId && e.mediaType === mediaType
    )
  }

  getEntry(mediaId: number, mediaType: 'movie' | 'tv'): WatchlistEntry | undefined {
    return this.collection.watchlist.find(
      (e) => e.mediaId === mediaId && e.mediaType === mediaType
    )
  }

  get watchlistCount(): number {
    return this.collection.watchlist.length
  }

  get countByStatus(): Record<WatchStatus, number> {
    const counts: Record<WatchStatus, number> = {
      want_to_watch: 0,
      watching: 0,
      completed: 0,
    }
    for (const entry of this.collection.watchlist) {
      counts[entry.status]++
    }
    return counts
  }

  // Actions
  addToWatchlist = action((data: {
    mediaId: number
    mediaType: 'movie' | 'tv'
    cachedTitle: string
    cachedPoster: string | null
  }) => {
    const payload = {
      ...data,
      status: 'want_to_watch' as WatchStatus,
      note: '',
    }

    const parsed = watchlistWriteSchema.safeParse(payload)
    if (!parsed.success) return

    if (this.isInWatchlist(data.mediaId, data.mediaType)) return

    const now = new Date().toISOString()
    const entry: WatchlistEntry = {
      id: crypto.randomUUID(),
      ...parsed.data,
      addedAt: now,
      updatedAt: now,
    }

    this.collection = {
      ...this.collection,
      watchlist: [entry, ...this.collection.watchlist],
    }
    this.persist()
  })

  removeFromWatchlist = action((mediaId: number, mediaType: 'movie' | 'tv') => {
    this.collection = {
      ...this.collection,
      watchlist: this.collection.watchlist.filter(
        (e) => !(e.mediaId === mediaId && e.mediaType === mediaType)
      ),
    }
    this.persist()
  })

  toggleWatchlist = action((data: {
    mediaId: number
    mediaType: 'movie' | 'tv'
    cachedTitle: string
    cachedPoster: string | null
  }) => {
    if (this.isInWatchlist(data.mediaId, data.mediaType)) {
      this.removeFromWatchlist(data.mediaId, data.mediaType)
    } else {
      this.addToWatchlist(data)
    }
  })

  updateStatus = action((entryId: string, status: WatchStatus) => {
    const parsed = watchlistUpdateSchema.safeParse({ status })
    if (!parsed.success) return

    this.collection = {
      ...this.collection,
      watchlist: this.collection.watchlist.map((e) =>
        e.id === entryId
          ? { ...e, status, updatedAt: new Date().toISOString() }
          : e
      ),
    }
    this.persist()
  })

  updateNote = action((entryId: string, note: string) => {
    const parsed = watchlistUpdateSchema.safeParse({ note })
    if (!parsed.success) return

    this.collection = {
      ...this.collection,
      watchlist: this.collection.watchlist.map((e) =>
        e.id === entryId
          ? { ...e, note: parsed.data.note ?? '', updatedAt: new Date().toISOString() }
          : e
      ),
    }
    this.persist()
  })
}
