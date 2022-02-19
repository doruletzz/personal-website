import { useState } from 'react';

import BlogPosts from './components/BlogPosts';
import NavBar from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import HeroSection from './components/HeroSection';


function App() {

  return (
    <>
      <NavBar/>
      <HeroSection/>
      {/* <BlogPosts/> */}
    </>
  )
}

export default App
