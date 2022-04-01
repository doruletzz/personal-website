import React from 'react'
import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import { useAppSelector } from '../../redux/app/hooks';

import styles from './ToolsSection.module.scss'

import { FaToolbox } from 'react-icons/fa';
import Header from '../../components/header/Header';

const ToolsSection = () => {
    const title = "Card Title";

    const text = "A very short summary of the work page including only the main ideas that should be covered.";

    const { isDark } = useAppSelector(state => state.theme);

    return (
        <section id="tools">

            <Container fluid className={isDark ? styles.theme__dark : styles.theme__light}  >
                <Row>
                    <Col lg={7} xs={{span: 12, order: 2}} >
                        <Row>
                            <Col lg={4} md={4}  >
                                <Card className={styles.card} >
                                    <Card.Body>
                                        <Card.Title className={styles.card_title}>{title}</Card.Title>
                                        <Card.Text className={styles.card_text}>{text}</Card.Text>
                                    </Card.Body>
                                    <Card.Img className={styles.card_img} src='https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
                                </Card>
                            </Col>
                            <Col lg={4} md={4} xs={6}>
                                <Card className={styles.card} >
                                    <Card.Body >
                                        <Card.Title className={styles.card_title}>{title}</Card.Title>
                                        <Card.Text className={styles.card_text}>{text}</Card.Text>
                                    </Card.Body>
                                    <Card.Img src='https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
                                </Card>
                            </Col>
                            <Col lg={4} md={4} xs={6}>
                                <Card className={styles.card} >
                                    <Card.Body >
                                        <Card.Title className={styles.card_title}>{title}</Card.Title>
                                        <Card.Text className={styles.card_text}>{text}</Card.Text>
                                    </Card.Body>
                                    <Card.Img src='https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
                                </Card>
                            </Col>
                        </Row>
                    </Col >

                    <Col lg={5} xs={{span: 12, order: 1 }} md={12} >
                        <div className={styles.header} >
                            <Header content={"TOOLS FOR THE JOB"} icon={<FaToolbox/>} sectionLink="#tools"/>
                        </div>
                        <h4 > </h4>
                        <h1 className={styles.heading}>Technologies that i use day to day</h1>
                        <h5 className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus sed integer pulvinar quam scelerisque. Arcu hendrerit ut aliquet lorem vitae sit. Ut ornare sed iaculis blandit nulla</h5>
                        <Button className={styles.btn_primary}>Hire me</Button>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default ToolsSection;