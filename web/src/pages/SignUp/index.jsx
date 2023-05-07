import { Container, Form } from './style'
import logo from '../../assets/logo.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function SignUp() {
    return (
        <Container>
            <main>
                <div className="content-logo">
                    <img src={logo} alt="logo foodexplorer" />
                </div>
                <div className="content-login">
                    <Form>
                        <h1>Crie sua conta</h1>
                        <p htmlFor="">Seu nome</p>
                        <Input
                            placeholder="Exemplo: João de Souza"
                            type="text"
                        />
                        <p htmlFor="">Email</p>
                        <Input
                            placeholder="Exemplo: exemplo@exemplo.com"
                            type="text"
                        />
                        <p>Senha</p>
                        <Input
                            placeholder="No mínimo 6 caracteres"
                            type="password"
                        />

                        <Button title="Criar Conta" />

                        <Link to="/">Já tenho uma conta</Link>
                    </Form>
                </div>
            </main>
        </Container>
    )
}
