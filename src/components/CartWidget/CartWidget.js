import { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import { useCart } from '../../contexts/CartContext';
import cart from '../../images/cart.png'
import './CartWidget.css'

export const CartWidget=()=>{
    const {cartContent,itemsOnCart}=useCart();
    const [quantity, setQuantity]=useState(0)
    useEffect(()=>{
        setQuantity(itemsOnCart(cartContent));
    },[cartContent, itemsOnCart])
    return(
        <>
            <img src={cart} alt="" className="imgCart"/>
            <span><Badge bg="info">{quantity}</Badge></span>
        </>
    );
}