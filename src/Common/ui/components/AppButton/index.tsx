import { ButtonHTMLAttributes, ReactNode } from 'react'
import { StyledButton } from './StyledComponents'

export type AppButtonVariant = 'primary' | 'secondary' | 'ghost'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: AppButtonVariant
  fullWidth?: boolean
}

export const AppButton = ({
  children,
  variant = 'primary',
  fullWidth = false,
  ...restProps
}: Props) => {
  return (
    <StyledButton $variant={variant} $fullWidth={fullWidth} {...restProps}>
      {children}
    </StyledButton>
  )
}