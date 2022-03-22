import { useEffect, useState } from 'react'

import BlogPosts from './components/BlogPosts';
import NavBar from './components/NavBar';
import { store } from './redux/app/store'
import { Provider } from 'react-redux';

import storage from 'local-storage-fallback';

import styles from './App.module.scss';

import { Container } from 'react-bootstrap'
import LandingPage from './pages/landing/LandingPage';

function App() {
  const getInitialTheme = () : boolean => {
    const savedTheme = storage.getItem("theme__dark");
    return savedTheme ? JSON.parse(savedTheme) : true;
  }

  const [isDark, setIsDark] = useState(getInitialTheme);


  useEffect(() => {
    storage.setItem("theme__dark", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <div className={isDark ? styles.theme__dark : styles.theme__light}>
      <Provider store={store}>
        <div className={styles.bg}>
          <Container >
            <NavBar isDark={isDark} setIsDark={setIsDark} />
            <LandingPage />
          </Container>
        </div>
      </Provider>
    </div>
  )
}

export default App
