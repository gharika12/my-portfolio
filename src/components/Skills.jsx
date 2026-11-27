import React, { useState } from 'react';
import { 
  Cpu, 
  Terminal, 
  Code2, 
  Database, 
  Server, 
  Layout, 
  GitBranch,
  Sparkles
} from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

const categoryIcons = {
  "Programming Languages": Terminal,
  "Frameworks & Libraries": Server,
  "Web Technologies": Layout,
  "Databases": Database,
  "Tools & DevOps": GitBranch,
  "AI & Data": Cpu
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? technicalSkills
    : technicalSkills.filter(cat => cat.category === activeTab);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden border-t border-cyan-500/15">
      {/* Background Cyan Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Montserrat & Playfair accent */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-900 border border-cyan-500/40 text-xs font-montserrat uppercase tracking-wider font-bold text-cyan-300 mb-4 shadow-glow-cyan-sm">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>02 // TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold tracking-tight text-white mb-4">
            Technical <span className="font-playfair italic font-bold text-gradient-stylish">Skills.</span>
          </h2>
          <p className="font-inter text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Skills and technologies directly from my resume across development, machine learning, and DevOps.
          </p>
        </div>

        {/* Filter Pills with Glowing Borders */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 font-montserrat">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-midnight-950 shadow-glow-cyan-md'
                : 'bg-midnight-900/90 text-slate-300 hover:text-white border border-cyan-500/25 hover:border-cyan-400 hover:shadow-glow-cyan-sm'
            }`}
          >
            All ({technicalSkills.length})
          </button>
          {technicalSkills.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(cat.category)}
              className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all duration-300 ${
                activeTab === cat.category
                  ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-midnight-950 shadow-glow-cyan-md'
                  : 'bg-midnight-900/90 text-slate-300 hover:text-white border border-cyan-500/25 hover:border-cyan-400 hover:shadow-glow-cyan-sm'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* STYLISH SKILL CARDS with Glowing Borders & Cyber Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCategories.map((group, idx) => {
            const Icon = categoryIcons[group.category] || Code2;
            return (
              <div
                key={group.category}
                className="relative group rounded-3xl bg-midnight-900/90 border border-cyan-500/30 hover:border-cyan-400 shadow-card-midnight hover:shadow-card-glow backdrop-blur-xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Glowing Top Accent Strip in Electric Cyan */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-cyan-400 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Subtle corner light */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-300" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-400/40 text-cyan-400 shadow-glow-cyan-sm group-hover:scale-110 group-hover:border-cyan-300 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-poppins font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {group.category}
                        </h3>
                        <span className="text-[11px] font-roboto text-slate-400">
                          {group.skills.length} core competencies
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stylish Skill Tags with Neon Cyan Indicators */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-midnight-950/90 border border-cyan-500/20 hover:border-cyan-400 text-xs font-roboto font-semibold text-slate-200 hover:text-white hover:bg-cyan-950/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-200 group/tag cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(0,240,255,0.9)] group-hover/tag:scale-125 transition-transform" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Meta */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-roboto text-slate-400">
                  <span className="text-cyan-400/80 font-medium">Domain Verified</span>
                  <span className="text-slate-500 font-mono">0{idx + 1} // STACK</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
