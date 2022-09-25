import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const{handlerAddToCart,product}=props
    const{name,seller,price,img,ratings}=product
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'> {name}</p>
            <p>parice: ${price}</p>
            <p><small>Manufacture: {seller}</small></p>
            <p><small>Rating : {ratings} star</small></p>
            </div>
            < button onClick = {()=>handlerAddToCart(product)}
            className = 'cart-btn' >
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;