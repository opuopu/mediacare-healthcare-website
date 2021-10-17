import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div>
              <Navbar collapseOnSelect expand="lg" className="navbars" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Opus hospital limited</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link  as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/services">services</Nav.Link>
      <Nav.Link as={Link} to="/about">about us</Nav.Link>
      <Nav.Link as={Link} to="/login">login</Nav.Link>
    
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;