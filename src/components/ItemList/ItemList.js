import { Item } from "../Item/Item";
import { Container, Spinner } from "react-bootstrap";


export function ItemList({items}){
    return(
        <Container className="d-flex justify-content-center pb-4">
            {items? items.map(item=><Item item={item} key={item.id}/>):<Spinner animation="border" role="status" variant="info"><span className="visually-hidden">Loading...</span></Spinner>}
        </Container>
    )
}