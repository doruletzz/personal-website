import { useEffect, useState } from 'react'

import NavBar from './components/navbar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.scss';


import { Container } from 'react-bootstrap'
import LandingPage from './pages/landing/LandingPage';
import { useAppSelector } from './redux/app/hooks';

function App() {

  const {isDark} = useAppSelector(state => state.theme);

  return (
    <div className={isDark ? styles.theme__dark : styles.theme__light}>
      <div className={styles.bg}>
        <Container >
          <NavBar />
          <LandingPage />
        </Container>
      </div>
    </div>
  )
}

export default App
