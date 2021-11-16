
import { Container } from "react-bootstrap"
import { useCart } from "../../contexts/CartContext"


export const Cart=()=>{
    const {cartContent}=useCart();

    console.log(cartContent)
    return(
    <>
        <h1>Cart</h1>
        <Container>
            {cartContent? cartContent.map(item=>(<p>{item.name}</p>)):<p>no hay nada</p>}



        </Container>
    </>
    )
}