import axios from '../lib/axios'

export async function login(data) {
  await axios.get('/sanctum/csrf-cookie')
  await axios.post('/login', data)
}

export async function register(data) {
  await axios.get('/sanctum/csrf-cookie')
  await axios.post('/register', data)
}


export const logout = async () => {
  return axios.post('/logout')
}
