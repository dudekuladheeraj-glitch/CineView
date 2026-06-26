import styled from 'styled-components'

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const SearchIcon = styled.span`
  position: absolute;
  left: 12px;
  color: #9ca3af;
  display: flex;
  align-items: center;
  pointer-events: none;
  font-size: 0.95rem;
`

export const SearchInput = styled.input`
  width: 260px;
  height: 38px;
  padding: 0 12px 0 36px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  font-size: 0.9rem;
  color: #111827;
  outline: none;
  transition: border-color 0.2s ease, background 0.2s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #111827;
    background: #ffffff;
  }

  @media (max-width: 768px) {
    width: 180px;
  }
`
