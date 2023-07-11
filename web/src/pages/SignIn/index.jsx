import { useState } from 'react'
import { Container, Form } from './style'
import logo from '../../assets/logo.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  function handleEnterInput(event) {
    if (event.key === 'Enter') {
      signIn({ email, password })
    }
  }

  return (
    <Container>
      <main>
        <div className="content-logo">
          <img src={logo} alt="logo foodexplorer" />
        </div>
        <div className="content-login">
          <Form>
            <h1>Faça login</h1>

            <p htmlFor="">Email</p>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com"
              type="text"
              onChange={e => setEmail(e.target.value)}
            />
            <p>Senha</p>
            <Input
              placeholder="No mínimo 6 caracteres"
              type="password"
              onChange={e => setPassword(e.target.value)}
              onKeyDown={handleEnterInput}
            />

            <Button title="Entrar" onClick={handleSignIn} />

            <Link to="/signup">Criar uma conta</Link>
          </Form>
        </div>
      </main>
    </Container>
  )
}
