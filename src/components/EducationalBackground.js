import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import myEducation from '../assets/education.json';

const educationalBackground =() => {
    return (
        <Container>
            <h2>Education</h2>
            <Row className="g-4">
            
                {myEducation.map(study => (
                <Col md={4}>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title class="h3">{study.school}</Card.Title>
                        <Card.Img id="cardImage" src={study.img} />
                        <Card.Text class="h4">{study.studies}</Card.Text>
                    </Card.Body>
                    <Card.Footer>{study.years}</Card.Footer>
                </Card>
                </Col>
                ))}

            </Row>
        </Container> 
    );
};

export default educationalBackground;