import { Container, Col, Row, Card, Button} from "react-bootstrap"
import './ItemDetail.css'

import camion from '../../images/camion.png'

export const ItemDetail =({item})=>{
    console.log(item)
    return(
        <Container className="mt-5 itemDContainer p-3">
        {<Row>
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
                        <Row className="pb-2 pt-5">
                            <Col>
                                <span className="itemStock">Stock disponible</span>
                            </Col>
                            <Col>
                                <span className="itemStock">{item.stock}</span>
                            </Col>
                        </Row>
                            
                    </Container>
                    <div className="text-center pt-5">
                        <Button className="mx-2" variant="success">Agregar al carrito</Button>
                        <Button variant="success">Comprar</Button>
                    </div>
                </Container>
            </Col>
        </Row>}
        
    </Container>
    )
   
}