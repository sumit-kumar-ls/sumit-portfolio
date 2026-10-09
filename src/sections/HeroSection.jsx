import React from 'react';
import { ArrowUpRight, Sparkles, Mail, Code2, Database, BookOpen, Globe } from 'lucide-react';
import { Character3D } from '../components/Character3D';
import { profileData } from '../data/profileData';

export const HeroSection = ({ githubUrl }) => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative mx-3 sm:mx-6 lg:mx-12 mt-20 mb-6 min-h-[calc(92vh-4rem)] flex items-center justify-center pt-20 pb-16 overflow-hidden rounded-[32px] border border-[#E6DFC7]/80 bg-[#FCFBF7] shadow-warm-md">
      {/* Background Soft Organic Glow Blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#F6D7C9]/50 via-[#F7EBDD]/65 to-[#C86D51]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: Editorial Typography & CTAs */}
        <div className="lg:col-span-6 z-10 text-center lg:text-left space-y-6">
          {/* Greeting Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#E2DAA8] text-xs font-mono font-medium text-[#4A5D2E] shadow-warm-sm backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C86D51]" />
            <span>HELLO, I'M SUMIT</span>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-[#1A1918] tracking-tight leading-[1.08]">
            Building my way <br className="hidden sm:block" />
            <span className="font-serif italic font-normal text-[#4A5D2E]">into software.</span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-base sm:text-lg text-[#5A5750] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            I'm a 1st-year BCA student exploring backend development, databases, and web technologies—one practical project at a time.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#2C2B29] hover:bg-[#4A5D2E] text-white font-medium text-sm transition-all duration-300 shadow-warm-md hover:shadow-warm-lg group hover:-translate-y-0.5"
            >
              <span>Explore My Work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#C86D51] hover:bg-[#B95D43] border border-[#C86D51] text-white font-medium text-sm transition-all duration-300 shadow-warm-md hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Verified Capabilities Row */}
          <div className="pt-8 border-t border-[#E8E2D5] grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-left">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A857B]">Education</div>
              <div className="text-sm font-semibold text-[#1A1918]">1st Year BCA</div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A857B]">Focus</div>
              <div className="text-sm font-semibold text-[#4A5D2E]">Backend Dev</div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A857B]">Languages</div>
              <div className="text-sm font-semibold text-[#1A1918]">Java & Python</div>
            </div>
          </div>
        </div>

        {/* RIGHT / CENTER COLUMN: 3D Boy Character Centerpiece & Floating Elements */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[480px] sm:min-h-[540px]">
          
          {/* Central 3D Boy Character */}
          <div className="relative z-10 w-full">
            <Character3D />
          </div>

          {/* FLOATING CARD 1: Top Left - 1st Year BCA */}
          <div className="absolute top-6 left-2 sm:left-6 z-20 p-3.5 rounded-2xl bg-white/95 border border-[#E6DFC7] shadow-warm-md backdrop-blur-md animate-float-slow hidden sm:flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F4F0E8] flex items-center justify-center text-[#4A5D2E] font-bold text-xs">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-[#8A857B]">Degree</div>
              <div className="text-xs font-semibold text-[#1A1918]">1st Year BCA Student</div>
            </div>
          </div>

          {/* FLOATING CARD 2: Top Right - Java & Python */}
          <div className="absolute top-12 right-2 sm:right-4 z-20 p-3.5 rounded-2xl bg-white/95 border border-[#E6DFC7] shadow-warm-md backdrop-blur-md animate-float-slight hidden sm:flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F4F0E8] flex items-center justify-center text-[#C86D51] font-bold text-xs">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-[#8A857B]">Core Languages</div>
              <div className="text-xs font-semibold text-[#1A1918]">Java & Python</div>
            </div>
          </div>

          {/* FLOATING CARD 3: Bottom Left - C (Learning) */}
          <div className="absolute bottom-14 left-0 sm:left-4 z-20 p-3.5 rounded-2xl bg-white/95 border border-[#E6DFC7] shadow-warm-md backdrop-blur-md animate-float-slight hidden sm:flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#4A5D2E]/10 flex items-center justify-center text-[#4A5D2E] font-bold text-xs">
              C
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-[#4A5D2E]">Current Target</div>
              <div className="text-xs font-semibold text-[#1A1918]">C — Learning</div>
            </div>
          </div>

          {/* FLOATING CARD 4: Bottom Right - SQL Databases */}
          <div className="absolute bottom-8 right-2 sm:right-6 z-20 p-3.5 rounded-2xl bg-white/95 border border-[#E6DFC7] shadow-warm-md backdrop-blur-md animate-float-slow hidden sm:flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F4F0E8] flex items-center justify-center text-[#4A5D2E] font-bold text-xs">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-[#8A857B]">Database</div>
              <div className="text-xs font-semibold text-[#1A1918]">SQL Querying</div>
            </div>
          </div>

          {/* FLOATING CARD 5: Mid Right - Web Development */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-2 z-20 p-3 rounded-xl bg-white/95 border border-[#E6DFC7] shadow-warm-md backdrop-blur-md hidden md:flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#EAE3D2] flex items-center justify-center text-[#2C2B29]">
              <Globe className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-[#1A1918] pr-1">Web Development</span>
          </div>
        </div>
      </div>
    </section>
  );
};
