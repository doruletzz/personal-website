import React from 'react'
import { Button, Col, Image, Row, Container } from 'react-bootstrap';
import { FaAddressBook, FaHouseUser, FaLaptopHouse, FaLocationArrow, FaMapPin, FaSearchLocation } from 'react-icons/fa';
import { useAppSelector } from '../../redux/app/hooks';

import heroIllustration from '../../assets/hero-illustration.png'

import styles from './HeroSection.module.scss'
import Header from '../../components/header/Header';

const HeroSection = () => {
  const { isDark } = useAppSelector(state => state.theme);

  return (
    <section id="hero">
      <Container fluid className={isDark ? styles.theme__dark : styles.theme__light}>
        <Row>
          <Col lg={7} md={6} className={styles.content}>
            <div className={styles.header} >
              <Header content={"LOCATED IN CLUJ-NAPOCA, ROMANIA"} icon={<FaHouseUser />} sectionLink="#hero" />
            </div>
            <h1 className={styles.heading}>
              hi, i'm dorletz. <br /> a <b className={styles.highlighted}>passionate</b>  frontend developer
            </h1>

            <Button className={styles.btn_primary}>Latest Works</Button>
            <Button className={styles.btn_secundary}>Contact Me</Button>
          </Col>
          <Col lg={5} md={6}  >
            <Image width="75%" className={styles.hero_image} src={heroIllustration} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection;