import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import { BrowserRouter, Routes, Route } from "react-router"
import './style/index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product/:id" element={<Products/>} />
    </Routes>
  </BrowserRouter>
)