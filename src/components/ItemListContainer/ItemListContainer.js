import { Container } from "react-bootstrap";
import {ItemList} from '../ItemList/ItemList'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { getFirestore } from '../../firebase';
import{ collection, query, where,getDocs} from 'firebase/firestore'
import './ItemListContainer.css'
import { Footer } from "../Footer/Footer";

export const ItemListContainer= ()=>{
    const [products, setProducts]=useState(null)
    let category=useParams()

    useEffect(()=>{
        const db=getFirestore()
        if(Object.keys(category).length===0){
            const q= query(
                collection(db, "items")
            );
            getDocs(q).then((snapshot)=>{
                setProducts(
                    snapshot.docs.map((doc)=>{
                        const newDoc={...doc.data(), id:doc.id}
                        return newDoc
                    })
                );
            });
        }
        else{
            const q= query(
                collection(db, "items"),
                where("cat", "==", category.catId)
            );
            getDocs(q).then((snapshot)=>{
                setProducts(
                    snapshot.docs.map((doc)=>{
                        const newDoc={...doc.data(), id:doc.id}
                        return newDoc
                    })
                );
            });
        } return

    },[category])
    
    return(
        <Container className="text-center">
            <h1 className="pb-4 title">KALIA</h1>
            <h3 className="subTitle">Accesorios</h3>
            <ItemList items={products}/>
            <Footer/>
        </Container>
        
    );    
}