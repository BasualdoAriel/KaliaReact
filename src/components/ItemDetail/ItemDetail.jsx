import { Container, Col, Row, Card} from "react-bootstrap"
import './ItemDetail.css'
import {ItemCount} from '../ItemCount/ItemCount';
import { useCart } from "../../contexts/CartContext";

import camion from '../../images/camion.png'



export const ItemDetail =({item})=>{
    const {addItem}=useCart()

    const onAdd=(counter)=>{
        let quantity=counter;
        if(quantity>0){
            addItem(item, quantity)
            return;
        }else{
            alert('No agregaste productos')
        }
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
                                <ItemCount initial={0} stock={item.stock}  onAdd={onAdd} className="itemStock"/>                   
                            </Col>
                        </Row>
                            
                    </Container>
                </Container>
            </Col>
        </Row>
        
    </Container>
    )
   
}