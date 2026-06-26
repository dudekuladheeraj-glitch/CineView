import styled from 'styled-components'

export const BarRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  padding: 10px 14px;
  background: #ffffff;
`

export const SearchIcon = styled.span`
  font-size: 1rem;
`

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  background: transparent;
`

export const RecentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const RecentChip = styled.button`
  border: 1px solid #d1d5db;
  border-radius: 999px;
  padding: 6px 12px;
  background: #ffffff;
  color: #374151;
  font-size: 0.85rem;
  cursor: pointer;

  &:hover {
    border-color: #2563eb;
    color: #1d4ed8;
  }
`