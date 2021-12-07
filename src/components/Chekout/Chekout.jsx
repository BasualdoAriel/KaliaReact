import {Button, Container, Form} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { ModalCheckout } from '../ModalCheckout/ModalCheckout';
import { useCart } from '../../contexts/CartContext';
import './Checkout.css'
import { Footer } from '../Footer/Footer';

export const CheckOut=()=>{
    const [modalShow, setModalShow]=useState(false)
    const [button, setButton]=useState(true)
    const [userInfo, setUserInfo]=useState({
        name:"",
        email: "",
        cel: "",
    })
    const inputs=[
        {
            label: "Nombre",
            name: "name"
        },
        {
            label:"Email",
            name: "email"
        },
        {
            label:"Teléfono",
            name: "cel"
        }
    ]

    function handleChange(evt){
        setUserInfo({...userInfo,[evt.target.name]:evt.target.value});
    }

    const {createOrder}=useCart();
    const sendOrder =()=>{
        createOrder(userInfo)
        setModalShow(true);
    }

    useEffect(()=>{
        if((!isNaN(userInfo.cel))&&((userInfo.email).includes("@"))&&((userInfo.email).includes(".com"))){
            setButton(false);
        }if(userInfo.cel===''){
            setButton(true);
        }
    },[userInfo.cel, userInfo.email])

    return(
        <Container className="text-center">
            <h3>Ingresá tus datos!</h3>
            <Form className="bgForm">
                {inputs.map((input)=>(
                        <Form.Group key={input.name} className="mb-3" controlId="formBasicName ">
                            <Form.Label>{input.label}</Form.Label>
                            <br/>
                             <input 
                                value={userInfo[input.name]}
                                type="text"
                                name={input.name}
                                onChange={handleChange}
                                size="50"
                            /> 
                        </Form.Group>
                    ))
                }
                <Button onClick={()=>sendOrder()} disabled={button}>Confirmar</Button>
                </Form>
                <ModalCheckout show={modalShow} onHide={()=>setModalShow(false)}/>
                <Footer/>
        </Container>
    )

}