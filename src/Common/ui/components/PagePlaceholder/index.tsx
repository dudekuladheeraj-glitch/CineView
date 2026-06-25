import { Wrapper, Title, Description } from './StyledComponents'

interface Props {
  title: string
  description?: string
}

export const PagePlaceholder = ({ title, description }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {description ? <Description>{description}</Description> : null}
    </Wrapper>
  )
}
