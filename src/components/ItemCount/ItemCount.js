import { Button, Container, Card } from "react-bootstrap";
import product from '../ItemCount/images/product.svg';
import { useState } from "react";
import './ItemCount.css';

export const ItemCount=({inital, stock})=>{
    const [counter, setCounter]=useState(inital);
    const add =()=>{
        if(counter<stock){
            setCounter(counter+1);
            console.log(counter);
        }else{
            alert('No podés agregar más productos');
        }
        
    }
    const decreace =()=>{
        if(counter>inital){
            setCounter(counter-1);
        }else{
            alert('No podés quitar más productos');
        }
    }
    return(
        <Container className="d-flex justify-content-center pb-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product} />
                <Card.Body className="d-flex justify-content-center">
                    <Button variant="outline-success" onClick={add} size="sm">+</Button>
                    <p className="value">{counter} de {stock}</p>
                    <Button variant="outline-danger" onClick={decreace}size="sm">-</Button>
                </Card.Body>
                <Card.Footer>
                    <Button variant="success">Agregar al carrito</Button>
                </Card.Footer>
            </Card>
        </Container>
    );
}