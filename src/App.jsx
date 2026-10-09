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
      {/* Soft blurred background behind the hero card */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[1000px] overflow-hidden bg-gradient-to-br from-[#7D855A]/60 via-[#E7CDB5]/85 to-[#C98B61]/60">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#68764A]/70 blur-[100px]" />
        <div className="absolute top-8 left-[23%] h-80 w-80 rounded-full bg-[#E7CDB5]/85 blur-[110px]" />
        <div className="absolute top-8 right-[7%] h-96 w-96 rounded-full bg-[#C98B61]/45 blur-[120px]" />
        <div className="absolute top-[390px] right-[22%] h-96 w-96 rounded-full bg-[#6B764B]/55 blur-[120px]" />
        <div className="absolute top-[570px] left-[35%] h-80 w-96 rounded-full bg-[#B77749]/60 blur-[115px]" />
        <div className="absolute top-[600px] -left-10 h-72 w-72 rounded-full bg-[#7D855A]/60 blur-[100px]" />
      </div>

      {/* Navbar Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Story Sections */}
      <main className="relative z-10">
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
