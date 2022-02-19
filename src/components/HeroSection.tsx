import React from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';

import './HeroSection.css';

const HeroSection = () => {
  return (
    <>
        <Container>
            <h2>Currently based in Cluj-Napoca, Romania</h2>
            <h1 className="heading">hi, i'm dorletz. <br/> a <b>passionate</b> <br/>fronted developer</h1>
            <Row>
                <Col md={2}>
                    <Button>Latest Work</Button>
                </Col>
                <Col>
                    <h2>Contact me</h2>
                </Col>
            </Row>
        </Container>
    
    </>
  )
}

export default HeroSection;