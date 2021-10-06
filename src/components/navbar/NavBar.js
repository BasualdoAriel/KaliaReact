
import Kalia from './images/logoOscuro.jpg';

export function NavBar(){
    return(
        <div className="navBar">
            <nav>
                <ul className="navBarContainer">
                    <li className="itemNav"><img src={Kalia} alt="" className="logoNav"/></li>
                    <li className="itemNav">Home</li>
                    <li className="dropDownMenu itemNav">Productos
                        <ul className="dropDownItems">
                            <li>Accesorios para el pelo</li>
                            <li>Acero</li>
                            <li>Billeteras</li>
                            <li>Medias</li>
                            <li>Riñoneras</li>
                            <li>Ruanas</li>
                        </ul>
                    </li>
                    <li className="itemNav">Envios</li>
                    <li className="itemNav">Nostros</li>
                </ul>
            </nav>
        </div>


    );
}