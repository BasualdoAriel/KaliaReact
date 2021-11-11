
import { createContext, useState, useContext } from "react";


export const CartContext=createContext();

export const useCart=()=>useContext(CartContext);

export const CartProvider=({children})=>{
    const[cartContent, setCartContent]=useState([])

    const addItem=(item, quantity)=>{
        
        const newItem={...item, quantity:quantity}
        const isInCart=cartContent.some((prod)=>prod.name===item.name);
        if(!isInCart){
            alert(`Agregaste el producto: ${item.name} x ${quantity}`)
            setCartContent([...cartContent,newItem])
        }else{
            alert(`El producto ya está en el carrito, agregamos ${quantity} más.`)
            const existentItem=cartContent.find((prod)=>prod.id===item.id);
            existentItem.quantity=existentItem.quantity+quantity;
        }
        return;
    }

    const clear=()=>{
        console.log('limpio carro')
        setCartContent([]);
    }

    return <CartContext.Provider value= {{cartContent, addItem, clear}}>{children}</CartContext.Provider>

}