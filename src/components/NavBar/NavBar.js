import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from '../NavBar/images/logoOscuro.jpg'
import { CartWidget } from "../CartWidget/CartWidget";
import {NavLink, Link} from 'react-router-dom'
import './NavBar.css'

export function NavBar(){

    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><Link to='/'><img src={logo} className="imgLogo" alt=""/></Link>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home"><Link to="/" className="home">Home</Link></Nav.Link>
                    <Nav.Link href="#link"></Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown" >
                        <div className="d-flex flex-column">
                            <NavLink to="/category/bille" activeClassName="linkCatA" className="linkCat px-3">Billeteras</NavLink>
                            <NavLink to="/category/medias" activeClassName="linkCatA" className="linkCat px-3">Medias</NavLink>
                            <NavLink to="/category/rinio" activeClassName="linkCatA" className="linkCat px-3">Riñoneras</NavLink>
                        </div>
                        
                    </NavDropdown>
                </Nav>
                <Nav className="justify-content-end">
                    <Nav.Link>
                        <CartWidget/>
                    </Nav.Link>   
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}