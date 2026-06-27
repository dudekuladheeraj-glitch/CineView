import styled from 'styled-components'

export const CardLink = styled.div`
  display: block;
  width: 160px;
  flex: 0 0 auto;
  cursor: pointer;
  text-align: left;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

export const Rating = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.rating};
`

export const WatchlistButton = styled.button<{ $active?: boolean }>`
  border: 1px solid ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.border};
  border-radius: 999px;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.surface};
  color: ${({ theme, $active }) => $active ? '#fff' : theme.colors.textMuted};
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.15s, border-color 0.15s, color 0.15s;

  &:hover {
    background: ${({ theme, $active }) => $active ? theme.colors.primaryHover : theme.colors.surfaceMuted};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme, $active }) => $active ? '#fff' : theme.colors.text};
  }
`