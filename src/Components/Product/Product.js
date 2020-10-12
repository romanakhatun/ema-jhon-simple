import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
  const { img, name, seller, stock, price, key } = props.product;

  return (
    <div className="product">

      <div className="imgWrap">
        <img src={img} alt="" />
      </div>

      <div className="productInformation">
        <h4><Link to={"/product/" + key}>{name}</Link></h4>
        <small>by:{seller}</small>
        <p>${price}</p>
        <small>only {stock} left in stock - order soon</small><br /><br />
        {
          props.showAddToCart === true && <button className="btn" onClick={() => props.addProduct(props.product)}>
            <FontAwesomeIcon icon={faShoppingCart} />add to cart
          </button>
        }
      </div> {/* productInformation */}

    </div> // product
  );
};

export default Product;
