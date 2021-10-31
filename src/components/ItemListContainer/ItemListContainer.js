import { Container } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import {ItemList} from '../ItemList/ItemList'
import { useState, useEffect } from "react";

const items=[
    {id:"billetera", price: 730, name:"Billetera sirena", img:"https://basualdoariel.github.io/KaliaAccesorios/images/bille4.jpeg", desc:"Mini billetera sirena con 4 tarjeteros💳, monedero 🪙 y espacio para dinero 💵.", stock: 5},
    {id:"rinio", price: 800, name:"Riñonera Kalia", img:"https://basualdoariel.github.io/KaliaAccesorios/images/Rinio.jpg", desc:"Riñonera negra de eco cuero ♻️ con correa regulable.", stock: 3},
    {id:"media", price: 280, name:"Medias Banana", img:"https://basualdoariel.github.io/KaliaAccesorios/images/medias4.jpg", desc:"Media 3/4 de algodón. Abarcan de talle desde 36-42 🧦.", stock: 4}
]


export const ItemListContainer= ()=>{
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
        <Container className="text-center">
            <h1 className="pb-4">Kalia Accesorios</h1>
            <ItemList items={products}/>
            <ItemCount  inital={1} stock={5}/>
        </Container>
        
    );
}