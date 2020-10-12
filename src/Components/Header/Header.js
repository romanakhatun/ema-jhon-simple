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
        <a href="/shop">Shop</a>
        <a href="/order-review">Order Review</a>
        <a href="/inventory">Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
