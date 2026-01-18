import React from 'react'
import '../css/app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

const container = document.getElementById('app')

createRoot(container).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)