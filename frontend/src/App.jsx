import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Order from './pages/Order';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import NoPage from './pages/NoPage';
import ShopState from "./context/data/ShopState";
import AnotherContext from './context/data/anotherContext';
import Shop from './pages/Shop';
import ShopCategory from "./pages/ShopCategory";
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import men_Banner from './assets/banner_mens.png'
import men_banner from "./assets/banner_mens.png";
import banner_women from "./assets/banner_women.png";
import banner_kids from "./assets/banner_kids.png";



function App() {
  return (
    // <AnotherContext.Provider value={{"username":"Pankaj"}}>
    <ShopState>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory category="men" banner={men_Banner} />}
          />
          <Route
            path="/women"
            element={<ShopCategory category="women" banner={banner_women} />}
          />
          <Route
            path="/kids"
            element={<ShopCategory category="kid" banner={banner_kids} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/*" element={<NoPage />} />
          hro
        </Routes>
        <Footer />
      </Router>
    </ShopState>
    // </AnotherContext.Provider>
  );
}
export default App;