import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import ReviewItems from './ReviewItems';
import happyImg from '../../images/giphy.gif'

const Review = () => {
    const [ cart, setCart ] = useState([]);
    const [ orderPlace, setOrderPlace ] = useState(false)

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[ key ];
            return product;
        })
        setCart(cartProducts);
    }, []);

    //Remove Product
    const removeProduct = (productKeys) => {
        const newCart = cart.filter(pd => pd.key !== productKeys)
        setCart(newCart);
        removeFromDatabaseCart(productKeys)
    }

    //place order
    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlace(true)
        processOrder();
    }
    let thankYou;
    if (orderPlace) {
        thankYou = <img src={happyImg} alt="" />
    }


    return (
        <div className="shopContainer">
            <div className="productContainer">
                {
                    cart.map(pd => <ReviewItems key={pd.key} product={pd} removeProduct={removeProduct}></ReviewItems>)

                }
                {
                    thankYou
                }
            </div>
            <div className="cartContainer">
                <Cart cart={cart}>
                    <div className="textCenter">
                        <button className="btn" onClick={handlePlaceOrder}>Place Order</button>
                    </div>
                </Cart>
            </div>
        </div >
    );
};

export default Review;