import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 28px;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
`

export const ResultCard = styled.button`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: none;
  padding: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
`

export const ResultTitle = styled.h3`
  margin: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`

export const ResultMeta = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const PersonCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`