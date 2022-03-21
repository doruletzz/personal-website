import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';

const NavBar = ({ isDark, setIsDark }) => {
  //TODO: set hook state using redux 

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home"><b>dor-</b></Navbar.Brand>
          <Navbar.Toggle>
            <FaBars />
          </Navbar.Toggle>
          <Navbar.Collapse className=" justify-content-end" id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#resume">resume</Nav.Link>
              <Nav.Link href="#works">works</Nav.Link>
              <Nav.Link href="#blog">blog</Nav.Link>
              <Nav.Item onClick={() => setIsDark(!isDark)} style={{ cursor: "pointer" }}>
                {isDark ? <FaSun /> : <FaMoon />}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;