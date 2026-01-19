import React from 'react'
import { useState, useEffect } from 'react'
import { login, register } from '../services/auth'


export default function Login() {
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
    return (
        <>
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