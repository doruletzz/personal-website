import React from 'react';
import { Container, Row, Col, Card, Button, Form, CardGroup} from 'react-bootstrap';


const ContactSection = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg={6} md={4}>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Full Name" />
                            <Form.Control type="email" placeholder="youremail@email.com" />
                            <Form.Control as="textarea" rows={3} placeholder="youremail@email.com" />
                        </Form.Group>
                        <Button type="submit">Send</Button>
                    </Form>
                </Col>
                <Col lg={6} md={6}>
                    <h4>GET IN TOUCH</h4>
                    <h1>Reach Out</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus sed integer pulvinar quam scelerisque. Arcu hendrerit ut aliquet lorem vitae sit. Ut ornare sed iaculis blandit nulla. Habitant maecenas maecenas arcu auctor fermentum egestas urna.</h5>


                    <CardGroup>
                        <Card>
                            <Card.Body>
                                <Card.Img src="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
                            </Card.Body>
                        </Card>
                        <Card >
                            <Card.Body>
                                <Card.Img src="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
                            </Card.Body>
                        </Card>
                        <Card >
                            <Card.Body>
                                <Card.Img src="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
                            </Card.Body>
                        </Card>
                        <Card >
                            <Card.Body>
                                <Card.Img src="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
                            </Card.Body>
                        </Card>
                    </CardGroup>

                </Col>
            </Row>
        </Container>
    )
}

export default ContactSection;