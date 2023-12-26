import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiPhp, SiMysql, SiGit, SiFigma } from 'react-icons/si';
import 'animate.css';
import './Skills.css';

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <Container>
        <h2 className="animate__animated animate__fadeIn">My Skills</h2>
        <Row className="text-center">
          <Col md={3} xs={6} className="animate__animated animate__fadeInLeft">
            <SiHtml5 className="skill-icon" />
            <p>HTML5</p>
          </Col>
          <Col md={3} xs={6} className="animate__animated animate__fadeInLeft">
            <SiCss3 className="skill-icon" />
            <p>CSS3</p>
          </Col>
          <Col md={3} xs={6} className="animate__animated animate__fadeInRight">
            <SiJavascript className="skill-icon" />
            <p>JavaScript</p>
          </Col>
          <Col md={3} xs={6} className="animate__animated animate__fadeInRight">
            <SiReact className="skill-icon" />
            <p>React</p>
          </Col>
          <Col md={3} xs={6} className="animate__animated animate__fadeInLeft">
            <SiBootstrap className="skill-icon" />
            <p>Bootstrap</p>
          </Col>
          <Col md={3} xs={6} className="animate__animated animate__fadeInLeft">
            <SiPhp className="skill-icon" />
            <p>PHP</p>
          </Col>
          <Col md={3} xs={6} className="animate__animated animate__fadeInRight">
            <SiMysql className="skill-icon" />
            <p>MySQL</p>
          </Col>
          <Col md={3} xs={6} className="animate__animated animate__fadeInRight">
            <SiGit className="skill-icon" />
            <p>Git</p>
          </Col>
          <Col md={3} xs={6} className="animate__animated animate__fadeInLeft">
            <SiFigma className="skill-icon" />
            <p>Figma</p>
          </Col>
          {/* Agrega más columnas según tus habilidades */}
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;
