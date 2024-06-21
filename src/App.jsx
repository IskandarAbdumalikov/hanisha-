import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layouts";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import About from "./pages/about/About";
import AllProducts from "./pages/allProducts/AllProducts";
import Blog from "./pages/blog/Blog";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Checkout from "./pages/checkout/Checkout";
import Payment from "./pages/payment/Payment";
import Auth from "./pages/auth/Auth";
import SinglePage from "./pages/singlePage/SinglePage";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Auth />}>
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="blog" element={<Blog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="payment" element={<Payment />} />
          <Route path="/:productId" element={<SinglePage />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
