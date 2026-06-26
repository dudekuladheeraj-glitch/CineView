import styled from 'styled-components'

export const Select = styled.select`
  height: 34px;
  padding: 0 28px 0 10px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: transparent;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  outline: none;
  transition: border-color 0.15s ease;

  &:focus {
    border-color: #111827;
  }

  @media (max-width: 640px) {
    display: none;
  }
`
