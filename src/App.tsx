import { useEffect, useState } from 'react'

import NavBar from './components/navbar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.scss';


import { Container, Row, Col } from 'react-bootstrap'
import LandingPage from './pages/landing/LandingPage';
import { useAppSelector } from './redux/app/hooks';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UnderConstructionPage from './pages/under-construction/UnderConstructionPage';
import SmoothScroll from './utils/SmoothScroll';

function App() {







  const { isDark } = useAppSelector(state => state.theme);

  return (

    <div className={isDark ? styles.theme__dark : styles.theme__light}>
      <Router>
        <div className={styles.bg}>
          <Container >
            <Row>
              <NavBar />
              <Routes >
                <Route path="/" element={<LandingPage />} />
                <Route path="/blog/:slug" element={<UnderConstructionPage />} />
              </Routes>
              <Footer />
            </Row>
          </Container>
        </div>
      </Router>
    </div>
  )
}

export default App
