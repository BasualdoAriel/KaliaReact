
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
            cartContent.forEach((prod)=>{
                if(prod.name===item.name){
                    prod.quantity=prod.quantity+quantity
                    if(prod.quantity>prod.stock){
                        alert('máximo de productos')
                        prod.quantity=prod.stock;
                    }
                }
            })
            setCartContent([...cartContent])
        }
      return
    }

    const itemsOnCart=(cartContent)=>{
        let items=0;
        cartContent.forEach(item => {
            items=items+item.quantity
        });
        return items;
    }

    const finalPrice=(cartContent)=>{
        let finalPrice=0;
        if(cartContent){
            cartContent.forEach(item=>{
                finalPrice=finalPrice+(item.quantity*item.price);
            })
        }
        
        return finalPrice
    }

    const deleteItem=(item)=>{
        setCartContent(cartContent.filter((product) => product.name !== item))

    }


    const clear=()=>{
        console.log('limpio carro')
        setCartContent([]);
    }

    return <CartContext.Provider value= {{cartContent, addItem, clear, itemsOnCart, finalPrice, deleteItem}}>{children}</CartContext.Provider>

}