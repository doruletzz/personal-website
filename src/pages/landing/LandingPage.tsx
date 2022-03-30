import React from 'react';
import SmoothScroll from '../../utils/SmoothScroll';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import HeroSection from './HeroSection';
import ToolsSection from './ToolsSection';
import WorksSection from './WorksSection';

const LandingPage = () => {
  return (
    <div>
      {/* <SmoothScroll> */}
        <HeroSection/>
        <WorksSection/>
        <ToolsSection/>
        <BlogSection/>
        {/* <ContactSection/> */}
      {/* </SmoothScroll> */}
    </div>
  )
}

export default LandingPage;