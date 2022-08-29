import { Container, Form } from './style'
import logo from '../../assets/logo.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
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
            <Input placeholder="exemplo@exemplo.com" type="text" />
            <p>Senha</p>
            <Input placeholder="No mínimo 6 caracteres" type="password" />

            <Button title="Criar Conta" />

            <a href="#">Criar uma conta</a>
          </Form>
        </div>
      </main>
    </Container>
  )
}
