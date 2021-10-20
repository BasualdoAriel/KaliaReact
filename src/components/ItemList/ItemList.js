import { Item } from "../Item/Item";
import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";


export function ItemList({items}){
    const[products, setProducts]=useState(null);

    useEffect(()=>{
        const task=new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(items);
            },2000);
        })
        task.then(
            (result)=>{
                setProducts(result);
            },
            (err)=>{
                console.log(err);
            }
        ).catch((err)=>{
            console.log(err);
        }).finally(()=>{
            console.log('finalizó carga');
        })
    },)
    return(
        <Container className="d-flex justify-content-center pb-4">
            {products? products.map(product=><Item item={product} key={product.id}/>):<Spinner animation="border" role="status" variant="info"><span className="visually-hidden">Loading...</span></Spinner>}
        </Container>
    )
}