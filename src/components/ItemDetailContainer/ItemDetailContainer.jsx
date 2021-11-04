import { Container, Spinner } from "react-bootstrap";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import products from '../../assets/products.json'

    const getItem =()=>{
        const task=new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(products);
            },2000);
        })
        return task
    }

export const ItemDetailContainer=()=>{
    let producto= useParams();
    const [item, setItem]=useState(null);
    useEffect(()=>{
        const task=getItem();
        task.then(
        (result)=>{
            setItem(result[producto.id])
        });        
    },[producto])

    return(
        <Container className="text-center">
            {item? <ItemDetail item={item}/> : <Spinner animation="border"/>}
        </Container>
    )
}