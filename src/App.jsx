import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience';
import InteractiveTerminal from './components/InteractiveTerminal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import BackgroundParticles from './components/BackgroundParticles';
import { CheckCircle2 } from 'lucide-react';

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleOpenTerminal = () => {
    const el = document.getElementById('terminal-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-inter relative selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Background Interactive Star Constellation Particles in Electric Cyan */}
      <BackgroundParticles />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={handleOpenTerminal}
        />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <InteractiveTerminal />
        <Contact showToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Toast Notification Popup with Glowing Cyan Border */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-midnight-900 border border-cyan-400/40 text-white text-xs sm:text-sm font-roboto shadow-glow-cyan-sm backdrop-blur-xl animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
