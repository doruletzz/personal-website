import React from 'react'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link } from 'react-router-dom';

const ToolsSection = () => {
    const title = "Card Title";

    const text = "A very short summary of the work page including only the main ideas that should be covered.";


    return (
        <Container fluid>
            <Row>
                <Col lg={6}>
                    <CardGroup>

                    <Card style={{ width: '18rem' }}>
                        <Card.Header>
                            <Card.Title>{title}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>{text}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Img src='https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'/>
                        </Card.Footer>
                    </Card>
                    
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>
                            <Card.Title>{title}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>{text}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Img src='https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'/>
                        </Card.Footer>
                    </Card>
                    
                    <Card style={{width: '18rem' }}>
                        <Card.Header>
                            <Card.Title>{title}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>{text}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Img src='https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'/>
                        </Card.Footer>
                    </Card>
                    </CardGroup>
                </Col>

                <Col>
                    <h4>TOOLS FOR THE JOB</h4>
                    <h1>Technologies that i use day to day</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus sed integer pulvinar quam scelerisque. Arcu hendrerit ut aliquet lorem vitae sit. Ut ornare sed iaculis blandit nulla</h5>
                    <div>View Resume</div>
                </Col>
            </Row>
        </Container>
    )
}

export default ToolsSection;