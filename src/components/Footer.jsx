import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-midnight-950 border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden">
      {/* Glowing top separator in Electric Cyan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_15px_rgba(0,240,255,0.8)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col with Playfair Display for stylish name */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-midnight-950 text-sm font-playfair font-black shadow-glow-cyan-sm">
                H
              </span>
              <span className="font-playfair font-black text-2xl tracking-wider text-white">
                HARIKA<span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">.</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm font-inter text-slate-300 max-w-sm leading-relaxed font-normal">
              MCA scholar and Python developer focused on full stack development, machine learning and trustworthy AI.
            </p>

            <div className="text-xs font-roboto text-slate-400 font-medium">
              © {new Date().getFullYear()} G. Harika. All rights reserved.
            </div>
          </div>

          {/* Quick Links with Montserrat for section headings */}
          <div className="md:col-span-4 text-left font-montserrat">
            <div className="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-4">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Research', href: '#research' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-300 hover:text-cyan-300 transition-colors py-1 font-semibold"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={onOpenResume}
                className="text-left text-cyan-400 hover:text-cyan-300 underline font-bold py-1"
              >
                Resume PDF
              </button>
            </div>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between font-montserrat">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider text-cyan-400 font-bold">
                Connect
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-xl bg-midnight-900 border border-cyan-500/30 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 shadow-sm hover:shadow-glow-cyan-sm transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-xl bg-midnight-900 border border-cyan-500/30 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 shadow-sm hover:shadow-glow-cyan-sm transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-midnight-900 hover:bg-midnight-850 text-xs font-montserrat uppercase tracking-wider font-bold text-slate-300 hover:text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 shadow-sm hover:shadow-glow-cyan-sm transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-roboto gap-3">
          <div>
            Built with React, Vite & Tailwind CSS
          </div>
          <div className="text-cyan-400/80 font-medium">
            Midnight Blue + Electric Cyan (Dark Mode)
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
