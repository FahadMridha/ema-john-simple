import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        const storedCart=getStoredCart()
        const saveCart=[];
        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id===id)
            // console.log(addedProduct);
            if(addedProduct){
                const quantity=storedCart[id]
                addedProduct.quantity = quantity
                // console.log(addedProduct);
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    },[products])
     const handlerAddToCart = (product) => {
        // console.log(product);
        const newCart=[...cart,product]
        setCart(newCart)
        addToDb(product.id)
     }
    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product=><Product 
                    key={product.id}
                    product={product}
                    handlerAddToCart={handlerAddToCart}
                    />)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;