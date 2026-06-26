import { ROUTES } from '../../../../core/constants/Routes.constants'
import { LogoLink, LogoIcon, LogoText } from './StyledComponents'

export const AppLogo = () => (
  <LogoLink to={ROUTES.home}>
    <LogoIcon>C</LogoIcon>
    <LogoText>CineView</LogoText>
  </LogoLink>
)
