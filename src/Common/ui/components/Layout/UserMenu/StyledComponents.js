import styled from 'styled-components';
export const UserMenuWrapper = styled.div `
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const Avatar = styled.div `
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #111827;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  flex-shrink: 0;
  user-select: none;
`;
export const Username = styled.span `
  font-size: 0.9rem;
  font-weight: 500;
  color: #374151;

  @media (max-width: 640px) {
    display: none;
  }
`;
export const LogoutButton = styled.button `
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: transparent;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;

  &:hover {
    background: #f3f4f6;
    border-color: #d1d5db;
    color: #111827;
  }

  &:active {
    background: #e5e7eb;
  }
`;
