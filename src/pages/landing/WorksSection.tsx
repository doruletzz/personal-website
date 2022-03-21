import React from 'react'
import { Card } from 'react-bootstrap';

const WorksSection = () => {
    const title = "Some Works Title";

    const text = "A very short summary of the work page including only the main ideas that should be covered.";

    return (
        <div align="center">
            <h4>SOME OF MY WORKS</h4>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default WorksSection;