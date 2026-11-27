import React from 'react';
import { Briefcase, Award, CheckCircle2 } from 'lucide-react';
import { workExperience, certifications } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden border-t border-cyan-500/15">
      {/* Background Cyan Glow */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Montserrat */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-900 border border-cyan-500/40 text-xs font-montserrat uppercase tracking-wider font-bold text-cyan-300 mb-4 shadow-glow-cyan-sm">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>05 // EXPERIENCE & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold tracking-tight text-white mb-4">
            Experience.
          </h2>
          <p className="font-inter text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Professional internship experience and certifications from my resume.
          </p>
        </div>

        {/* Work Experience Card with Glowing Border */}
        <div className="space-y-8 mb-16">
          {workExperience.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-10 rounded-3xl bg-midnight-900/85 border border-cyan-500/35 hover:border-cyan-400 shadow-card-midnight hover:shadow-card-glow backdrop-blur-xl relative overflow-hidden transition-all duration-300"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-transparent absolute top-0 left-0" />

              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-poppins font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-roboto font-semibold text-cyan-400 mt-1">
                    {exp.company}
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-roboto font-bold shadow-glow-cyan-sm">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-3.5 my-6">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm font-inter text-slate-200 font-normal leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Block with Glowing Borders */}
        <div>
          <div className="flex items-center gap-2 text-xs font-montserrat uppercase tracking-wider text-cyan-400 font-bold mb-6">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>Certifications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, cIdx) => (
              <div key={cIdx} className="p-5 rounded-2xl bg-midnight-900/80 border border-cyan-500/25 hover:border-cyan-400 hover:shadow-glow-cyan-sm transition-all flex items-center justify-between">
                <div>
                  <h4 className="text-sm sm:text-base font-poppins font-bold text-white">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-roboto font-semibold text-cyan-400 mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
                <Award className="w-5 h-5 text-cyan-400 shrink-0" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
