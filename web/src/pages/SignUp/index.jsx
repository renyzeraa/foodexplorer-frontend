import { Container, Form } from './style'
import logo from '../../assets/logo.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { api } from '../../services/api'

export function SignUp() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    function handleSignUp() {
        if (!name || !email || !password) {
            return alert('Por favor, preenche todos os campos !')
        }

        if (!emailRegex.test(email)) {
            return alert('Preencha um email válido!')
        }

        api.post('/users', { name, email, password })
            .then(() => {
                alert('Usuário cadastrado com sucesso')
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert('Não foi possível cadastrar este usuário')
                }
            })
        console.log(name, email, password)
    }

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
                            onChange={e => setName(e.target.value)}
                        />
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
                        />

                        <Button title="Criar Conta" onClick={handleSignUp} />

                        <Link to="/">Já tenho uma conta</Link>
                    </Form>
                </div>
            </main>
        </Container>
    )
}
