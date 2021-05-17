import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const first10= fakeData.slice(0,5);
    const [products,setProduct] = useState(first10);
    const [cart, setCart] = useState([])

    const handleAddProduct = (product)=> {
        const newCart=[...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
          <div className="products-container">
             {
                 products.map(product => 
                 <Products handleAddProduct={handleAddProduct} product={product}>

                 </Products>)
             }
          </div>

          <div className="cart-container">

              <Cart cart={cart}></Cart>
              {/* {cart.map(cart =><li>{cart.name}</li>)} */}
          </div>
           
        </div>
    );
};

export default Shop;