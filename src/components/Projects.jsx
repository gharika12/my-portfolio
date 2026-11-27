import React from 'react';
import { FolderGit2, Github, CheckCircle2, Cpu } from 'lucide-react';
import { project, personalInfo } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden border-t border-cyan-500/15">
      {/* Background Cyan Glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Montserrat & Playfair accent */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-900 border border-cyan-500/40 text-xs font-montserrat uppercase tracking-wider font-bold text-cyan-300 mb-4 shadow-glow-cyan-sm">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>03 // PROJECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold tracking-tight text-white mb-4">
            Key <span className="font-playfair italic font-bold text-gradient-stylish">Project.</span>
          </h2>
          <p className="font-inter text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Machine learning project from my resume.
          </p>
        </div>

        {/* Project Card with Glowing Borders */}
        <div className="rounded-3xl bg-midnight-900/85 border border-cyan-500/35 hover:border-cyan-400 shadow-card-midnight hover:shadow-card-glow backdrop-blur-xl overflow-hidden transition-all duration-300">
          <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-transparent" />

          <div className="p-6 sm:p-10 lg:p-12">
            
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-xs font-roboto font-semibold text-cyan-300 shadow-glow-cyan-sm">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                Machine Learning & Web Application
              </span>
              <span className="text-xs font-roboto font-medium text-slate-400">
                Python, Pandas, NumPy, Scikit-learn, Flask
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-black text-white mb-6">
              {project.title}
            </h3>

            {/* Bullets with Inter font */}
            <div className="space-y-4 my-8">
              {project.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-midnight-950/70 border border-cyan-500/20 text-sm sm:text-base text-slate-200 font-inter font-normal">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills with Roboto */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-roboto text-slate-400 mr-2 font-semibold">Technologies:</span>
                {project.tech.split(', ').map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-midnight-950 border border-cyan-500/25 text-xs font-roboto text-cyan-300 font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-midnight-950 text-xs sm:text-sm font-montserrat font-bold uppercase tracking-wider shadow-glow-cyan-md hover:shadow-glow-cyan-lg hover:scale-[1.02] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
