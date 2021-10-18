import { Container } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import {ItemList} from '../ItemList/ItemList'

const items=[
    {id:"billetera", price: 730, name:"Billetera sirena", img:"https://basualdoariel.github.io/KaliaAccesorios/images/bille4.jpeg", desc:"Mini billetera sirena con 4 tarjeteros💳, monedero 🪙 y espacio para dinero 💵."},
    {id:"rinio", price: 800, name:"Riñonera Kalia", img:"https://basualdoariel.github.io/KaliaAccesorios/images/Rinio.jpg", desc:"Riñonera negra de eco cuero ♻️ con correa regulable."},
    {id:"media", precio: 280, name:"Medias Banana", img:"https://basualdoariel.github.io/KaliaAccesorios/images/medias4.jpg", desc:"Media 3/4 de algodón. Abarcan de talle desde 36-42 🧦."}
]


export const ItemListContainer= ()=>{
    const [counter, setCounter]=useState(1);
    const stock= 5;
    const add =()=>{
        if(counter<5){
            setCounter(counter+1);
            console.log(counter);
        }else{
            alert('No podés agregar más productos');
        }
        
    }
    const decreace =()=>{
        if(counter>1){
            setCounter(counter-1);
        }else{
            alert('No podés quitar más productos');
        }
    }
    return(
        <Container className="text-center">
            <h1 className="pb-4">Kalia Accesorios</h1>
            <ItemList items={items}/>
            <ItemCount  onAdd={add} onDecreace={decreace} inital={counter} stock={stock}/>
        </Container>
        
    );
}