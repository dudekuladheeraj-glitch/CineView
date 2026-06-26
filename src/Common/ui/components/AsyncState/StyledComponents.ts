import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const StateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 120px;
  padding: 24px;
  text-align: center;
  color: #6b7280;
`

export const LoadingSpinner = styled.div`
  width: 28px;
  height: 28px;
  border: 3px solid #e5e7eb;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`

export const StateText = styled.p`
  margin: 0;
  font-size: 0.95rem;
`

export const RetryButton = styled.button`
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 8px 14px;
  background: #ffffff;
  color: #111827;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: #f9fafb;
  }
`
