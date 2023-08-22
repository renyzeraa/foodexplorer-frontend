import { useState } from 'react'
import { Container, Form } from './style'
import logo from '../../assets/logo.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

/**
 * Componente SignIn para a página de login.
 *
 * Este componente representa a página de login, onde os usuários podem entrar em suas contas.
 *
 * @returns {JSX.Element} Um componente de página de login.
 */
export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

  /**
   * Função para realizar o login do usuário.
   *
   * Esta função chama a função `signIn` com as informações de email e senha do usuário
   * para efetuar o login.
   */
  function handleSignIn() {
    signIn({ email, password })
  }

  /**
   * Função para realizar o login do usuário quando a tecla Enter é pressionada.
   *
   * Esta função é executada quando a tecla Enter é pressionada no campo de senha. Ela verifica se a tecla pressionada
   * é 'Enter' e, se for, chama a função `signIn` com as informações de email e senha do usuário para efetuar o login.
   *
   * @param {object} event - O evento de teclado que acionou a função.
   */
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
