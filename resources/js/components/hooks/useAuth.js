import { useEffect, useState } from 'react'
import axios from '../lib/axios'

export default function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchUser = async () => {
    try {
      const res = await axios.get('/user')
      setUser(res.data)
    } catch {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const logout = async () => {
    await axios.post('/logout')
    setUser(null)
  }

  return {
    user,
    loading,
    setUser,
    logout,
  }
}
