import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="ema-jhon logo" />
        </a>
      </div>

      <nav className="nav">
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/order">Order Review</a>
        </li>
        <li>
          <a href="/inventory">Inventory</a>
        </li>
      </nav>
    </div>
  );
};

export default Header;
