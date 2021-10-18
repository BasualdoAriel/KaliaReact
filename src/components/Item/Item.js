import { Card, Button } from "react-bootstrap"
import './Item.css'
export function Item({item}){
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} className="imgCard"/>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    <p>{item.desc}</p>
                </Card.Text>
                <Button variant="success">Comprar</Button>
            </Card.Body>
        </Card>
    )
}