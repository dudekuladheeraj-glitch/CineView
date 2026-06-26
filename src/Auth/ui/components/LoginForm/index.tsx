import { FormEvent, useState } from 'react'

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
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <Container onSubmit={handleSubmit}>
      <AppInput
        label="Username"
        value={username}
        onChange={onUsernameChange}
        error={usernameError}
        placeholder="Enter username"
        autoComplete="username"
      />

      <PasswordWrapper>
        <PasswordLabel htmlFor="password">Password</PasswordLabel>
        <PasswordInputRow>
          <PasswordInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            $hasError={Boolean(passwordError)}
            placeholder="Enter password"
            autoComplete="current-password"
          />
          <ToggleButton
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '🙈' : '👁'}
          </ToggleButton>
        </PasswordInputRow>
        {passwordError && <PasswordError>{passwordError}</PasswordError>}
      </PasswordWrapper>

      <AppButton type="submit" fullWidth>
        Login
      </AppButton>

      {authError && <ErrorText>{authError}</ErrorText>}

      <CredentialsHint>
        Demo Credentials
        <br />
        Username: <strong>cineview</strong>
        <br />
        Password: <strong>CineView@123</strong>
      </CredentialsHint>
    </Container>
  )
}
