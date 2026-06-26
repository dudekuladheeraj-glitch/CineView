import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InputLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #111827;
`

export const InputField = styled.input<{ $hasError: boolean }>`
  min-height: 44px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${({ $hasError }) => ($hasError ? '#dc2626' : '#d1d5db')};
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s ease;
  background: #ffffff;
  color: #111827;

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? '#dc2626' : '#111827')};
  }

  &::placeholder {
    color: #9ca3af;
  }
`

export const ErrorText = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #dc2626;
`