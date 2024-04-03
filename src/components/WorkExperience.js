import React from 'react';
import {Card, Row, Col, Container} from 'react-bootstrap';
import Works from '../assets/work.json';

const WorkExperience =() => {
    return (
      <Container>
        <h2>Work History</h2>
        <Row className="g-4">
   
          {Works.map(work => (
          <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title class="h3">{work.company}</Card.Title>
              <Card.Img src={work.img} id="cardImage"/>
              <Card.Subtitle class="h4">{work.role}</Card.Subtitle>
              <Card.Text>{work.description}</Card.Text>
            </Card.Body>
            <Card.Footer>{work.time}</Card.Footer>
          </Card>
          </Col>
          ))}
          
        </Row>
      </Container>
      );
};

export default WorkExperience;