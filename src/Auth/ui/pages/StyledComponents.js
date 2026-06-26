import styled from 'styled-components';
export const PageContainer = styled.div `
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px;

  background: linear-gradient(
    135deg,
    #111827,
    #1f2937
  );
`;
export const CardContainer = styled.div `
  width: min(460px, 100%);
  background: white;

  border-radius: 20px;

  padding: 40px;

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Brand = styled.h1 `
  margin: 0;

  font-size: 2rem;
  font-weight: 700;

  color: #111827;

  text-align: center;
`;
export const Title = styled.h2 `
  margin: 0;

  text-align: center;

  font-size: 1.5rem;

  color: #111827;
`;
export const Description = styled.p `
  margin: 0;

  text-align: center;

  color: #6b7280;

  line-height: 1.6;
`;
