import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Order Summry</h3>
            <h5>selecet products: {cart.length} </h5>
        </div>
    );
};

export default Cart;