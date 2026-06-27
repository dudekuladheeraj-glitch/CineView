import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

import { LoginForm } from '../components/LoginForm'
import { useLoginController } from '../controllers/useLoginController'
import {
  Brand,
  CardContainer,
  Description,
  PageContainer,
  Title,
} from './StyledComponents'

const LoginPageComponent = () => {
  const { t } = useTranslation('auth')
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state as { from?: { pathname: string } } | null
  const from = state?.from?.pathname ?? '/'
  const {
    username,
    password,
    usernameError,
    passwordError,
    authError,
    setUsername,
    setPassword,
    submitLogin,
  } = useLoginController()

  const handleSubmit = () => {
    const success = submitLogin()

    if (success) {
      navigate(from, { replace: true })
    }
  }

  return (
    <PageContainer>
      <CardContainer>
        <Brand>{t('brand')}</Brand>
        <Title>{t('welcomeBack')}</Title>
        <Description>{t('description')}</Description>

        <LoginForm
          username={username}
          password={password}
          usernameError={usernameError}
          passwordError={passwordError}
          authError={authError}
          onUsernameChange={setUsername}
          onPasswordChange={setPassword}
          onSubmit={handleSubmit}
        />
      </CardContainer>
    </PageContainer>
  )
}

export const LoginPage = observer(LoginPageComponent)