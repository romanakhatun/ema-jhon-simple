import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const Shop = () => {
  const firstValue = fakeData.slice(0, 15);
  const [product, setProduct] = useState(firstValue);
  const [cart, setCart] = ([]);

  const handleAddProduct = (product) => {
    console.log("product add", product)

  };

  return (
    <div className="shop_container">
        <div className="product_container">
            {product.map((pd) => (
              <Product product={pd} handleAddProduct={handleAddProduct}></Product>
            ))}
        </div>

        <div className="cart_container">
          <h2>This is cart</h2>
          <p>Items ordered:{cart.length}</p>
        </div>
    </div>
  );
};

export default Shop;
