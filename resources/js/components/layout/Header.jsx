import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Navigation from './Navigation'
import axios from '../lib/axios'
import { login, register } from '../services/auth'
import useAuth from '../hooks/useAuth'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeAuthModal, setActiveAuthModal] = useState(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState(null)

  const { user, loading, setUser, logout } = useAuth()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setPasswordConfirmation('')
    setName('')
    setError(null)
  }

  const closeAll = () => {
    setIsMobileMenuOpen(false)
    setActiveAuthModal(null)
    resetForm()
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login({ email, password })
      const res = await axios.get('/user')
      setUser(res.data)
      closeAll()
    } catch {
      console.error(err.response?.data)
      setError(err.response?.data?.message || 'LogIn failed')
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await register({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      })
      const res = await axios.get('/user')
      setUser(res.data)
      closeAll()
    } catch {
      console.error(err.response?.data)
      setError(err.response?.data?.message || 'Registration failed')
    }
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo-container">
              <a className="logo" href="">FF</a>
              <div className="app-name">fit<br />forge</div>
          </div>

          <nav className="desktop-nav">
            <Navigation onLinkClick={closeAll} />
          </nav>

          <div className="right-section">
            <div className="search-container">
              <div className="search-wrapper">
                <input
                  type="text"
                  placeholder="Search workouts or meals..."
                  className="search-input"
                />
              </div>
            </div>
            <br/>
            
            <div className="auth-links">
              {loading ? null : user ? (
                <div className="user-auth-stack">
                  <span className="auth-button login">
                    {user.name}
                  </span>

                  <button className="auth-button login" onClick={logout}>
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <button
                    className="auth-button login"
                    onClick={() => setActiveAuthModal('login')}
                  >
                    Log In
                  </button>
                  <button
                    className="auth-button login"
                    onClick={() => setActiveAuthModal('register')}
                  >
                    Register
                  </button>
                </>
              )}
            </div>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <button className="close-btn" onClick={closeAll}>
            <X size={32} />
          </button>

          <Navigation onLinkClick={closeAll} mobile />

          <div className="mobile-auth">
            <button
              className="mobile-auth-btn login"
              onClick={() => setActiveAuthModal('login')}
            >
              Log In
            </button>
            <button
              className="mobile-auth-btn register"
              onClick={() => setActiveAuthModal('register')}
            >
              Register
            </button>
          </div>
        </div>
      </div>

      {(activeAuthModal === 'login' || activeAuthModal === 'register') && (
        <div className="auth-modal-overlay" onClick={closeAll}>
          <div
            className="auth-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeAll}>
              <X size={32} />
            </button>

            <h2 className="auth-title">
              {activeAuthModal === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>

            <form 
              className="auth-form" 
              onSubmit={activeAuthModal === 'login' ? handleLogin : handleRegister}
            >
              <input
                type="email"
                placeholder="Email"
                className="auth-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="auth-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />


              {activeAuthModal === 'register' && (
                <>
                  <input
                    type="text"
                    placeholder="Username"
                    className="auth-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="auth-input"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    required
                  />
                </>
              )}


              <button type="submit" className={`auth-submit ${activeAuthModal}`}>
                {activeAuthModal === 'login' ? 'Log In' : 'Create Account'}
              </button>
            </form>

            <p className="auth-switch">
              {activeAuthModal === 'login' ? (
                <>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    className="switch-link"
                    onClick={() => setActiveAuthModal('register')}
                  >
                    Register
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    type="button"
                    className="switch-link"
                    onClick={() => setActiveAuthModal('login')}
                  >
                    Log In
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      )}

    </>
  )
}
