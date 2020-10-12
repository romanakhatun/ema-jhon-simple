import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import './Product.css'
import Product from './Product';

const ProductDetail = () => {
    const { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey);

    //single product style
    const singleProduct = {
        maxWidth: '1140px',
        padding: '0 15px',
        margin: '0 auto',
    }

    return (
        <div className="singleProduct" style={singleProduct}>
            <Product showAddToCart={false} product={product} />
        </div>
    );
};

export default ProductDetail;