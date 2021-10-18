import { Button, Container, Card } from "react-bootstrap";
import product from '../ItemCount/images/product.svg'
import './ItemCount.css';

export const ItemCount=({onAdd,onDecreace, inital, stock})=>{
    
    return(
        <Container className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product} />
                <Card.Body className="d-flex justify-content-center">
                    <Button variant="outline-success" onClick={onAdd} size="sm">+</Button>
                    <p className="value">{inital} de {stock}</p>
                    <Button variant="outline-danger" onClick={onDecreace}size="sm">-</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}