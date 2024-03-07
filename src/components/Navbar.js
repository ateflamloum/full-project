import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'
import logo from '../assets/e4469451604547fca4947adbfa67d321__1_-removebg-preview (2).png'
const Navbarr = () => {
    return (
        <Navbar className="navbar1">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo} // Use your imported logo as the source
                        width="160"
                        height="60"
                        className="d-inline-block align-top"
                        alt="My Brand"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="auto_me">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#account/SignIn">SignIn</NavDropdown.Item>
                            <NavDropdown.Item href="#account/SignUP">SignUp</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarr