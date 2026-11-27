import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scrollspy calculation
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-midnight-950/85 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-2xl shadow-cyan-950/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Stylish Brand Logo in Playfair Display with Electric Cyan Glow */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-2.5 focus:outline-none"
            >
              <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-midnight-950 text-sm font-playfair font-black shadow-glow-cyan-sm group-hover:scale-105 transition-transform">
                H
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-300 animate-ping" />
              </span>
              <span className="font-playfair font-bold text-xl sm:text-2xl tracking-wider text-white">
                HARIKA<span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">.</span>
              </span>
            </a>

            {/* Desktop Navigation with Montserrat */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-midnight-900/80 border border-cyan-500/20 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner font-montserrat">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 uppercase tracking-wider ${
                      isActive
                        ? 'text-cyan-300 font-bold bg-cyan-500/15 border border-cyan-400/50 shadow-glow-cyan-sm'
                        : 'text-slate-300 hover:text-cyan-300 hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons: Resume in Electric Cyan */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenResume}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-montserrat font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-midnight-950 shadow-glow-cyan-md hover:shadow-glow-cyan-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="md:hidden p-2 rounded-xl bg-midnight-900 border border-cyan-500/30 text-slate-300 hover:text-cyan-400 hover:bg-midnight-850 transition-colors shadow-sm"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-midnight-950/98 backdrop-blur-2xl pt-20 px-6 pb-8 flex flex-col justify-between animate-fadeIn border-b border-cyan-500/30">
          <div className="space-y-2 mt-4 font-montserrat">
            <div className="text-xs uppercase tracking-wider text-cyan-400 font-montserrat font-bold mb-4 px-3">
              Navigation Menu
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-montserrat font-semibold transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 font-bold border border-cyan-400/40 shadow-glow-cyan-sm'
                      : 'text-slate-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-cyan-500/20 space-y-3 font-montserrat">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-midnight-950 font-bold uppercase tracking-wider shadow-glow-cyan-md"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
            <div className="text-center text-xs text-slate-400 font-roboto">
              G. Harika • Bengaluru, India
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
