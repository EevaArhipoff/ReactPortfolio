import React from 'react';
import MyProjects from '../assets/projects.json';
import {Card, Row, Col, Container} from 'react-bootstrap';

const Projects =() => {
  return (
    <Container>
      <h2>My Projects</h2>
      <Row className="g-4">

        {MyProjects.map(project => (
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title class="h3">{project.project}</Card.Title>
              <Card.Img variant="top" id="cardImage" src={project.img} />
              <Card.Text>{project.shortDescription}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        ))}

      </Row>
    </Container>
  );
};

export default Projects;
