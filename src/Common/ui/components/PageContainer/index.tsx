import { ReactNode } from 'react'
import { Container } from './StyledComponents'

interface Props {
  children: ReactNode
}

export const PageContainer = ({ children }: Props) => {
  return <Container>{children}</Container>
}