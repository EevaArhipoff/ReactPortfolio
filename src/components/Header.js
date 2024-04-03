import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import { BsGithub, BsLinkedin  } from "react-icons/bs";

function Header() {
    return (
      <Navbar expand="md" bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Eeva Arhipoff</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
            <Nav.Item>
              <Nav.Link href="https://www.linkedin.com/in/eeva-arhipoff" target="_blank"><BsLinkedin class="smallIcon"/>LinkedIn</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.github.com/EevaArhipoff" target="_blank"> <BsGithub class="smallIcon"/>GitHub</Nav.Link>
            </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Header;