import React from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = (props) => {
    const {img,name,seller,price, quantity,key}=props.item;
    return (

        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by {seller}</small></p>
                <p><small>${price}</small></p>  
                <p><small>Quantity: {quantity}</small></p>   
                <button className="addToCartBtn" onClick={() => props.removeProduct(key)}> <FontAwesomeIcon icon={faTrash} /> Remove</button>     
            </div>
         </div>

    );
};

export default ReviewItem;