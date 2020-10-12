import React from 'react';
import './Cart.css';

const cart = (props) => {
    const cart = props.cart;

    // Get cart values
    const total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0);
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[ i ];
    //     total = total + product.price * product.quantity;
    // }

    let shipping = 0;
    if (total > 1000) {
        shipping = 0;
    } else if (total > 500) {
        shipping = 4.99;
    } else if (total > 250) {
        shipping = 9.99;
    } else if (total > 0) {
        shipping = 14.99;
    }

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision)
    }

    const subTotal = total + shipping;
    const tax = (subTotal / 10);
    const grandTotal = (total + shipping + tax);

    return (
        <div className="cartPrice">
            <h2 className="textCenter">Order Summary</h2>
            <p className="textCenter">Items ordered: {cart.length}</p>


            <div className="cartPriceRow">
                <small>Items:</small>
                <small>${formatNumber(total)}</small>
            </div>

            <div className="cartPriceRow">
                <small>Shipping & Handling:</small>
                <small>${shipping}</small>
            </div>

            <div className="cartPriceRow">
                <small>Total before tax:</small>
                <small>${formatNumber(subTotal)}</small>
            </div>

            <div className="cartPriceRow">
                <small>Estimated Tax:</small>
                <small>${formatNumber(tax)}</small>
            </div>

            <div className="cartPriceRow orderTotal">
                <small>Order Total:</small>
                <small>${formatNumber(grandTotal)}</small>
            </div>
            <br />

            {
                props.children
            }
        </div>
    );
};

export default cart;