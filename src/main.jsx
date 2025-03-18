import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router";
import "./style/index.css";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";

import Home from "./pages/Home.jsx";
import Post from "./pages/Post.jsx";
import Products from "./pages/Products.jsx";
import Seller from "./pages/Seller.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Search from "./pages/Search.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Account from "./pages/Account.jsx";
import LogOut from "./pages/LogOut.jsx";
import Cart from "./pages/Cart.jsx";
import { AdminDashboard, ReviewProduct } from "./pages/Admin.jsx";

const AdminRoutes = () => {
  const superuser = localStorage.getItem("XYZABC_SUPER")
  return (superuser == "SMEKENSA65" ? <Outlet/> : <Navigate to="/404"/>);
};

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route path="/product/:seller/:id" element={<Products />} />
      <Route path="/seller/:id" element={<Seller />} />
      <Route path="/search/:query" element={<Search />} />
      <Route path="/login/" element={<Login />} />
      <Route path="/register/" element={<Register />} />
      <Route path="/account/" element={<Account />} />
      <Route path="/logout/" element={<LogOut />} />
      <Route path="/cart/" element={<Cart />} />
      <Route element={<AdminRoutes/>}>
        <Route path="/administration/" element={<AdminDashboard />} />
        <Route path="/administration/review/:seller/:id" element={<ReviewProduct />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <ToastContainer />
  </BrowserRouter>
);