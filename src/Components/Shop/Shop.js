import React, { useState, useEffect } from "react";
import "./Shop.css";
import Cart from '../Cart/Cart';
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {
  const firstValue = fakeData.slice(0, 15);
  const [ product, setProduct ] = useState(firstValue);
  const [ cart, setCart ] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const previousCart = productKeys.map(exitingKey => {
      const product = fakeData.find(pd => pd.key === exitingKey);
      product.quantity = savedCart[ exitingKey ];
      return product;
    })
    setCart(previousCart);
  }, []);

  const addProduct = (product) => {
    const newCart = [ ...cart, product ]
    setCart(newCart);

    const sameProduct = newCart.filter(pd => pd.key === product.key);
    const count = sameProduct.length;
    addToDatabaseCart(product.key, count);
  };

  return (
    <div className="shopContainer">
      <div className="productContainer">
        {product.map((pd) => (
          <Product key={pd.key} product={pd} addProduct={addProduct} showAddToCart={true}></Product>
        ))}
      </div>

      <div className="cartContainer">
        <Cart cart={cart}>
          <div className="textCenter">
            <button className="btn"><a href="/order-review">Review your order</a></button>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
