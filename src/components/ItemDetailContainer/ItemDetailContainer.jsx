import { Container, Spinner } from "react-bootstrap";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import{ getDoc, doc} from 'firebase/firestore'
import { getFirestore } from '../../firebase';
import { Footer } from "../Footer/Footer";

export const ItemDetailContainer=()=>{
    let producto= useParams();
    const [item, setItem]=useState(null);
    useEffect(()=>{
        const db=getFirestore()

        const prodSeek=doc(db, "items", producto.id);
        getDoc(prodSeek).then((snapshot)=>{
            if(snapshot.exists()){
                setItem(snapshot.data())
            }
        })
    },[producto])

    return(
        <Container className="text-center">
            {item? <ItemDetail item={item}/> : <Spinner animation="border"/>}
            <Footer/>
        </Container>
    )
}