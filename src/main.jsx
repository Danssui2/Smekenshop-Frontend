import Home from './pages/Home.jsx'
import Post from './pages/Post.jsx'
import Products from './pages/Products.jsx'
import Seller from './pages/Seller.jsx'

import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import './style/index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/post" element={<Post/>} />
      <Route path="/product/:id" element={<Products/>} />
      <Route path="/seller/:id" element={<Seller/>} />
    </Routes>
  </BrowserRouter>
)