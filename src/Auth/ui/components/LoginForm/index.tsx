import { FormEvent, useState } from 'react'
import { Button, Container, Input, ErrorText } from './StyledComponents'

interface Props {
  onSubmit: (username: string, password: string) => boolean
  error?: string
}

export const LoginForm = ({ onSubmit, error }: Props) => {
  const [username, setUsername] = useState('cineview')
  const [password, setPassword] = useState('CineView@123')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubmit(username, password)
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <Button type="submit">Login</Button>
      {error ? <ErrorText>{error}</ErrorText> : null}
    </Container>
  )
}
