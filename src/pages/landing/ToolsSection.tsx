import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import { useAppSelector } from '../../redux/app/hooks';

import styles from './ToolsSection.module.scss'

import { FaToolbox } from 'react-icons/fa';
import Header from '../../components/header/Header';

const ToolsSection = () => {

    const title = "Card Title";

    const frontendTitle = "Frontend";
    const backendTitle = "Backend";
    const otherTitle = "Other";

    const frontendSkills = "React, Typescript, Html, Css, Sass, Javascript, Jest, Junit,  Bootstrap, Axios";
    const frontendSkillsMobile = "React, Typescript, Html ...";

    const backendSkills = "Java, Python, Node.js, Flask, Hibernate, MySql, SQLite"

    const otherSkills = "Linux, Github, Figma, Adobe CS, Framer Motion, VSCode"

    const text = "A very short summary of the work page including only the main ideas that should be covered.";

    const { isDark } = useAppSelector(state => state.theme);

    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    return (
        <section id="tools">
            <Container fluid className={isDark ? styles.theme__dark : styles.theme__light}  >
                <Row>
                    <Col lg={7} xs={{ span: 12, order: isMobile ? 2 : 1 }} >
                        <Row>
                            <Col lg={4} md={6} xs={12} >
                                <Card className={styles.card} >
                                    <Card.Body>
                                        <Card.Title className={styles.card_title}>{frontendTitle}</Card.Title>
                                        <Card.Text className={styles.card_text}>{isMobile ? frontendSkillsMobile : frontendSkills}</Card.Text>
                                    </Card.Body>
                                    <Card.Img className={styles.card_icon} src={isDark ? 'src/assets/front-end-illustration-dark.png' : 'src/assets/front-end-illustration.png'} />
                                </Card>
                            </Col>
                            <Col lg={4} md={6} xs={12}>
                                <Card className={styles.card} >
                                    <Card.Body >
                                        <Card.Title className={styles.card_title}>{backendTitle}</Card.Title>
                                        <Card.Text className={styles.card_text}>{backendSkills}</Card.Text>
                                    </Card.Body>
                                    <Card.Img className={styles.card_icon}  src={isDark ? 'src/assets/back-end-illustration-dark.png' : 'src/assets/back-end-illustration.png'} />
                                </Card>
                            </Col>
                            <Col lg={4} md={6} xs={12}>
                                <Card className={styles.card} >
                                    <Card.Body >
                                        <Card.Title className={styles.card_title}>{otherTitle}</Card.Title>
                                        <Card.Text className={styles.card_text}>{otherSkills}</Card.Text>
                                    </Card.Body>
                                    <Card.Img className={styles.card_icon} src={isDark ? 'src/assets/other-illustration-dark.png' : 'src/assets/other-illustration.png'} />
                                </Card>
                            </Col>
                        </Row>
                    </Col >

                    <Col lg={5} xs={{ span: 12, order: isMobile ? 1 : 2 }} md={8} >
                        <div className={styles.header} >
                            <Header content={"TOOLS FOR THE JOB"} icon={<FaToolbox />} sectionLink="#tools" />
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