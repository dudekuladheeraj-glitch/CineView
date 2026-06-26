import styled from 'styled-components'

export const FilterSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
`

export const FilterTitle = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  color: #111827;
`

export const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const Chip = styled.button<{ $active: boolean }>`
  border: 1px solid ${({ $active }) => ($active ? '#2563eb' : '#d1d5db')};
  border-radius: 999px;
  padding: 8px 14px;
  background: ${({ $active }) => ($active ? '#dbeafe' : '#ffffff')};
  color: ${({ $active }) => ($active ? '#1d4ed8' : '#374151')};
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    border-color: #2563eb;
  }
`
