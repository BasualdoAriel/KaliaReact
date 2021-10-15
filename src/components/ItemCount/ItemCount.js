import { Button, Container } from "react-bootstrap";
import './ItemCount.css';

export const ItemCount=({onAdd, onDecreace, value})=>{
    
    return(
        <Container className="d-flex justify-content-center">
            <Button variant="outline-success" onClick={onAdd} size="sm">+</Button>
            <p className="value">{value}</p>
            <Button variant="outline-danger" onClick={onDecreace}size="sm">-</Button>
        </Container>
    );
}