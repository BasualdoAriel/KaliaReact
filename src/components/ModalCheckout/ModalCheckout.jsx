import {Modal, Button} from 'react-bootstrap'
import { useCart } from '../../contexts/CartContext';
import { NavLink } from 'react-router-dom';
import './ModalCheckout.css'
export const ModalCheckout=(props)=> {
    const {orderId}=useCart();
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            ¡Realizaste la compra!🚀
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>⚡¡Felicidades!⚡:</h5>
          <p>
            Completaste la compra y estamos procesando tu pedido! tu código de seguimiento es:
          </p>
          <p><b>{orderId}</b></p>
          <p>¡Muchas gracias!</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-primary" onClick={props.onHide}><NavLink to ="/" activeClassName="closeA" className="close">Cerrar</NavLink></Button>
        </Modal.Footer>
      </Modal>
    );
  }