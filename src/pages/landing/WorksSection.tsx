import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaBook, FaBookDead, FaBookOpen } from 'react-icons/fa';
import Header from '../../components/header/Header';
import { useAppSelector } from '../../redux/app/hooks';

import styles from './WorksSection.module.scss';

const WorksSection = () => {
    const { isDark } = useAppSelector(state => state.theme)

    const title = "Project Title";

    const text = "Website is still under construction... here will be a short summary about the project and a link to it";

    return (
        <section id="works" className={isDark ? styles.theme__dark : styles.theme__light}>
            <Container fluid className={styles.container}>
                <Row>

                    <Row>
                        
                        <div className={styles.header} >
                            <Header content={"SOME OF MY WORKS"} icon={<FaBook/>} sectionLink="#works"/>
                        </div>
                        <h4 className={styles.header}></h4>
                    </Row>
                    <Row>
                        <Col lg={12} md={6}>
                            <Card className={styles.card}>
                                <Card.Img alt="work1" variant="top" className={styles.img} src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                                <Card.Body>
                                    <Card.Title className={styles.title}>{title}</Card.Title>
                                    <Card.Text className={styles.text}>{text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={12} md={6}>
                            <Card className={styles.card}>
                                <Card.Img alt="work2" variant="top" className={styles.img} src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
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