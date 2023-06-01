import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'
export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})
    async function signIn({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password })
            const { user, token } = response.data

            localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
            localStorage.setItem('@foodexplorer:token', token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({ user, token })
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possível realizar o login no sistema.')
            }
        }
    }

    function signOut() {
        localStorage.removeItem('@foodexplorer:user')
        localStorage.removeItem('@foodexplorer:token')

        setData({})
    }

    useEffect(() => {
        const user = localStorage.getItem('@foodexplorer:user')
        const token = localStorage.getItem('@foodexplorer:token')
        if (user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({ token, user: JSON.parse(user) })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth }
