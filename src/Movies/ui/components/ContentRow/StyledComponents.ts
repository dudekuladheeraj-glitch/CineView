import styled from 'styled-components'

export const RowSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`

export const RowHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

export const RowTitle = styled.h2`
  margin: 0;
  font-size: 1.35rem;
  color: ${({ theme }) => theme.colors.text};
`

export const ScrollTrack = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 8px;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 999px;
  }
`

export const CardSlot = styled.div`
  scroll-snap-align: start;
`