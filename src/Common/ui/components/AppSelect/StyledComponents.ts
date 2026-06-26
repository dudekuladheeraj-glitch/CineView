import styled from 'styled-components'

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const SelectLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #111827;
`

export const SelectField = styled.select`
  min-height: 44px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  font-size: 0.95rem;
  outline: none;
  background: #ffffff;
  color: #111827;

  &:focus {
    border-color: #111827;
  }
`