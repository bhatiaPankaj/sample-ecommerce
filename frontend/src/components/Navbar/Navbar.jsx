
import React, { useContext ,useState} from 'react'
import {Link} from 'react-router-dom'
import  './Navbar.css'
import myContext from '../../context/data/myContext';

import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import ShopContext from '../../context/data/ShopContext';
 const Navbar = () => {
  // const context = useContext(myContext);
  // const { mode, toggleMode } = context;
  // console.log(mode);
  // console.log(toggleMode);

  const {getTotalItems} = useContext(ShopContext);

  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Waddup shopper</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men">Men</Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women">Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="login">
          <button>Login</button>
        </Link>
        <Link to="cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalItems()}</div>
      </div>
    </div>
  );
}

export default Navbar