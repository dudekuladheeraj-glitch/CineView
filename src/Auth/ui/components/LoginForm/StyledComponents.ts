import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: min(380px, 100%);
`

export const ErrorText = styled.p`
  margin: 0;
  color: #dc2626;
  font-size: 0.9rem;
`

export const CredentialsHint = styled.div`
  padding: 14px;
  border-radius: 12px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;

  color: #4b5563;
  font-size: 0.88rem;
  line-height: 1.6;
`

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const PasswordLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #111827;
`

export const PasswordInputRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const PasswordInput = styled.input<{ $hasError: boolean }>`
  min-height: 44px;
  width: 100%;
  padding: 10px 44px 10px 12px;
  border-radius: 10px;
  border: 1px solid ${({ $hasError }) => ($hasError ? '#dc2626' : '#d1d5db')};
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s ease;
  background: #ffffff;
  color: #111827;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? '#dc2626' : '#111827')};
  }

  &::placeholder {
    color: #9ca3af;
  }
`

export const ToggleButton = styled.button`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #6b7280;
  transition: color 0.15s ease;

  &:hover {
    color: #111827;
  }
`

export const PasswordError = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #dc2626;
`
