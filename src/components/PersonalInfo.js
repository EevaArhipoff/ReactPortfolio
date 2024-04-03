import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import MyPicture from '../assets/images/myself.jpg'


const PersonalInfo =() => {
    return (
        <Container style={{ width: '95%' }} id="containerAboutMe">
            <Row>
                <Image md={3}src={MyPicture} id="profilePic"></Image>
                <Col md={7} id="shortDescriptionOfMe">
                    <p>Hooked up on coding. That is why these days I can be found studying Business Information Technology in Häme University of Applied Sciences. As I write this, last month of second year studies is ongoing. Scrolling down this site you can find some more information of me and what I have been coding.</p>  
                </Col>   
            </Row>
        </Container>
    );
    
};

export default PersonalInfo;