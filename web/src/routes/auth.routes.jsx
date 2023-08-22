import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

/**
 * Componente AuthRoutes para roteamento de autenticação.
 *
 * Este componente define as rotas para páginas de autenticação, como SignIn (login) e SignUp (cadastro).
 *
 * @returns {JSX.Element} Um componente de rotas de autenticação.
 */
export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}
