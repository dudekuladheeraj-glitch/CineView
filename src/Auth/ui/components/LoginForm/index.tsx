import { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { AppButton, AppInput } from '../../../../Common'
import {
  Container,
  CredentialsHint,
  ErrorText,
  PasswordError,
  PasswordInput,
  PasswordInputRow,
  PasswordLabel,
  PasswordWrapper,
  ToggleButton,
} from './StyledComponents'

interface Props {
  username: string
  password: string
  usernameError: string
  passwordError: string
  authError: string
  onUsernameChange: (value: string) => void
  onPasswordChange: (value: string) => void
  onSubmit: () => void
}

export const LoginForm = ({
  username,
  password,
  usernameError,
  passwordError,
  authError,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
}: Props) => {
  const { t } = useTranslation('auth')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <Container onSubmit={handleSubmit}>
      <AppInput
        label={t('username')}
        value={username}
        onChange={onUsernameChange}
        error={usernameError}
        placeholder={t('usernamePlaceholder')}
        autoComplete="username"
      />

      <PasswordWrapper>
        <PasswordLabel htmlFor="password">{t('password')}</PasswordLabel>
        <PasswordInputRow>
          <PasswordInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            $hasError={Boolean(passwordError)}
            placeholder={t('passwordPlaceholder')}
            autoComplete="current-password"
          />
          <ToggleButton
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? t('hidePassword') : t('showPassword')}
          >
            {showPassword ? '🙈' : '👁'}
          </ToggleButton>
        </PasswordInputRow>
        {passwordError && <PasswordError>{passwordError}</PasswordError>}
      </PasswordWrapper>

      <AppButton type="submit" fullWidth>
        {t('login')}
      </AppButton>

      {authError && <ErrorText>{authError}</ErrorText>}

      <CredentialsHint>
        {t('demoCredentials')}
        <br />
        {t('demoUsername')} <strong>cineview</strong>
        <br />
        {t('demoPassword')} <strong>CineView@123</strong>
      </CredentialsHint>
    </Container>
  )
}