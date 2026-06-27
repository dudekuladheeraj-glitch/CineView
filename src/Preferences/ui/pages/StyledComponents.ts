import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 24px 48px;
`

export const PageTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.surface};
`

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
`

export const AccountText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
`