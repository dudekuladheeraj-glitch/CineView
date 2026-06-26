import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const LogoLink = styled(Link) `
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
  user-select: none;
`;
export const LogoIcon = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #111827;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  flex-shrink: 0;
`;
export const LogoText = styled.span `
  font-size: 1.2rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.3px;
`;
