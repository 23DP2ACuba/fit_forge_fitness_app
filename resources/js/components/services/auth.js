import axios from '../lib/axios'

export const login = async ({ email, password }) => {
  await axios.get('/sanctum/csrf-cookie')

  return axios.post('/login', {
    email,
    password,
  })
}

export const register = async ({ name, email, password, password_confirmation }) => {
  await axios.get('/sanctum/csrf-cookie')

  return axios.post('/register', {
    name,
    email,
    password,
    password_confirmation,
  })
}

export const logout = async () => {
  return axios.post('/logout')
}
