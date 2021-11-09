import { Button, Container, Card } from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import { useState } from "react";
import './ItemCount.css';

export const ItemCount=({initial, stock, onAdd})=>{
    const [counter, setCounter]=useState(initial);
    const add =()=>{
        if(counter<stock){
            setCounter(counter+1);
            console.log(counter);
        }else{
            alert('No podés agregar más productos');
        }
        
    }
    const decreace =()=>{
        if(counter>initial){
            setCounter(counter-1);
        }else{
            alert('No podés quitar más productos');
        }
    }
    return(
        <Container className="d-flex justify-content-center pb-3 pt-2">
            <Card style={{ width: '18rem' }} className="itemBack">
                <Card.Body className="d-flex justify-content-center">
                    <Button variant="success" onClick={add} size="sm">+</Button>
                    <p className="value">{counter} de {stock}</p>
                    <Button variant="danger" onClick={decreace}size="sm">-</Button>
                </Card.Body>
                <Card.Footer>
                    <Button variant="success" onClick={onAdd}>Agregar al carrito</Button>
                    <Button variant="success"><NavLink to="/cart" activeClassName="linkCartA" className="linkCart" >Finalziar Compra</NavLink></Button>
                </Card.Footer>
            </Card>
        </Container>
    );
}