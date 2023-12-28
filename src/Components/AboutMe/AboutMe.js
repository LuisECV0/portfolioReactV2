import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './AboutMe.css';
import myPhoto from './faker.jpg';  // Reemplaza 'myPhoto.jpg' con el nombre de tu imagen

const AboutMeSection = () => {
  return (
    <section className="about-me-section">
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <Image src={myPhoto} alt="My Photo" roundedCircle className="my-photo" />
          </Col>
          <Col md={8}>
            <div className="description">
              <h2>About Me</h2>
              <p>¡Hola! Soy Luis, un apasionado desarrollador web.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMeSection;
