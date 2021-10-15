import { Container } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";


export const ItemListContainer= ()=>{
    const [counter, setCounter]=useState(0);
    const add =()=>{
        setCounter(counter+1);
        console.log(counter)
    }
    const decreace =()=>{
        if(counter>0){
            setCounter(counter-1);
        }else{
            alert('No podés quitar más productos');
        }
    }
    return(
        <Container>
            <h1>Kalia Accesorios</h1>
            <ItemCount  onAdd={add} onDecreace={decreace} value={counter}/>
        </Container>
        
    );
}