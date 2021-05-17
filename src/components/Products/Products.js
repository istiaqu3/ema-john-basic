import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
    // console.log(props.product);
    const {name, price, seller, img,stock}=props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by {seller}</small></p>
                <p><small>${price}</small></p>
                <p><small>Only {stock} Remaining. -Order Soon</small></p>
                <button onClick={() => props.handleAddProduct(props.product)} id="addToCartBtn"> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Products;