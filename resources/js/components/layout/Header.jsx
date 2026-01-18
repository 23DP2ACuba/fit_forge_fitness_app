import React from 'react'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Navigation from './Navigation' 
import axios from '../lib/axios'
import { login, register } from '../services/auth'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeAuthModal, setActiveAuthModal] = useState(null) 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState(null)
  
  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      await login({ email, password })
      closeAll()
    } catch (err) {
      setError('Invalid credentials')
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
      });
      closeAll()
    } catch (err) {
      setError('Registration failed');
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (!isMobileMenuOpen) setActiveAuthModal(null)
  }

  const openAuthModal = (type) => {
    setActiveAuthModal(type)
    setIsMobileMenuOpen(false) 
  }

  const closeAll = () => {
    setIsMobileMenuOpen(false)
    setActiveAuthModal(null)
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo-container">
            <div className="logo">FF</div>
            <div className="app-name">
              fit
              <br />
              forge
            </div>
          </div>

          <nav className="desktop-nav">
            <Navigation onLinkClick={closeAll} />
          </nav>

          <div className="right-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search workouts or meals..."
                className="search-input"
              />
            </div>
            <br/>
            <div className="auth-links">
              <button
                className="auth-button login"
                onClick={() => openAuthModal('login')}
              >
                Log In
              </button>
              <button
                className="auth-button login"
                onClick={() => openAuthModal('register')}
              >
                Register
              </button>
            </div>

            <button
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={28} strokeWidth={2.5} />
              ) : (
                <Menu size={28} strokeWidth={2.5} />
              )}
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
              onClick={() => openAuthModal('login')}
            >
              Log In
            </button>
            <button
              className="mobile-auth-btn register"
              onClick={() => openAuthModal('register')}
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