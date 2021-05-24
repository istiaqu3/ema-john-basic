import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductDetails = () => {
    const {productKey}=useParams();
    const product= fakeData.find(product => product.key === productKey);
    return (
        <div>
            <Products product={product} addToCartShow={false}></Products>
        </div>
    );
};

export default ProductDetails;