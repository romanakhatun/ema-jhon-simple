import React from 'react';
import { Link } from "react-router-dom";

const ReviewItems = (props) => {
    const { img, name, seller, price, key, quantity } = props.product;
    return (
        <div className="product">
            <div className="imgWrap">
                <img src={img} alt="" />
            </div>
            <div className="productInformation">
                <h4><Link to={"/product/" + key}>{name}</Link></h4>
                <p className="price">${price}</p>
                <small>by:{seller}</small>
                <p>Quantity:{quantity}</p>
                <button className="btn" onClick={() => props.removeProduct(key)}>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItems;