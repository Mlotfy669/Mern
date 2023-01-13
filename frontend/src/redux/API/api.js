import axios from 'axios'

export const url = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/'

export const api = axios.create({
  baseURL: url
})

api.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('userInfo'))
  if (token && token?.accessToken) {
    config.headers = { Authorization: `Bearer ${token.accessToken}` }
  }
  return config
},
  (error) => {
    return Promise.reject(error)
  }
)