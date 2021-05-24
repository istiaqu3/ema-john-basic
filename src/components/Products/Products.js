import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css';
import { Link } from 'react-router-dom';

const Products = (props) => {
    // console.log(props.product);
    const { name, price, seller, img, stock, key } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/" + key}>{name}</Link></h4>
            
                <p><small>by {seller}</small></p>
                <p><small>${price}</small></p>
                <p><small>Only {stock} Remaining. -Order Soon</small></p>
               { props.addToCartShow && <button onClick={() => props.handleAddProduct(props.product)} className="addToCartBtn"> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>}
            </div>
        </div>
    );
};

export default Products;