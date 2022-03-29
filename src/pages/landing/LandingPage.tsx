import React from 'react';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import HeroSection from './HeroSection';
import ToolsSection from './ToolsSection';
import WorksSection from './WorksSection';

const LandingPage = () => {
  return (
    <div>
        <HeroSection/>
        <WorksSection/>
        <ToolsSection/>
        <BlogSection/>
        {/* <ContactSection/> */}
    </div>
  )
}

export default LandingPage;