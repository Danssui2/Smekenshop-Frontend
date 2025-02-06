import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router"
import './style/index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  </BrowserRouter>
)