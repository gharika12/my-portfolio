import React from 'react';
import { 
  GraduationCap, 
  Compass, 
  Globe, 
  HeartHandshake 
} from 'lucide-react';
import { personalInfo, education, softSkills, languages } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden border-t border-cyan-500/15">
      {/* Background soft glow in Midnight Blue */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Montserrat & Playfair accent */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-900 border border-cyan-500/40 text-xs font-montserrat uppercase tracking-wider font-bold text-cyan-300 mb-4 shadow-glow-cyan-sm">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>01 // PROFILE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold tracking-tight text-white mb-4">
            About <span className="font-playfair italic font-bold text-gradient-stylish">Me.</span>
          </h2>
          <p className="font-inter text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Professional background and education from my resume.
          </p>
        </div>

        {/* Narrative & Summary Card with Glowing Border */}
        <div className="mb-16 p-6 sm:p-10 rounded-3xl bg-midnight-900/80 border border-cyan-500/30 hover:border-cyan-400/60 shadow-card-midnight hover:shadow-card-glow backdrop-blur-xl transition-all duration-300">
          <h3 className="text-xs font-montserrat uppercase font-bold tracking-wider text-cyan-400 mb-3">
            About Harika
          </h3>
          <p className="font-inter text-base sm:text-lg text-slate-200 leading-relaxed max-w-4xl font-normal">
            {personalInfo.about}
          </p>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-roboto text-slate-300">
            <div>
              <span className="text-slate-500 font-semibold">Location:</span> Bengaluru, India
            </div>
            <div>
              <span className="text-slate-500 font-semibold">Email:</span> {personalInfo.email}
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-400/40 text-cyan-400 shadow-glow-cyan-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-white">
                Education
              </h3>
              <p className="text-xs font-roboto text-slate-400">
                Academic Qualifications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-midnight-900/80 border border-cyan-500/25 hover:border-cyan-400 hover:shadow-card-glow transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-roboto font-semibold text-cyan-300 bg-cyan-950/70 border border-cyan-400/40 px-2.5 py-0.5 rounded-md shadow-glow-cyan-sm">
                      {edu.period}
                    </span>
                    {edu.score && (
                      <span className="text-xs font-roboto font-bold text-white bg-cyan-500/20 border border-cyan-400/50 px-2.5 py-0.5 rounded-md">
                        {edu.score}
                      </span>
                    )}
                  </div>
                  <h4 className="text-base sm:text-lg font-poppins font-bold text-white mt-2">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm font-inter text-slate-300 mt-1">
                    {edu.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills & Languages Known */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Soft Skills */}
          <div className="md:col-span-8 p-6 sm:p-8 rounded-2xl bg-midnight-900/80 border border-cyan-500/25 backdrop-blur-md shadow-card-midnight">
            <div className="flex items-center gap-2 text-xs font-montserrat uppercase font-bold tracking-wider text-cyan-400 mb-4">
              <HeartHandshake className="w-4 h-4 text-cyan-400" />
              <span>Soft Skills</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="text-xs font-roboto font-semibold text-slate-400 block mb-2">Core Skills:</span>
                <div className="flex flex-wrap gap-2">
                  {softSkills.core.map((s, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-midnight-950 border border-cyan-500/20 text-xs font-roboto text-slate-200">
                      • {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-roboto font-semibold text-slate-400 block mb-2">Interpersonal:</span>
                <div className="flex flex-wrap gap-2">
                  {softSkills.interpersonal.map((s, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-midnight-950 border border-cyan-500/20 text-xs font-roboto text-slate-200">
                      • {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="md:col-span-4 p-6 sm:p-8 rounded-2xl bg-midnight-900/80 border border-cyan-500/25 backdrop-blur-md shadow-card-midnight">
            <div className="flex items-center gap-2 text-xs font-montserrat uppercase font-bold tracking-wider text-cyan-400 mb-4">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Known Languages</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((l, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-xl bg-midnight-950 border border-cyan-500/20 text-xs font-roboto text-slate-200 font-semibold">
                  {l}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
