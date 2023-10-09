import React from "react";
import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import logo from '../imgs/logo.png';

const NavBar = () => {
  
    return ( 
    <div>
        <Navbar bg="black" data-bs-theme="dark">
        <Container>
            <Nav className="me-auto" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Blogs">Blogs</Nav.Link>
            <Nav.Link href="/">About Us</Nav.Link>
            <Nav.Link href="/">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div> 
    );
}
 
export default NavBar;