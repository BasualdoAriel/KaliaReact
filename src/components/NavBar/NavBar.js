import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from '../NavBar/images/logoOscuro.jpg'
import { CartWidget } from "../CartWidget/CartWidget";
import './NavBar.css'

export function NavBar(){
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} className="imgLogo" alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Nosotros</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Accesorios para el pelo</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Acero</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Billeteras</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Medias</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Riñoneras</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.6">Ruanas</NavDropdown.Item>
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