import styled from 'styled-components'

export const FallbackWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 160px;
  padding: 24px;
  border: 1px solid #fecaca;
  border-radius: 12px;
  background: #fef2f2;
  text-align: center;
`

export const FallbackTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #991b1b;
`

export const FallbackMessage = styled.p`
  margin: 0;
  color: #b91c1c;
  font-size: 0.9rem;
`

export const RetryButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  background: #dc2626;
  color: #ffffff;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: #b91c1c;
  }
`
