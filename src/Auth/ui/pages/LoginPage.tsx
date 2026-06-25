import { useNavigate, useLocation } from 'react-router-dom'
import { PagePlaceholder } from '../../../Common/ui/components/PagePlaceholder'
import { LoginForm } from '../components/LoginForm'
import { useLoginController } from '../controllers/useLoginController'
import { Wrapper } from './StyledComponents'

export const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { error, login } = useLoginController()

  const from = (location.state as { from?: string } | null)?.from ?? '/'

  const handleLogin = (username: string, password: string) => {
    const success = login(username, password)
    if (success) {
      navigate(from, { replace: true })
    }
    return success
  }

  return (
    <Wrapper>
      <PagePlaceholder title="Login Page" description="Milestone 1 auth scaffold is ready." />
      <LoginForm onSubmit={handleLogin} error={error} />
    </Wrapper>
  )
}
