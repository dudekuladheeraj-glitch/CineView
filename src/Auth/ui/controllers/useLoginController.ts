import { useState } from 'react'
import { useAuthStore } from '../../data/stores/providers'

export const useLoginController = () => {
  const authStore = useAuthStore()
  const [error, setError] = useState('')

  const login = (username: string, password: string) => {
    const success = authStore.login(username, password)
    setError(success ? '' : 'Invalid username or password')
    return success
  }

  return {
    error,
    login,
  }
}
