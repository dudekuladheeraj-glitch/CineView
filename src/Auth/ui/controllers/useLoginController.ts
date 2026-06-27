import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuthStore } from '../../data/stores/providers'

export const useLoginController = () => {
  const { t } = useTranslation('auth')
  const authStore = useAuthStore()

  const [username, setUsername] = useState('cineview')
  const [password, setPassword] = useState('CineView@123')

  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [authError, setAuthError] = useState('')

  const submitLogin = () => {
    let isValid = true

    setUsernameError('')
    setPasswordError('')
    setAuthError('')

    if (!username.trim()) {
      setUsernameError(t('errors.usernameRequired'))
      isValid = false
    }

    if (!password.trim()) {
      setPasswordError(t('errors.passwordRequired'))
      isValid = false
    }

    if (!isValid) {
      return false
    }

    const success = authStore.login(username, password)

    if (!success) {
      setAuthError(t('errors.invalidCredentials'))
    }

    return success
  }

  return {
    username,
    password,
    usernameError,
    passwordError,
    authError,
    setUsername,
    setPassword,
    submitLogin,
  }
}