import cart from '../../images/cart.png'
import './CartWidget.css'

export const CartWidget=()=>{
    return(
        <img src={cart} alt="" className="imgCart"/>
    );
}