import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutMe.css';

const Presentation = () => {
  return (
    <div className="presentation">
      <Container>
        <Row>
          <Col md={8} className="text-presentation">
            <h1>I'm LuisCV</h1>
            <p>I'm a frontend developer.</p>
            <a href="./DOC/Luis-Castañeda-Vega.pdf" download="Luis-Castañeda-Vega.pdf">Download CV</a>
          </Col>
          <Col md={4} className="circle-container">
            <div className="circle"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Presentation;