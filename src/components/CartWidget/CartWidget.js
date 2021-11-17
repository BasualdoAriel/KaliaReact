import { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            <Link to="/cart"><img src={cart} alt="" className="imgCart"/></Link>
            <span><Badge bg="info">{quantity}</Badge></span>
        </>
    );
}