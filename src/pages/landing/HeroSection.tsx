import React from 'react'
import { Button, Col, Image, Row, Container} from 'react-bootstrap';

const HeroSection = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={8} md={6}>
        <h4>LOCATED IN CLUJ-NAPOCA, ROMANIA</h4>
        <h1 className="color-secondary">
          hi, i'm dorletz. <br /> a <b className="highlight-primary">passionate</b> <br /> frontend developer
        </h1>

        <Button>Latest Works</Button>
        <Button>Contact Me</Button>
        </Col>
        <Col  lg={4} md={6}>
          <Image width="100%" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </Col>
      </Row>
    </Container>
  )
}

export default HeroSection;