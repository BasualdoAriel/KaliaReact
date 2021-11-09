import { Container, Col, Row, Card, Button} from "react-bootstrap"
import './ItemDetail.css'
import {ItemCount} from '../ItemCount/ItemCount';

import camion from '../../images/camion.png'
import { useState } from "react";
import { NavLink } from "react-router-dom";


const cartArray=[];

export const ItemDetail =({item})=>{
    console.log(cartArray)
    const [cart, setCart]=useState(item.name)

    
    const onAdd=(evt)=>{
        evt.preventDefault();
        setCart(
            cartArray.push(cart)
        )
        console.log(cartArray)
    }

    return(
        <Container className="mt-5 itemDContainer p-3">
        <Row>
            <Col>
                <Card className="itemBorderContainer">
                    <Card.Img variant="bottom" src={item.img} className="itemImg"/>
                </Card>
            </Col>
            <Col className="itemDContainer itemBorderContainer">
                <Container>
                    <h3>{item.name}</h3>
                    <br/>
                    <h4>Precio: ${item.price}</h4>
                    <br/>
                    <h5>Descripción del producto:</h5>
                    <p className="itemDescription">{item.desc}</p>
                    <br/>
                    <Container className="pb-5">
                        <div>
                            <h5><span className="px-3"> <img src={camion} alt="" className="camion"/></span>
                                Hacemos envios 
                            </h5>
                            <p>Consultá por las zonas de envío o puntos de encuentro <b>acá</b></p>
                        </div> 
                    </Container>
                    <Container className="text-center">
                        <Row className="pb-2 pt-3">
                            <Col>
                                <span className="itemStock">Stock disponible: {item.stock}</span>
                                {!cartArray.includes(item.name)?<ItemCount initial={0} stock={item.stock} onAdd={onAdd} className="itemStock"/>:<Button variant="success"><NavLink to="/cart" activeClassName="linkCartA" className="linkCart" >Finalziar Compra</NavLink></Button>}                    
                            </Col>
                        </Row>
                            
                    </Container>
                </Container>
            </Col>
        </Row>
        
    </Container>
    )
   
}