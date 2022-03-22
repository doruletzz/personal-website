import React from 'react'
import { Button, Col, Image, Row, Container } from 'react-bootstrap';
import { FaAddressBook, FaLocationArrow, FaMapPin, FaSearchLocation } from 'react-icons/fa';
import { useAppSelector } from '../../redux/app/hooks';

import styles from './HeroSection.module.scss'

const HeroSection = () => {
  const { isDark } = useAppSelector(state => state.theme);

  return (
    <section>
      <Container fluid className={isDark ? styles.theme__dark : styles.theme__light}>
        <Row>
          <Col lg={8} md={6}>
            <h4 className={styles.header}><FaMapPin /> LOCATED IN CLUJ-NAPOCA, ROMANIA</h4>
            <h1 className={styles.heading}>
              hi, i'm dorletz. <br /> a <b className={styles.highlighted}>passionate</b> <br /> frontend developer
            </h1>

            <Button className={styles.btn_primary}>Latest Works</Button>
            <Button className={styles.btn_primary}>Contact Me</Button>
          </Col>
          <Col lg={4} md={6}>
            <Image width="100%" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection;