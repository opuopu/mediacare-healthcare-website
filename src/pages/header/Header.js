import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css'
import logo from "../../image/logo-removebg-preview.png"
import Fireuse from '../../hooks/Fireuse';

import Useauth from '../../context/useauth'
const Header = () => {
  const {user,logout} = Useauth()
    return (
        <div>
              <Navbar fixed="top" collapseOnSelect expand="lg" className="navbars" variant="dark">
    <Container>
    <Navbar.Brand href="#home"> <h2 className="p-0 text-black ">medi<span className="text-info">care </span></h2> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link  as={Link} to="/home">Home</Nav.Link>
      <Nav.Link  as={Link} to="/service">service</Nav.Link>
      <Nav.Link as={Link} to="/about">about</Nav.Link>
      <Nav.Link as={Link} to="/appoitment">apppoitment</Nav.Link>
      { user?.email?  <Nav.Link className="fw-bold text-white" onClick={logout}>logout</Nav.Link>:<Nav.Link as={Link} to="/login">login</Nav.Link> }
      {
        user?.displayName?   <p className="mt-2">as: <span className="fw-bold"> {user.displayName}</span></p> :
        <p className="mt-2">as: <span className="fw-bold"> {user.email}</span></p>
      }
     
       
    
    
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;