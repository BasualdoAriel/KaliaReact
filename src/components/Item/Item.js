import { Card, Button } from "react-bootstrap"
import './Item.css'
export function Item({item}){
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} className="imgCard"/>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Button variant="success">Ver detalle del producto</Button>
            </Card.Body>
            <Card.Footer>
                <p>Stock disponible: {item.stock}</p>
            </Card.Footer>
        </Card>
    )
}