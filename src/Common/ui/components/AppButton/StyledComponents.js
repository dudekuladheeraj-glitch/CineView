import styled, { css } from 'styled-components';
const variantStyles = {
    primary: css `
    background: #111827;
    color: #ffffff;
    border: 1px solid #111827;

    &:hover:not(:disabled) {
      background: #1f2937;
      border-color: #1f2937;
    }
  `,
    secondary: css `
    background: #ffffff;
    color: #111827;
    border: 1px solid #d1d5db;

    &:hover:not(:disabled) {
      background: #f9fafb;
    }
  `,
    ghost: css `
    background: transparent;
    color: #111827;
    border: 1px solid transparent;

    &:hover:not(:disabled) {
      background: #f3f4f6;
    }
  `,
};
export const StyledButton = styled.button `
  min-height: 44px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant }) => variantStyles[$variant]};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
