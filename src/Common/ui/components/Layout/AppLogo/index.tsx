import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../../../core/constants/Routes.constants'
import { LogoLink, LogoIcon, LogoText } from './StyledComponents'

export const AppLogo = () => {
  const { t } = useTranslation('common')

  return (
    <LogoLink to={ROUTES.home}>
      <LogoIcon>C</LogoIcon>
      <LogoText>{t('appName')}</LogoText>
    </LogoLink>
  )
}