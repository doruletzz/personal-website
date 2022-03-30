import React, { useEffect, useState, FunctionComponent } from 'react';
import { Navbar, Container, Nav, Row, Image } from 'react-bootstrap';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks';
import { switchTheme } from '../../redux/theme/slice';
import Logo from '../logo/Logo';

import DarkIcon from '../../assets/theme-dark-icon.svg?component';
import LightIcon from '../../assets/theme-light-icon.svg?component';


import BlogIcon from '../../assets/blog-icon.svg?component'
import WorksIcon from '../../assets/works-icon.svg?component'
import ResumeIcon from '../../assets/resume-icon.svg?component'


import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // const DarkIcon = () => <svg className={styles.icon_theme_scrolled}><Image src={DarkUrl}/></svg>;
  // const LightIcon = () => <svg><Image src={DarkUrl}/></svg>;
  // const WorksIcon = () => <svg><Image src={DarkUrl}/></svg>;
  // const ResumeIcon = () => <svg><Image src={DarkUrl}/></svg>;
  // const BlogIcon = () => <svg><Image src={DarkUrl}/></svg>;


  const handleScroll = () => {
    setIsScrolled(window.scrollY > 240);
    console.log(isScrolled);

  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, [window.scrollY])


  const { isDark } = useAppSelector(state => state.theme);

  const dispatch = useAppDispatch();

  return (
    <>
      <Navbar className={`${styles.navbar} ${"sticky-top"}`} expand="lg" >
        <Container fluid className={isDark ? styles.theme__dark : styles.theme__light}>

          <Navbar.Brand className="brand" >
            <Link to="/" onClick={() => window.scrollTo({top: 0})}>
              <Logo isSmall={isScrolled} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle>
            <FaBars className={styles.toggle} />
          </Navbar.Toggle>
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
              <Nav.Link className={styles.navlink} href="#tools">
                {isScrolled ? <ResumeIcon  className={styles.icon_theme_scrolled}/> : <p>resume</p>}
              </Nav.Link>
              <Nav.Link className={styles.navlink} href="#works">
                {isScrolled ? <WorksIcon  className={styles.icon_theme_scrolled}/> : <p>works</p>}
              </Nav.Link>
              <Nav.Link className={styles.navlink} href="#blog">
                {isScrolled ? <BlogIcon  className={styles.icon_theme_scrolled}/> : <p>blog</p>}
              </Nav.Link>
              <Nav.Link className={styles.navlink} onClick={() => dispatch(switchTheme(!isDark))} style={{ cursor: "pointer" }}>
                {isDark ? <DarkIcon className={styles.icon_theme_scrolled} /> : <LightIcon  className={styles.icon_theme_scrolled}/>}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container >
      </Navbar>
    </>

  )
}

export default NavBar;