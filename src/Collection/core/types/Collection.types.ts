export interface WatchlistEntry {
  id: string
  mediaId: number
  mediaType: 'movie' | 'tv'
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
