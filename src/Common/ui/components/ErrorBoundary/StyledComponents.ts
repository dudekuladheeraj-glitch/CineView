import styled from 'styled-components'

export const FallbackWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 160px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.errorBorder};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.errorSurface};
  text-align: center;
`

export const FallbackTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.danger};
`

export const FallbackMessage = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.9rem;
`

export const RetryButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  background: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.onMedia};
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.dangerHover};
  }
`