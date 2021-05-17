import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const totalPrice= cart.reduce((total, product) => total + product.price, 0);
    // array.reduce((accumulator, currentValue) => accumulator + currentValue, price, initialValue);
    let shipping=0;
    if (totalPrice > 0 && totalPrice <=15)
    {shipping = 12.99;}
    else if(totalPrice > 15 && totalPrice <=35)   
    {shipping = 4.99;} 

    const tax = parseFloat((totalPrice/15).toFixed(2));
    const grandTotal=(totalPrice + shipping + tax).toFixed(2);

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p><small>Vat: ${tax}</small></p>
            <h5>Total Price: ${grandTotal}</h5>

        </div>
    );
};

export default Cart;