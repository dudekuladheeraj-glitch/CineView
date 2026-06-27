import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.mediaBackdrop},
    ${({ theme }) => theme.colors.primaryHover}
  );
`

export const CardContainer = styled.div`
  width: min(460px, 100%);
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Brand = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`

export const Title = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`

export const Description = styled.p`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`