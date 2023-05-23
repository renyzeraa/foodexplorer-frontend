import axios from 'axios'

export const api = axios.create({
    baseUrl: 'http://localhost:3333'
})
api.get('/users/:id')
