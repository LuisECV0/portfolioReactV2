import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand>NavBar <span>Responsive</span></Navbar.Brand>
        <Navbar.Toggle onClick={toggleMenu} aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className={`justify-content-end ${isMenuOpen ? 'show' : ''}`}>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Acerca de mí</Nav.Link>
            <Nav.Link href="/">Habilidades</Nav.Link>
            <Nav.Link href="/">Proyectos</Nav.Link>
            <Nav.Link href="/">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className="burger-button" variant="outline-light" onClick={toggleMenu}>
          <span className={`burger ${isMenuOpen ? 'active' : ''}`} id="hamburger-1"></span>
          <span className={`burger ${isMenuOpen ? 'active' : ''}`} id="hamburger-2"></span>
          <span className={`burger ${isMenuOpen ? 'active' : ''}`} id="hamburger-3"></span>
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
