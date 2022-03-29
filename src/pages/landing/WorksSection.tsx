import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useAppSelector } from '../../redux/app/hooks';

import styles from './WorksSection.module.scss';

const WorksSection = () => {
    const { isDark } = useAppSelector(state => state.theme)

    const title = "Some Works Title";

    const text = "A very short summary of the work page including only the main ideas that should be covered.";

    return (
        <section id="works" className={isDark ? styles.theme__dark : styles.theme__light}>
            <Container fluid className={styles.container}>
                <Row>

                    <Row>
                        <h4 className={styles.header}>SOME OF MY WORKS</h4>
                    </Row>
                    <Row>
                        <Col lg={12} md={6}>
                            <Card className={styles.card}>
                                <Card.Img variant="top" className={styles.img} src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                                <Card.Body>
                                    <Card.Title className={styles.title}>{title}</Card.Title>
                                    <Card.Text className={styles.text}>{text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={12} md={6}>
                            <Card className={styles.card}>
                                <Card.Img variant="top" className={styles.img} src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                                <Card.Body>
                                    <Card.Title className={styles.title}>{title}</Card.Title>
                                    <Card.Text className={styles.text}>{text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>
                </Row>
            </Container>
        </section>
    )
}

export default WorksSection;