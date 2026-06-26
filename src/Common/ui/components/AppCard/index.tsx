import { ReactNode } from 'react'
import { CardBody, CardSubtitle, CardTitle, CardWrapper, Header } from './StyledComponents'

interface Props {
  title?: string
  subtitle?: string
  children: ReactNode
}

export const AppCard = ({ title, subtitle, children }: Props) => {
  return (
    <CardWrapper>
      {title || subtitle ? (
        <Header>
          {title ? <CardTitle>{title}</CardTitle> : null}
          {subtitle ? <CardSubtitle>{subtitle}</CardSubtitle> : null}
        </Header>
      ) : null}
      <CardBody>{children}</CardBody>
    </CardWrapper>
  )
}