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
  color: ${({ theme }) => theme.colors.text};
`

export const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const Chip = styled.button<{ $active: boolean }>`
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.border)};
  border-radius: 999px;
  padding: 8px 14px;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.accentSurface : theme.colors.surface};
  color: ${({ theme, $active }) => ($active ? theme.colors.accentText : theme.colors.text)};
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`