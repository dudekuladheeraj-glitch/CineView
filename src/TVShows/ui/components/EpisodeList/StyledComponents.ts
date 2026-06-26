import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`

export const EpisodeCard = styled.article`
  display: grid;
  grid-template-columns: 28px 120px 1fr;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    grid-template-columns: 28px 1fr;
  }
`

export const EpisodeTitle = styled.h3`
  margin: 0 0 6px;
  font-size: 1rem;
`

export const EpisodeMeta = styled.p`
  margin: 0 0 8px;
  font-size: 0.85rem;
  color: #6b7280;
`

export const EpisodeOverview = styled.p`
  margin: 0;
  line-height: 1.5;
  color: #374151;
`

export const Checkbox = styled.input`
  margin-top: 4px;
  cursor: not-allowed;
`