import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <Container>
        <h2>Contact Me</h2>
        <p>Feel free to reach out for any inquiries or just to say hello!</p>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="message">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your Message" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Send Message
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default ContactSection;
