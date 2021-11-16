
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
            console.log(item.quantity)
            items=items+item.quantity
        });
        return items;
    }

    const clear=()=>{
        console.log('limpio carro')
        setCartContent([]);
    }

    return <CartContext.Provider value= {{cartContent, addItem, clear, itemsOnCart}}>{children}</CartContext.Provider>

}

/* alert(`El producto ya está en el carrito, agregamos ${quantity} más.`)
const existentItem=cartContent.find((prod)=>prod.id===item.id);
existentItem.quantity=existentItem.quantity+quantity;
setCartContent(cartContent.filter((product)=>product.id!==existentItem.id))
console.log('filter',cartContent.filter((product)=>product.id!==existentItem.id))
console.log('existent',existentItem)
console.log('cartc',cartContent)

if(existentItem.quantity>existentItem.stock){
    
    alert('Intentate agregar más productos que el stock disponible, agregamos solo que hay en stock.')
    existentItem.quantity= existentItem.stock */