import React from 'react';
import { ArrowUpRight, Mail, Terminal, Database, Code, Github } from 'lucide-react';
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
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle Background Radial Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-gray-300 mb-8 backdrop-blur-sm shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-xs text-gray-400">1st Year BCA Student</span>
          <span className="text-gray-600">•</span>
          <span className="text-indigo-300 font-medium">Backend & Software Aspirant</span>
        </div>

        {/* Main Name Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 font-sans">
          SUMIT KUMAR
        </h1>

        {/* Subtitle Roles */}
        <p className="text-base sm:text-xl font-mono text-indigo-400 max-w-2xl mx-auto mb-6 tracking-wide">
          Backend & Software Developer Aspirant
          <span className="text-gray-600 mx-2">|</span>
          <span className="text-gray-300 font-sans text-sm sm:text-base">Web Development Explorer</span>
        </p>

        {/* Short verified description */}
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Passionate learner exploring <strong className="text-gray-200 font-medium">Java, Python</strong>, and <strong className="text-gray-200 font-medium">SQL</strong>, while currently mastering the <strong className="text-indigo-300 font-medium">C programming language</strong>. Focused on building clean logic, working with databases, and developing toward software engineering.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, '#projects')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 group"
          >
            <span>View My Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-200 hover:text-white font-medium text-sm transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-gray-400" />
            <span>Contact Me</span>
          </a>

          {/* Conditional GitHub CTA */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-200 hover:text-white font-medium text-sm transition-all duration-200"
            >
              <Github className="w-4 h-4 text-gray-400" />
              <span>GitHub</span>
            </a>
          )}
        </div>

        {/* Mini Technical Capability Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-8 border-t border-white/5">
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-left">
            <div className="text-xs font-mono text-gray-500 mb-1">PROGRAMMING</div>
            <div className="text-sm font-medium text-gray-200">Java & Python</div>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-left">
            <div className="text-xs font-mono text-gray-500 mb-1">LEARNING TARGET</div>
            <div className="text-sm font-medium text-indigo-300">C Language</div>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-left">
            <div className="text-xs font-mono text-gray-500 mb-1">DATABASE</div>
            <div className="text-sm font-medium text-gray-200">SQL</div>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-left">
            <div className="text-xs font-mono text-gray-500 mb-1">EXPLORATION</div>
            <div className="text-sm font-medium text-gray-200">Web Development</div>
          </div>
        </div>
      </div>
    </section>
  );
};
