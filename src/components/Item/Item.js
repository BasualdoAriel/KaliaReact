import { Card, Button } from "react-bootstrap"
import './Item.css'
import {NavLink} from 'react-router-dom'



export function Item({item}){
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} className="imgCard"/>
            <Card.Body>
                <Card.Title className="itemName">{item.name}</Card.Title>
                <Button variant="dark"><NavLink to={`/item/${item.id}`} activeClassName="linkProductA" className="linkProduct">Ver</NavLink></Button>
            </Card.Body>
            <Card.Footer>
                <p>Stock disponible: {item.stock}</p>
            </Card.Footer>
        </Card>    
    )
}