import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks';
import { switchTheme } from '../../redux/theme/slice';

import styles from './NavBar.module.scss';

const NavBar = () => {

  const { isDark } = useAppSelector(state => state.theme);

  const dispatch = useAppDispatch();

  return (
    <div >
      <Navbar collapseOnSelect expand="lg" sticky="top">
        <Container fluid className={isDark ? styles.theme__dark : styles.theme__light}>
          <Navbar.Brand href="#home"><b className={styles.brand}>dor-</b></Navbar.Brand>
          <Navbar.Toggle>
            <FaBars className={styles.toggle} />
          </Navbar.Toggle>
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
              <Nav.Link className={styles.navlink} href="#resume">resume</Nav.Link>
              <Nav.Link className={styles.navlink} href="#works">works</Nav.Link>
              <Nav.Link className={styles.navlink} href="#blog">blog</Nav.Link>
              <Nav.Item className={styles.navlink} onClick={() => dispatch(switchTheme(!isDark))} style={{ cursor: "pointer" }}>
                {isDark ? <FaSun /> : <FaMoon />}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;