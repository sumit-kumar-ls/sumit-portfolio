import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F3]/90 backdrop-blur-md border-b border-[#E6DFC7] py-4 shadow-warm-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Name Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="group flex items-center gap-3 font-heading font-bold text-lg sm:text-xl tracking-tight text-[#1A1918] hover:text-[#4A5D2E] transition-colors"
        >
          <span className="w-8 h-8 rounded-full bg-[#EAE3D2] border border-[#D5CBAE] flex items-center justify-center text-xs font-semibold text-[#4A5D2E] group-hover:bg-[#4A5D2E] group-hover:text-white transition-all">
            SK
          </span>
          <span className="tracking-wide">SUMIT KUMAR</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[#4A4741]">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative py-1 transition-colors hover:text-[#1A1918] ${
                  isActive ? 'text-[#4A5D2E] font-semibold' : ''
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4A5D2E] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side Status */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2DAA8] text-xs font-medium text-[#2C2B29] hover:border-[#4A5D2E] shadow-warm-sm transition-all hover:-translate-y-0.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#4A5D2E] animate-pulse" />
            <span>Available to connect</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white border border-[#E2DAA8] text-[#2C2B29] hover:bg-[#F4F0E8] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F3] border-b border-[#E6DFC7] px-6 py-6 space-y-4 shadow-warm-md animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`block py-2 text-base font-medium transition-colors ${
                  isActive ? 'text-[#4A5D2E] font-bold' : 'text-[#4A4741] hover:text-[#1A1918]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-4 border-t border-[#E8E2D5]">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#2C2B29] text-white text-sm font-semibold hover:bg-[#4A5D2E] transition-colors"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
