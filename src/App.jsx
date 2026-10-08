import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { FocusSection } from './sections/FocusSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { profileData } from './data/profileData';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const githubUrl = profileData.contact.github;

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'focus', 'projects', 'contact'];

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
    <div className="min-h-screen bg-[#0b0c0e] text-[#e1e4ea] relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Navbar */}
      <Navbar activeSection={activeSection} githubUrl={githubUrl} />

      {/* Main Sections */}
      <main>
        <HeroSection githubUrl={githubUrl} />
        <AboutSection />
        <SkillsSection />
        <FocusSection />
        <ProjectsSection />
        <ContactSection githubUrl={githubUrl} />
      </main>

      {/* Footer */}
      <Footer githubUrl={githubUrl} />

      {/* Floating Scroll To Top */}
      <ScrollToTop />
    </div>
  );
}

export default App;
