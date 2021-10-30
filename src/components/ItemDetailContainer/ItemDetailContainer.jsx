import { Container } from "react-bootstrap";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";

const item={
    id:"billetera", 
    price: 730, 
    name:"Billetera sirena", 
    img:"https://basualdoariel.github.io/KaliaAccesorios/images/bille4.jpeg", 
    desc:"Mini billetera sirena con 4 tarjeteros💳, monedero 🪙 y espacio para dinero 💵.", 
    stock: 5}

const getItem =()=>{
    const task=new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(item);
        },2000);
    })
    return task
}

export const ItemDetailContainer=()=>{
    const [item, setItem]=useState(null);
    useEffect(()=>{
        const task=getItem();
        task.then(
        (result)=>{
            setItem(result)
        });        
    },[])
    console.log(item)

    return(
        <Container>
            <ItemDetail item={item}/>
        </Container>
    )
}