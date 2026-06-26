import { observer } from 'mobx-react-lite'
import { useLocation ,useNavigate } from 'react-router-dom'

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
        <Brand>CineView</Brand>

        <Title>Welcome Back</Title>

        <Description>
        Track movies, discover TV shows,
        build watchlists and explore
        everything you love about movies and TV shows.
        </Description>

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