import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';

import './NavBar.css'

const NavBar = () => {
  return (
    <div>
        <Navbar>
            <Container>
                
            <Navbar.Brand >dor-</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
            
                <Nav className="ml-auto">
                    <Nav.Link>about</Nav.Link>
                    <Nav.Link>works</Nav.Link>
                    <Nav.Link>blog</Nav.Link>
                    <Nav.Link>dark</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </div>
  )
}

export default NavBar;