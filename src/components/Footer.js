import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";


function Footer() {
  return (
    <>
      <Nav className="justify-content-center footer" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="https://www.linkedin.com/in/eeva-arhipoff" target="_blank"><BsLinkedin class="smallIcon"/>LinkedIn</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.github.com/EevaArhipoff" target="_blank"> <BsGithub class="smallIcon"/>GitHub</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Footer;