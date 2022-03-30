import React, {useState, useEffect} from 'react'
import { Button, Col, Image, Row, Container } from 'react-bootstrap';
import { FaAddressBook, FaHouseUser, FaLaptopHouse, FaLocationArrow, FaMapPin, FaSearchLocation } from 'react-icons/fa';
import { useAppSelector } from '../../redux/app/hooks';

import heroIllustration from '../../assets/hero-illustration.png'

import styles from './HeroSection.module.scss'
import Header from '../../components/header/Header';
import HeroIllustration from '../../components/hero/HeroIllustration';

const HeroSection = () => {
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

  const { isDark } = useAppSelector(state => state.theme);

  return (
    <section id="hero">
      <Container fluid className={isDark ? styles.theme__dark : styles.theme__light}>
        <Row className="align-items-center">
          <Col lg={7} md={8} sm={12} className={isMobile ? styles.mobile_content : styles.content}>
            <div className={styles.header} >
              <Header content={"LOCATED IN CLUJ-NAPOCA, ROMANIA"} icon={<FaHouseUser />} sectionLink="#hero" />
            </div>
            <h1 className={styles.heading}>
              hi, i'm dorletz. {!isMobile && <br />} a <b className={styles.highlighted}>passionate</b>  frontend developer
            </h1>

            <Button className={styles.btn_primary}>Latest Works</Button>
            <Button className={styles.btn_secundary}>Contact Me</Button>
          </Col>
          <Col lg={5} md={4} sm={12}  >
            <div >

            <HeroIllustration width={isMobile ? "100%" : "66%"} className={styles.hero_image} />
            </div>
            {/* <Image className={styles.hero_image} src={heroIllustration} /> */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection;