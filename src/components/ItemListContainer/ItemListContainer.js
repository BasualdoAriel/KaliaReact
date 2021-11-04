import { Container } from "react-bootstrap";
import {ItemCount } from "../ItemCount/ItemCount";
import {ItemList} from '../ItemList/ItemList'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';


const items=[
    {
        "cat":"rinio",
        "id":"RinioKalia",
        "price":800,
        "name":"Riñonera Kalia", 
        "img":"https://basualdoariel.github.io/KaliaAccesorios/images/Rinio.jpg", 
        "desc":"Riñonera negra de eco cuero ♻️ con correa regulable.", 
        "stock": 3
    },
    
    {
        "cat":"rinio",
        "id":"RinioKaliaAm",
        "price": "850",
        "name": "Rinionera KALIA amarilla",
        "img": "https://basualdoariel.github.io/KaliaAccesorios/images/rinio1.jpeg",
        "desc":"Riñonera amarilla de eco cuero ♻️ con correa regulable",
        "stock": 2
    },


    {
        "cat":"bille",
        "id":"BilleSirena",
        "price": 730, 
        "name":"Billetera sirena", 
        "img":"https://basualdoariel.github.io/KaliaAccesorios/images/bille4.jpeg", 
        "desc":"Mini billetera sirena con 4 tarjeteros💳, monedero 🪙 y espacio para dinero 💵.",
        "stock": 5
    },

    {
        "cat":"bille",
        "id":"BilleDRosa",
        "price": "730",
        "name": "Billetera DIAMANTE rosa",
        "img": "https://basualdoariel.github.io/KaliaAccesorios/images/bille1.jpeg",
        "des":"Billera de diamantes rosa, con 4 tarjeteros💳, monedero 🪙 y espacio para dinero 💵. ",
        "stock": 4
    },

    {
        "cat":"medias",
        "id":"MediaBanana",
        "price": 280, 
        "name":"Medias Banana", 
        "img":"https://basualdoariel.github.io/KaliaAccesorios/images/medias4.jpg", 
        "desc":"Media 3/4 de algodón. Abarcan de talle desde 36-42 🧦.", 
        "stock": 4
    },
    {
        "cat":"medias",
        "id":"MediaRickyFort",
        "price": "280",
        "name": "Medias Ricardo Fort",
        "img": "https://basualdoariel.github.io/KaliaAccesorios/images/medias1.jpg",
        "desc":"Media 3/4 de algodón, con la cara del comandante. Abarcan de talle desde 36-42 🧦.",
        "stock": 5
    }

];




export const ItemListContainer= ()=>{
    const[products, setProducts]=useState(null);
    let category=useParams();
    useEffect(()=>{
        const task=new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(items);
            },2000);
        })
        task.then(
            (result)=>{
                if(Object.keys(category).length===0){
                    setProducts(result);
                }
                else{
                    return (setProducts(result.filter((prod)=>prod.cat===category.catId)));
                }
            },
            (err)=>{
                console.log(err);
            }
        ).catch((err)=>{
            console.log(err);
        }).finally(()=>{
            console.log('finalizó carga');
        })
    },[products, category])

    //console.log(products)
    
    return(
        <Container className="text-center">
            <h1 className="pb-4">Kalia Accesorios</h1>
            <ItemList items={products}/>
            <ItemCount  inital={1} stock={5}/>
        </Container>
        
    );    
}