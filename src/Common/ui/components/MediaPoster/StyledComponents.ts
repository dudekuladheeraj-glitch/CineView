import styled from 'styled-components'

export const PosterWrapper = styled.div<{ $width?: string; $aspectRatio?: string }>`
  width: ${({ $width }) => $width ?? '100%'};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio ?? '2 / 3'};
  border-radius: 12px;
  overflow: hidden;
  background: #e5e7eb;
  flex-shrink: 0;
`

export const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const PlaceholderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 0.8rem;
  text-align: center;
  padding: 8px;
`
