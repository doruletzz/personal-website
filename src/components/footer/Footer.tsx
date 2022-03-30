import React from 'react'
import { useAppSelector } from '../../redux/app/hooks';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './Footer.module.scss';
import { FaAward, FaBlog, FaGithub, FaLinkedin, FaMailBulk, FaMailchimp, FaTwitter } from 'react-icons/fa';
import Logo from '../logo/Logo';

const Footer = () => {
  const { isDark } = useAppSelector(state => state.theme);

  return (
    <>
    <div className={isDark ? styles.theme__dark : styles.theme__light}>

      <div className={styles.background}>
    </div>
      <Container fluid className={`${styles.footer} ${"sticky-bottom"}`}>
        <Row>
          <Col>
            <div className={styles.logo}>
              <Logo isSmall={true} />
            </div>
          </Col>
          <Col>
            <p className={styles.copyright}>
              done by me with ❤︎ and coffee
            </p>
          </Col>


        </Row>
      </Container>
      </div>
    </>
  )
}

export default Footer;