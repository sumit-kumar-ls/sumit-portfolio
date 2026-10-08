import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { JourneySection } from './sections/JourneySection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { profileData } from './data/profileData';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const githubUrl = profileData.contact.github;

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'journey', 'projects', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const sectionTop = sectionEl.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#2C2B29] relative selection:bg-[#EAE3D2] selection:text-[#1A1918]">
      {/* Navbar Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Story Sections */}
      <main>
        <HeroSection githubUrl={githubUrl} />
        <AboutSection />
        <SkillsSection />
        <JourneySection />
        <ProjectsSection />
        <ContactSection githubUrl={githubUrl} />
      </main>

      {/* Footer */}
      <Footer githubUrl={githubUrl} />

      {/* Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
