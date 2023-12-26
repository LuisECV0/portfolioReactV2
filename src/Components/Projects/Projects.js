import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import projectsData from './projectsData';
import './Projects.css';

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <Container>
        <h2>My Projects</h2>
        <Row>
          {projectsData.map((project) => (
            <Col key={project.id} md={4} sm={6}>
              <Card className="project-card">
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.detailsLink} target="_blank">
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;
