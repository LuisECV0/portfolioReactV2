import React from 'react';
import Button from 'react-bootstrap/Button';

const BurgerButton = ({ isOpen, toggleMenu }) => {
  return (
    <Button className="burger-button" variant="outline-light" onClick={toggleMenu}>
      <span className={`burger ${isOpen ? 'active' : ''}`} id="hamburger-1"></span>
      <span className={`burger ${isOpen ? 'active' : ''}`} id="hamburger-2"></span>
      <span className={`burger ${isOpen ? 'active' : ''}`} id="hamburger-3"></span>
    </Button>
  );
};

export default BurgerButton;
