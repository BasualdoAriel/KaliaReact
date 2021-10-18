import { Container } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";


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
        <Container>
            <h1>Kalia Accesorios</h1>
            <ItemCount  onAdd={add} onDecreace={decreace} inital={counter} stock={stock}/>
        </Container>
        
    );
}