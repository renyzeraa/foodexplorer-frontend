import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://foodexplorerback-end-production.up.railway.app/'
})
