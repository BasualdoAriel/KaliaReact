import { Col, Card, Row, Button } from "react-bootstrap"
import { useCart } from "../../contexts/CartContext"
import './CartRow.css'

export const CartRow=({product})=>{
    const {deleteItem}=useCart()
    return(
        <Row className="text-center pt-2">
            <Col className="bg-Col">
                <Card style={{ width: '7rem' }} className="bg-Col">
                    <div className="bg-Col">
                        <Card.Img variant="top" src={product.img} className="productImage" />
                    </div>
                    
                </Card>
            </Col>
            <Col className="bg-Col">
                <p className="productName">{product.name}</p>
                <div className="bg-div">
                    <span>{product.desc}</span>
                </div>
                
            </Col>
            <Col className="bg-Col">
                <p>Cantidad en carrito:</p>
                <span className="bg-quantity">{product.quantity}</span>
            </Col>
            <Col className="bg-Col">
                <p>Precio: <b>${product.quantity*product.price}</b></p>
                <div className="bg-div">
                    <span>Cantidad: {product.quantity}</span>
                    <br/>
                    <span>Precio unitario:{product.price}</span>
                </div>
            </Col>
            <Col className="bg-Col">
                <p className="deleteProduct">Eliminar del carrito</p>
                <Button variant="danger" onClick={()=>{deleteItem(product.name)}}>X</Button>
            </Col>
        </Row>
    )

}