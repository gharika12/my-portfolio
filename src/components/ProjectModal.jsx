import React, { useEffect } from 'react';
import { X, Github, CheckCircle, Cpu, Zap, Layers } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Dialog Card with Glowing Cyan Border */}
      <div 
        className="relative w-full max-w-3xl my-8 rounded-3xl bg-midnight-950 border border-cyan-500/40 p-6 sm:p-8 shadow-card-glow text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow corner in Cyan */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-midnight-900 border border-cyan-500/30 text-slate-300 hover:text-white hover:bg-midnight-850 transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Pill with Roboto */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-xs font-roboto text-cyan-300 font-semibold mb-4 shadow-glow-cyan-sm">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>{project.categoryLabel}</span>
        </div>

        {/* Title with Poppins */}
        <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-white mb-2 pr-10">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base font-roboto text-cyan-300 font-semibold mb-6">
          {project.tagline}
        </p>

        {/* Architecture Overview */}
        <div className="mb-6">
          <h4 className="text-sm font-montserrat font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            System Architecture & Deep Dive
          </h4>
          <p className="text-sm sm:text-base font-inter text-slate-300 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {/* Deliverables */}
        <div className="mb-6">
          <h4 className="text-sm font-montserrat font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            Key Technical Implementations
          </h4>
          <div className="space-y-2.5">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-inter text-slate-200 font-normal">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills with Roboto */}
        <div className="mb-8">
          <div className="text-xs font-montserrat uppercase tracking-wider text-slate-400 font-bold mb-2.5">
            Technologies & Frameworks
          </div>
          <div className="flex flex-wrap gap-2 font-roboto">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-midnight-900 border border-cyan-500/25 text-xs font-roboto text-cyan-300 font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 font-montserrat">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-midnight-950 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-glow-cyan-md hover:shadow-glow-cyan-lg transition-all hover:scale-[1.02]"
          >
            <Github className="w-4 h-4 text-midnight-950" />
            <span>GitHub Repository</span>
          </a>

          <button
            onClick={onClose}
            className="ml-auto px-4 py-2 text-xs font-montserrat uppercase tracking-wider font-semibold text-slate-400 hover:text-white"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
