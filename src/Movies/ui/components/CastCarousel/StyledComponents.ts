import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 1.35rem;
  color: ${({ theme }) => theme.colors.text};
`

export const ScrollTrack = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 8px;
`

export const CastCard = styled.div`
  width: 120px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const CastName = styled.h3`
  margin: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`

export const CastCharacter = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
`