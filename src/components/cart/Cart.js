import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total=0;
    let shipping=0;
    let quantity=0;
    for(const product of cart){
        quantity=quantity+product.quantity;
        total=total+product.price*quantity;
        shipping=shipping+product.shipping;
    }
    const tax=parseFloat((total*.1).toFixed(2));
    const grandTotal=total+shipping+tax;
    return (
        <div className='cart'>
            <h3>Order Summry</h3>
            <h5>selecet products: {quantity} </h5>
            <p>Total Price: ${total} </p>
            <p> Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;