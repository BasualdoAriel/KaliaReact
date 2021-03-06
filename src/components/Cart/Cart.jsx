import { Container, Row, Col, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { useCart } from "../../contexts/CartContext"
import { CartRow } from "../CartRow/CartRow";
import { Footer } from "../Footer/Footer";
import { SearchProduct } from "../SearchProduct/SearchProduct";
import './Cart.css'

export const Cart=()=>{
    const {cartContent, finalPrice, clear}=useCart();
    
    return(
    <>
        <Container className="pt-3">
            <h1  className="text-center">Carrito de compras 🛒</h1>
            <Row>
                {cartContent? cartContent.map(item=><CartRow product={item} key={item.name}/>):<SearchProduct/>}
            </Row>
            <br/>
            {cartContent.length>0?<Row className="finalPrice pt-2">
                <Col xs lg="9">
                        <h4 className="price">TOTAL: ${finalPrice(cartContent)}</h4>
                </Col>
                <Col>
                    <Button variant="success"><NavLink to="/checkout" activeClassName="buyA" className="buy">Comprar</NavLink></Button>
                    <Button variant="danger" onClick={clear}>Vaciar carrito</Button>

                </Col>
                
            </Row>:<SearchProduct/>}
            <Footer/>
        </Container> 
    </>
    )
}