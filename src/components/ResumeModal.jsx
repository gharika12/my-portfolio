import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Code2, 
  Briefcase 
} from 'lucide-react';
import { 
  personalInfo, 
  technicalSkills, 
  workExperience, 
  project, 
  researchPaper, 
  education, 
  softSkills, 
  languages, 
  certifications 
} from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Container with Glowing Cyan Border */}
      <div 
        className="relative w-full max-w-4xl my-6 rounded-3xl bg-midnight-950 border border-cyan-500/40 shadow-card-glow text-left overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar with Montserrat font */}
        <div className="px-6 py-4 bg-midnight-900/95 border-b border-cyan-500/20 flex items-center justify-between shrink-0 font-montserrat">
          <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-cyan-300">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.9)]" />
            <span>Resume • G. Harika</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-midnight-900 border border-cyan-500/30 hover:border-cyan-400 text-slate-200 hover:text-white text-xs font-montserrat uppercase tracking-wider font-bold transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-midnight-950 text-xs font-montserrat uppercase tracking-wider font-bold shadow-glow-cyan-sm hover:scale-[1.02] transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close Resume"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-midnight-950 text-slate-200 space-y-7">
          
          {/* Header Section with Playfair Display for stylish name */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-playfair font-black text-white tracking-wide">
                G. HARIKA
              </h1>
              <div className="text-xs sm:text-sm font-roboto text-slate-300 mt-2 space-y-1">
                <div>Email: <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 hover:underline font-semibold font-roboto">{personalInfo.email}</a></div>
                <div>LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline font-semibold font-roboto">{personalInfo.linkedinUsername}</a> | GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline font-semibold font-roboto">{personalInfo.githubUsername}</a></div>
              </div>
            </div>
          </div>

          {/* Summary with Inter font */}
          <div>
            <h2 className="text-xs font-montserrat font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Summary
            </h2>
            <p className="text-xs sm:text-sm font-inter text-slate-300 leading-relaxed font-normal">
              {personalInfo.summary}
            </p>
          </div>

          {/* Technical Skills with Roboto font */}
          <div>
            <h2 className="text-xs font-montserrat font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              Technical Skills
            </h2>
            <div className="space-y-2 text-xs sm:text-sm font-roboto">
              {technicalSkills.map((cat, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                  <span className="font-semibold text-white sm:w-56 shrink-0">• {cat.category}:</span>
                  <span className="text-slate-300 font-medium">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-montserrat font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              Experience
            </h2>
            <div className="space-y-4">
              {workExperience.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-midnight-900/60 border border-white/5 space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-sm font-poppins font-bold text-white">
                      {exp.role} | {exp.company}
                    </h3>
                    <span className="text-xs font-roboto font-bold text-cyan-300">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs font-inter text-slate-300 font-normal">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-montserrat font-bold uppercase tracking-wider text-cyan-400 mb-3">
              Projects
            </h2>
            <div className="p-4 rounded-xl bg-midnight-900/60 border border-white/5 space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-poppins font-bold text-white">
                  {project.title}
                </h3>
                <span className="text-xs font-roboto font-semibold text-cyan-400">
                  {project.tech}
                </span>
              </div>
              <ul className="space-y-1 text-xs font-inter text-slate-300 font-normal">
                {project.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Research Paper */}
          <div>
            <h2 className="text-xs font-montserrat font-bold uppercase tracking-wider text-cyan-400 mb-3">
              Research Paper
            </h2>
            <div className="p-4 rounded-xl bg-midnight-900/60 border border-white/5 space-y-2">
              <h3 className="text-sm font-poppins font-bold text-white">
                {researchPaper.title}
              </h3>
              <div className="text-xs font-roboto font-semibold text-cyan-300">
                {researchPaper.institution} | {researchPaper.domain} | {researchPaper.date}
              </div>
              <ul className="space-y-1 text-xs font-inter text-slate-300 mt-2 font-normal">
                {researchPaper.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-montserrat font-bold uppercase tracking-wider text-cyan-400 mb-3">
              Education
            </h2>
            <div className="space-y-2 text-xs sm:text-sm font-roboto">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-white/5 last:border-none">
                  <div>
                    <span className="font-semibold text-white">• {edu.degree}</span>
                    <span className="text-slate-400 text-xs sm:text-sm ml-1.5 font-inter">— {edu.institution}</span>
                  </div>
                  <div className="text-xs font-roboto text-slate-300 flex items-center gap-2 mt-1 sm:mt-0">
                    <span>{edu.period}</span>
                    {edu.score && (
                      <span className="text-cyan-300 font-bold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-400/40">
                        {edu.score}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h2 className="text-xs font-montserrat font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Soft Skills
            </h2>
            <div className="space-y-1 text-xs sm:text-sm font-roboto">
              <div>
                <span className="font-semibold text-white">• Core skills:</span> {softSkills.core.join(', ')}
              </div>
              <div>
                <span className="font-semibold text-white">• Interpersonal:</span> {softSkills.interpersonal.join(', ')}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-montserrat font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Languages
            </h2>
            <div className="text-xs sm:text-sm font-roboto text-slate-300 font-medium">
              • Known languages: {languages.join(', ')}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-montserrat font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Certifications
            </h2>
            <div className="space-y-1 text-xs sm:text-sm font-roboto">
              {certifications.map((c, idx) => (
                <div key={idx}>
                  • {c.title} — <span className="text-cyan-400 font-semibold">{c.issuer}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
