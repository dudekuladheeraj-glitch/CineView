import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { PageContainer } from '../../../Common'
import { useCollectionStore } from '../../data/stores/providers'
import type { WatchlistEntry, WatchStatus } from '../../core/types/Collection.types'

// ---- Styled Components ----
const PageHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 24px;
`

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`

const TabBar = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`

const Tab = styled.button<{ $active: boolean }>`
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.border};
  background: ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.surface};
  color: ${({ theme, $active }) => $active ? theme.colors.primaryText : theme.colors.text};
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const SortBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`

const SortLabel = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

const SortButton = styled.button<{ $active: boolean }>`
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme, $active }) => $active ? theme.colors.accent : theme.colors.border};
  background: ${({ theme, $active }) => $active ? theme.colors.accentSurface : 'transparent'};
  color: ${({ theme, $active }) => $active ? theme.colors.accentText : theme.colors.textMuted};
  font-size: 0.8rem;
  cursor: pointer;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
`

const Card = styled.div`
  display: flex;
  gap: 14px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 14px;
  cursor: pointer;
  transition: border-color 0.15s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

const Poster = styled.img`
  width: 72px;
  height: 108px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.surfaceMuted};
`

const PosterPlaceholder = styled.div`
  width: 72px;
  height: 108px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.surfaceMuted};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`

const CardInfo = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CardMeta = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

const StatusSelect = styled.select`
  font-size: 0.8rem;
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  margin-top: auto;
`

const RemoveButton = styled.button`
  font-size: 0.75rem;
  padding: 3px 8px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.danger};
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background: ${({ theme }) => theme.colors.errorSurface};
    border-color: ${({ theme }) => theme.colors.danger};
  }
`

const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;
`

const EmptyTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`

const EmptyDesc = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
`

// ---- Types ----
type FilterTab = 'all' | WatchStatus
type SortKey = 'addedAt' | 'title'

const STATUS_OPTIONS: WatchStatus[] = ['want_to_watch', 'watching', 'completed']

// ---- Component ----
const WatchlistPageComponent = () => {
  const { t } = useTranslation(['collection', 'common'])
  const navigate = useNavigate()
  const store = useCollectionStore()
  const [filter, setFilter] = useState<FilterTab>('all')
  const [sort, setSort] = useState<SortKey>('addedAt')

  const counts = store.countByStatus
  const all = store.collection.watchlist

  const filtered = filter === 'all' ? all : all.filter((e) => e.status === filter)

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'title') return a.cachedTitle.localeCompare(b.cachedTitle)
    return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
  })

  const handleStatusChange = (entry: WatchlistEntry, status: WatchStatus) => {
    store.updateStatus(entry.id, status)
  }

  const handleRemove = (entry: WatchlistEntry, e: React.MouseEvent) => {
    e.stopPropagation()
    store.removeFromWatchlist(entry.mediaId, entry.mediaType)
  }

  const handleCardClick = (entry: WatchlistEntry) => {
    const path = entry.mediaType === 'movie' ? `/movies/${entry.mediaId}` : `/tv/${entry.mediaId}`
    navigate(path)
  }

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })

  const statusLabel = (s: WatchStatus) => t(`collection:watchlist.status.${s}`)

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t('collection:watchlist.title')}</PageTitle>
      </PageHeader>

      <TabBar>
        <Tab $active={filter === 'all'} onClick={() => setFilter('all')}>
          {t('collection:watchlist.tabs.all')} ({all.length})
        </Tab>
        {STATUS_OPTIONS.map((s) => (
          <Tab key={s} $active={filter === s} onClick={() => setFilter(s)}>
            {statusLabel(s)} ({counts[s]})
          </Tab>
        ))}
      </TabBar>

      <SortBar>
        <SortLabel>{t('collection:watchlist.sortBy')}</SortLabel>
        <SortButton $active={sort === 'addedAt'} onClick={() => setSort('addedAt')}>
          {t('collection:watchlist.sort.dateAdded')}
        </SortButton>
        <SortButton $active={sort === 'title'} onClick={() => setSort('title')}>
          {t('collection:watchlist.sort.title')}
        </SortButton>
      </SortBar>

      {sorted.length === 0 ? (
        <EmptyState>
          <EmptyTitle>{t('collection:watchlist.empty.title')}</EmptyTitle>
          <EmptyDesc>{t('collection:watchlist.empty.description')}</EmptyDesc>
        </EmptyState>
      ) : (
        <Grid>
          {sorted.map((entry) => (
            <Card key={entry.id} onClick={() => handleCardClick(entry)}>
              {entry.cachedPoster ? (
                <Poster
                  src={`https://image.tmdb.org/t/p/w154${entry.cachedPoster}`}
                  alt={entry.cachedTitle}
                />
              ) : (
                <PosterPlaceholder>🎬</PosterPlaceholder>
              )}
              <CardInfo>
                <CardTitle title={entry.cachedTitle}>{entry.cachedTitle}</CardTitle>
                <CardMeta>
                  {entry.mediaType === 'movie' ? '🎬 Movie' : '📺 TV Show'} ·{' '}
                  {t('collection:watchlist.added')} {formatDate(entry.addedAt)}
                </CardMeta>
                <StatusSelect
                  value={entry.status}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleStatusChange(entry, e.target.value as WatchStatus)}
                >
                  {STATUS_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {statusLabel(s)}
                    </option>
                  ))}
                </StatusSelect>
                <RemoveButton onClick={(e) => handleRemove(entry, e)}>
                  {t('collection:watchlist.remove')}
                </RemoveButton>
              </CardInfo>
            </Card>
          ))}
        </Grid>
      )}
    </PageContainer>
  )
}

export const WatchlistPage = observer(WatchlistPageComponent)
