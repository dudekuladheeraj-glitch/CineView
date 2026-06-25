export interface AuthSession {
  isAuthenticated: boolean
  username: string
  loginAt: string
}

export interface LoginFormValues {
  username: string
  password: string
}
