import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { useAuth } from '../hooks/auth'

/**
 * Componente de Rotas da Aplicação.
 *
 * Este componente é responsável por gerenciar as rotas da aplicação com base
 * no estado de autenticação do usuário. Se o usuário estiver autenticado, as
 * rotas de aplicação (AppRoutes) serão exibidas. Caso contrário, as rotas de
 * autenticação (AuthRoutes) serão renderizadas.
 *
 * @returns {JSX.Element} Um componente de rotas com base no estado de autenticação.
 */
export function Routes() {
    const { user } = useAuth()

    return (
        <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
    )
}