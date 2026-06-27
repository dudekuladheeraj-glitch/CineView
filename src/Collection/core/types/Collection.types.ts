export type WatchStatus = 'want_to_watch' | 'watching' | 'completed'

export interface WatchlistEntry {
  id: string
  mediaId: number
  mediaType: 'movie' | 'tv'
  status: WatchStatus
  note: string
  cachedTitle: string
  cachedPoster: string | null
  addedAt: string
  updatedAt: string
}

export interface CustomList {
  id: string
  name: string
}

export interface CollectionState {
  version: number
  watchlist: WatchlistEntry[]
  customLists: CustomList[]
  episodeProgress: Record<string, boolean>
}
