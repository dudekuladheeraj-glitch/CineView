import styled from 'styled-components';
export const CardWrapper = styled.section `
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
`;
export const Header = styled.div `
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
`;
export const CardTitle = styled.h2 `
  margin: 0;
  font-size: 1.15rem;
  color: #111827;
`;
export const CardSubtitle = styled.p `
  margin: 0;
  color: #6b7280;
  line-height: 1.5;
`;
export const CardBody = styled.div `
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
