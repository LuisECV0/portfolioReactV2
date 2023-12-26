import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css'
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-between">
      <Navbar.Brand href="#">Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Contact</Nav.Link>
          <Nav.Link href="#">Skills</Nav.Link>
          <Nav.Link href="#">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;