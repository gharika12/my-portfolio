import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Linkedin, 
  Github, 
  Mail, 
  Terminal, 
  MapPin, 
  ChevronDown 
} from 'lucide-react';
import profilePhoto from '../assets/harika-profile.jpg';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ onOpenResume, onOpenTerminal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        setFade(true);
      }, 350);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Midnight Blue radial glow with Electric Cyan aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Brand & Details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Status Pill Badge with Glowing Cyan Border */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-900/90 border border-cyan-500/40 text-xs sm:text-sm font-roboto font-medium text-slate-200 shadow-glow-cyan-sm mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-cyan-300 font-semibold font-roboto">MCA Student | Aspiring IT Professional</span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-300 font-roboto">
                <MapPin className="w-3 h-3 text-cyan-400" />
                Bengaluru, India
              </span>
            </div>

            {/* Main Editorial Heading: Poppins + Playfair Display for stylish name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-poppins font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              Hello, I'm <br className="hidden sm:inline" />
              <span className="font-playfair italic font-extrabold text-gradient-stylish inline-block text-5xl sm:text-7xl lg:text-8xl pr-2 drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                Harika.
              </span>
            </h1>

            {/* Supporting Headline with Electric Cyan glow */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-semibold tracking-tight text-slate-100 mb-4">
              Learning Today. Building Tomorrow.{' '}
              <span className="text-cyan-400 font-bold drop-shadow-[0_0_12px_rgba(0,240,255,0.5)]">
                Exploring AI Possibilities.
              </span>
            </h2>

            {/* Dynamic Role Cycling Switcher */}
            <div className="flex items-center gap-3 text-base sm:text-xl font-roboto text-slate-200 mb-6 py-1 px-3.5 rounded-lg bg-midnight-900/80 border border-cyan-500/30 backdrop-blur-sm shadow-inner">
              <span className="text-cyan-400 font-bold">&gt;</span>
              <span className="text-slate-400 text-sm sm:text-base font-roboto">Focus:</span>
              <span
                className={`text-cyan-300 font-bold font-roboto transition-all duration-300 transform drop-shadow-[0_0_8px_rgba(0,240,255,0.4)] ${
                  fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
              >
                {personalInfo.roles[roleIndex]}
              </span>
            </div>

            {/* Professional Summary from Resume with Inter font */}
            <p className="text-base sm:text-lg font-inter text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              {personalInfo.summary}
            </p>

            {/* CTA Action Buttons with Glowing Borders & Electric Cyan */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto font-montserrat">
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-midnight-950 font-bold uppercase tracking-wider text-xs shadow-glow-cyan-md hover:shadow-glow-cyan-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-midnight-900/90 hover:bg-midnight-850 text-white border border-cyan-500/30 hover:border-cyan-400 font-bold uppercase tracking-wider text-xs shadow-sm hover:shadow-glow-cyan-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  title="Open Interactive Terminal"
                  className="hidden xl:inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-midnight-900/60 hover:bg-midnight-850 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 text-xs font-roboto font-semibold transition-all shadow-sm"
                >
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Launch CLI</span>
                </button>
              )}
            </div>

            {/* Social Connectivity Icons with glowing hover */}
            <div className="flex items-center gap-4 text-slate-400 border-t border-white/10 pt-6 w-full max-w-md font-roboto">
              <span className="text-xs uppercase font-montserrat font-bold tracking-widest text-slate-500">Connect</span>
              
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Harika on LinkedIn"
                className="p-2.5 rounded-lg bg-midnight-900/90 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 hover:shadow-glow-cyan-sm hover:-translate-y-1 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Harika on GitHub"
                className="p-2.5 rounded-lg bg-midnight-900/90 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 hover:shadow-glow-cyan-sm hover:-translate-y-1 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Harika"
                className="p-2.5 rounded-lg bg-midnight-900/90 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 hover:shadow-glow-cyan-sm hover:-translate-y-1 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>

              <div className="ml-auto text-xs font-roboto text-slate-400 font-medium">
                <span className="text-cyan-400 font-bold drop-shadow-[0_0_6px_rgba(0,240,255,0.8)]">●</span> Open for Opportunities
              </div>
            </div>

          </div>

          {/* Right Column: Professional Profile Photo with Subtle Cyan Glow */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Cyan Aura behind Portrait */}
            <div className="absolute w-[80%] h-[80%] bg-cyan-400/15 rounded-3xl blur-2xl pointer-events-none -z-10" />

            {/* Slightly Rounded Portrait Container with Subtle Cyan-Blue Glowing Border */}
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px] aspect-[4/5] rounded-3xl p-1.5 sm:p-2 bg-gradient-to-b from-cyan-400/45 via-cyan-500/20 to-midnight-900/90 border border-cyan-400/40 shadow-[0_0_35px_rgba(0,240,255,0.22)] backdrop-blur-xl group transition-all duration-300 hover:shadow-[0_0_45px_rgba(0,240,255,0.35)] hover:border-cyan-400/60">
              
              {/* Inner Image Frame */}
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-midnight-950 border border-cyan-500/25">
                <img
                  src={profilePhoto}
                  alt="Harika - Professional Profile"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.02] transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="eager"
                />
                
                {/* Subtle dark gradient overlay at base for elegant visual blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Tech Badges with Glowing Cyan Borders */}
            <div className="absolute -top-3 right-2 sm:-top-5 sm:right-0 px-3.5 py-1.5 rounded-xl bg-midnight-900/95 border border-cyan-400/50 shadow-glow-cyan-sm text-xs font-roboto text-white font-semibold flex items-center gap-2 backdrop-blur-md animate-float-slow z-10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.9)]" />
              <span>Python 3.12</span>
            </div>

            <div className="absolute -bottom-3 -left-2 sm:bottom-4 sm:-left-6 px-3.5 py-1.5 rounded-xl bg-midnight-900/95 border border-cyan-400/50 shadow-glow-cyan-sm text-xs font-roboto text-white font-semibold flex items-center gap-2 backdrop-blur-md animate-float-slow [animation-delay:2s] z-10">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
              <span>Flask & Machine Learning</span>
            </div>

            <div className="hidden sm:flex absolute top-1/2 -right-6 px-3.5 py-1.5 rounded-xl bg-midnight-900/95 border border-cyan-400/40 shadow-glow-cyan-sm text-xs font-roboto text-white font-semibold items-center gap-2 backdrop-blur-md animate-float-slow [animation-delay:4s] z-10">
              <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(0,240,255,0.9)]" />
              <span>LangChain & AI</span>
            </div>

          </div>

        </div>

        {/* Highlight Stats Bar with Glowing Cyan Borders & Roboto numbers */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-midnight-900/80 border border-cyan-500/25 backdrop-blur-md shadow-card-midnight">
          {personalInfo.stats.map((stat, i) => (
            <div key={i} className="flex flex-col p-3 rounded-xl bg-midnight-950/60 border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-glow-cyan-sm transition-all">
              <div className="text-2xl sm:text-3xl font-roboto font-black text-cyan-300 drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-montserrat font-bold text-white uppercase tracking-wider mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 font-roboto mt-1 font-medium">
                {stat.highlight}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 text-xs font-montserrat font-semibold tracking-wider transition-colors"
      >
        <span>SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </a>
    </section>
  );
};

export default Hero;
