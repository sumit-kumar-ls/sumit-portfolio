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
          ? 'bg-[#FAF8F3]/25 backdrop-blur-xl py-1'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center relative z-10">
{/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-7 rounded-full border border-[#E6DFC7] bg-white/85 px-4 lg:px-7 py-3 font-medium text-xs lg:text-sm text-[#4A4741] shadow-warm-sm backdrop-blur-md">
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

        {/* Name on the right side, outside the navigation pill */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="hidden md:inline-flex absolute right-0 -translate-y-1 items-center whitespace-nowrap text-base lg:text-lg font-heading font-semibold tracking-tight text-[#4A5D2E] transition-colors hover:text-[#1A1918]"
        >
          SUMIT KUMAR
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="absolute right-6 md:hidden p-2 rounded-xl bg-white border border-[#E2DAA8] text-[#2C2B29] hover:bg-[#F4F0E8] transition-colors"
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
