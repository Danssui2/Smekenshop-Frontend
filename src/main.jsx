import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router";
import "./style/index.css";
import { ToastContainer } from "react-toastify";

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
import { AdminDashboard, ReviewAccount, ReviewProduct, Accounts } from "./pages/Admin.jsx";
import EditAccount from "./pages/EditAccount.jsx";
import ProductEdit from "./pages/ProductEdit.jsx";

const AdminRoutes = () => {
  const superuser = localStorage.getItem("XYZABC_SUPER")
  return (superuser == "SMEKENSA65" ? <Outlet/> : <Navigate to="/404"/>);
};
const LoginUserRoutes = () => {
  const logged = localStorage.getItem("userToken")
  return (logged ? <Outlet/> : <Navigate to="/login"/>);
};

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:seller/:id" element={<Products />} />
      <Route path="/seller/:id" element={<Seller />} />
      <Route path="/search/:query/:cat?" element={<Search />} />
      <Route path="/login/" element={<Login />} />
      <Route path="/register/" element={<Register />} />
      <Route path="/cart/" element={<Cart />} />
      <Route element={<LoginUserRoutes/>}>
        <Route path="/account/" element={<Account />} />
        <Route path="/account/edit" element={<EditAccount />} />
        <Route path="/logout/" element={<LogOut />} />
        <Route path="/post" element={<Post />} />
        <Route path="/product/edit/:seller/:id" element={<Products />} />
        <Route path="/product/edit/form/:seller/:id/:status" element={<ProductEdit />} />
      </Route>
      <Route element={<AdminRoutes/>}>
        <Route path="/admin/" element={<AdminDashboard />} />
        <Route path="/admin/review/:seller/:id" element={<ReviewProduct />} />
        <Route path="/admin/review-account" element={<ReviewAccount />} />
        <Route path="/admin/account/:id" element={<Accounts />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <ToastContainer />
  </BrowserRouter>
);