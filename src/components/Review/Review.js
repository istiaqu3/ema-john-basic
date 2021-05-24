import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import successImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart]= useState([]);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const savedCart= getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map ( key =>{
            const product = fakeData.find( pd => pd.key === key);
            product.quantity= savedCart[key];
            return product;
        } );
        setCart(cartProducts);
    },[]);

    const removeProduct =(productKey) =>{
        console.log("Removed product:",productKey);
        const newCart= cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    const handlePlaceOrder = () => {
        if (cart.length > 0)
                { setCart([]);
                setSuccess(true);
                processOrder();}   
    }

    let thanks;
    if (success){
        thanks = <img src={successImage} alt="" />
    }

    return (
        <div className="shop-container">
            <div className="product-container">
            {
                cart.map(product => <ReviewItem item={product} removeProduct={removeProduct}
                key={product.key}></ReviewItem>)
            }


           {thanks}


            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="addToCartBtn">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;