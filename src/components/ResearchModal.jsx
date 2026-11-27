import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  BookOpen, 
  BrainCircuit, 
  CheckCircle2, 
  ShieldCheck, 
  AlertTriangle, 
  Send, 
  FileText, 
  Layers, 
  GraduationCap, 
  Mail, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { researchPaper, personalInfo } from '../data/portfolioData';

const ResearchModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('paper'); // 'paper' | 'architecture' | 'inquiry'
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [sentStatus, setSentStatus] = useState(false);

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

  const handleSendInquiry = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry on Research Paper: ${researchPaper.title}`);
    const body = encodeURIComponent(
      `Name: ${inquiryName}\nEmail: ${inquiryEmail}\n\nMessage:\n${inquiryMsg}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSentStatus(true);
    setTimeout(() => setSentStatus(false), 5000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Dialog Card with Glowing Cyan Border */}
      <div 
        className="relative w-full max-w-4xl my-6 rounded-3xl bg-midnight-950 border border-cyan-500/40 shadow-card-glow text-left overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient circle */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-midnight-900/95 border-b border-cyan-500/25 flex flex-wrap items-center justify-between gap-4 shrink-0 font-montserrat">
          <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-cyan-300">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Research Paper • Peer-Reviewed Framework</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/research-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-midnight-900 border border-cyan-500/30 text-xs font-roboto font-semibold text-cyan-300 hover:text-white hover:border-cyan-400 hover:shadow-glow-cyan-sm transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>Open PDF</span>
            </a>

            <a
              href="/research-paper.pdf"
              download="AI-Hallucinations-Research-Paper-Harika.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-400/40 text-xs font-roboto font-semibold text-cyan-300 hover:text-white hover:bg-cyan-500/25 hover:shadow-glow-cyan-sm transition-all"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close Research Modal"
              className="p-1.5 rounded-lg bg-midnight-900 border border-cyan-500/30 text-slate-300 hover:text-white hover:bg-midnight-850 hover:border-cyan-400 transition-all ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Header */}
        <div className="px-6 py-3 bg-midnight-950 border-b border-white/10 flex items-center gap-2 overflow-x-auto font-montserrat">
          <button
            onClick={() => setActiveTab('paper')}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
              activeTab === 'paper'
                ? 'bg-cyan-500 text-midnight-950 shadow-glow-cyan-sm'
                : 'text-slate-300 hover:text-cyan-300 hover:bg-midnight-900/60'
            }`}
          >
            Full Paper Overview
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'bg-cyan-500 text-midnight-950 shadow-glow-cyan-sm'
                : 'text-slate-300 hover:text-cyan-300 hover:bg-midnight-900/60'
            }`}
          >
            System Architecture & Logic
          </button>
          <button
            onClick={() => setActiveTab('inquiry')}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
              activeTab === 'inquiry'
                ? 'bg-cyan-500 text-midnight-950 shadow-glow-cyan-sm'
                : 'text-slate-300 hover:text-cyan-300 hover:bg-midnight-900/60'
            }`}
          >
            Submit Research Inquiry
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
          
          {/* TAB 1: FULL PAPER OVERVIEW */}
          {activeTab === 'paper' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Paper Header */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-xs font-roboto font-semibold text-cyan-300 shadow-glow-cyan-sm">
                    {researchPaper.domain}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-midnight-900 border border-white/10 text-xs font-roboto text-slate-300">
                    Department of MCA
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-black text-white leading-tight">
                  {researchPaper.title}
                </h2>

                {/* Authors Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 pb-4 border-y border-white/10">
                  <div className="p-3.5 rounded-xl bg-midnight-900/70 border border-cyan-500/20">
                    <div className="text-sm font-poppins font-bold text-white flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                      G. Harika
                    </div>
                    <div className="text-xs font-roboto text-cyan-300 mt-0.5">MCA Student</div>
                    <div className="text-xs font-roboto text-slate-400 mt-0.5">Acharya Bangalore B-School, Bengaluru</div>
                    <div className="text-xs font-roboto text-slate-400 mt-1 flex items-center gap-1">
                      <Mail className="w-3 h-3 text-cyan-400" />
                      h43371920@gmail.com
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-midnight-900/70 border border-cyan-500/20">
                    <div className="text-sm font-poppins font-bold text-white flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                      Dr. V. Srikanth
                    </div>
                    <div className="text-xs font-roboto text-cyan-300 mt-0.5">Professor & Program Coordinator – MCA Dept</div>
                    <div className="text-xs font-roboto text-slate-400 mt-0.5">Acharya Bangalore B-School, Bengaluru</div>
                    <div className="text-xs font-roboto text-slate-400 mt-1 flex items-center gap-1">
                      <Mail className="w-3 h-3 text-cyan-400" />
                      dr.srikanthv@abbs.edu.in
                    </div>
                  </div>
                </div>
              </div>

              {/* Abstract */}
              <div className="p-6 rounded-2xl bg-midnight-900/80 border border-cyan-500/30 backdrop-blur-md">
                <h3 className="text-xs font-montserrat uppercase font-bold tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  Abstract
                </h3>
                <p className="font-inter text-sm sm:text-base text-slate-200 leading-relaxed font-normal text-justify">
                  {researchPaper.abstract}
                </p>
                
                {/* Keywords */}
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-montserrat font-bold text-slate-400">Keywords:</span>
                  {researchPaper.keywords.map((kw, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-md bg-midnight-950 border border-cyan-500/20 text-xs font-roboto text-cyan-300">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Contributions & Highlights */}
              <div>
                <h3 className="text-sm font-montserrat uppercase font-bold tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Key Research Contributions
                </h3>
                <div className="space-y-3">
                  {researchPaper.bullets.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-midnight-900/60 border border-cyan-500/20 text-sm font-inter text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Bar */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-midnight-900 via-midnight-850 to-midnight-900 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-poppins font-bold text-white">Have questions or feedback on this paper?</div>
                  <div className="text-xs font-inter text-slate-400">Collaborate, request source data, or ask technical questions.</div>
                </div>
                <button
                  onClick={() => setActiveTab('inquiry')}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-midnight-950 text-xs font-montserrat font-bold uppercase tracking-wider shadow-glow-cyan-sm hover:scale-[1.02] transition-all"
                >
                  Inquire Now
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: SYSTEM ARCHITECTURE & LOGIC */}
          {activeTab === 'architecture' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Architecture Intro */}
              <div className="p-6 rounded-2xl bg-midnight-900/80 border border-cyan-500/30">
                <h3 className="text-xs font-montserrat uppercase font-bold tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-cyan-400" />
                  Core Pipeline Flow
                </h3>
                <p className="text-xs sm:text-sm font-roboto text-slate-300 mb-4 font-mono bg-midnight-950 p-3 rounded-xl border border-cyan-500/20 overflow-x-auto">
                  User Query → Generate Draft Answer (G) → Pre-Answer Verification Layer → Compute Risk Score (R) → 3-Tier Action Policy → Deliver / Verify Further / Regenerate or Warn
                </p>
                <p className="text-sm font-inter text-slate-300 leading-relaxed">
                  Unlike traditional post-hoc detectors that evaluate responses only after the user has read them, this framework intercepts the answer before delivery, examining factual consistency, external evidence, source reliability, and semantic uncertainty.
                </p>
              </div>

              {/* The 4 Verification Stages */}
              <div>
                <h3 className="text-sm font-montserrat uppercase font-bold tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  Four Verification Stages
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {researchPaper.stages.map((stage, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-midnight-900/70 border border-cyan-500/25">
                      <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-cyan-300 mb-1.5">
                        <span className="w-5 h-5 rounded-md bg-cyan-950 border border-cyan-400/40 text-cyan-400 flex items-center justify-center text-[11px] font-mono">
                          0{idx + 1}
                        </span>
                        {stage.name}
                      </div>
                      <p className="text-xs font-inter text-slate-300 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hallucination Risk Score Formula */}
              <div className="p-6 rounded-2xl bg-midnight-900/90 border border-cyan-400/40 shadow-glow-cyan-sm">
                <h3 className="text-xs font-montserrat uppercase font-bold tracking-wider text-cyan-400 mb-2">
                  Hallucination Risk Score Formulation
                </h3>
                <div className="my-3 p-4 rounded-xl bg-midnight-950 border border-cyan-500/30 text-center font-mono text-cyan-300 text-sm sm:text-base font-bold shadow-inner">
                  {researchPaper.riskScoreFormula}
                </div>
                <p className="text-xs font-roboto text-slate-300 leading-relaxed">
                  Where <span className="text-cyan-300 font-semibold font-mono">F</span> = factual consistency across k samples, <span className="text-cyan-300 font-semibold font-mono">E</span> = external evidence support score, <span className="text-cyan-300 font-semibold font-mono">L</span> = source tier reliability weight, and <span className="text-cyan-300 font-semibold font-mono">U</span> = calibrated semantic uncertainty.
                </p>
              </div>

              {/* Risk Categories & System Actions Table */}
              <div>
                <h3 className="text-sm font-montserrat uppercase font-bold tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Table I: Risk Categories & System Actions
                </h3>
                <div className="rounded-2xl border border-cyan-500/30 overflow-hidden bg-midnight-900/70">
                  <table className="w-full text-left text-xs sm:text-sm font-roboto">
                    <thead className="bg-midnight-950 text-cyan-300 border-b border-cyan-500/20 font-montserrat uppercase font-bold text-[11px] tracking-wider">
                      <tr>
                        <th className="p-3.5">Category</th>
                        <th className="p-3.5">Risk Score (R)</th>
                        <th className="p-3.5">System Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-slate-300 font-inter">
                      {researchPaper.riskCategories.map((row, idx) => (
                        <tr key={idx} className="hover:bg-midnight-850/50 transition-colors">
                          <td className="p-3.5 font-semibold text-white">
                            <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                              idx === 0 ? 'bg-emerald-400' : idx === 1 ? 'bg-amber-400' : 'bg-rose-400'
                            }`} />
                            {row.category}
                          </td>
                          <td className="p-3.5 font-mono text-cyan-300 font-bold">{row.range}</td>
                          <td className="p-3.5 text-xs sm:text-sm leading-relaxed">{row.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: INQUIRY FORM */}
          {activeTab === 'inquiry' && (
            <div className="space-y-6 animate-fadeIn max-w-2xl mx-auto">
              
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-poppins font-black text-white">
                  Inquire About This Research Paper
                </h3>
                <p className="text-xs sm:text-sm font-inter text-slate-300">
                  Send a direct inquiry to author G. Harika regarding paper methodology, collaboration, or citations.
                </p>
              </div>

              {sentStatus && (
                <div className="p-4 rounded-xl bg-cyan-950/80 border border-cyan-400/50 text-cyan-300 text-xs sm:text-sm font-roboto flex items-center gap-2 shadow-glow-cyan-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Your email client is opening with your inquiry details pre-filled.</span>
                </div>
              )}

              <form onSubmit={handleSendInquiry} className="space-y-4">
                <div>
                  <label className="block text-xs font-montserrat font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Prof. / Dr. / Researcher Name"
                    className="w-full px-4 py-3 rounded-xl bg-midnight-900 border border-cyan-500/30 text-white placeholder-slate-500 text-sm font-roboto focus:outline-none focus:border-cyan-400 focus:shadow-glow-cyan-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-montserrat font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="researcher@university.edu"
                    className="w-full px-4 py-3 rounded-xl bg-midnight-900 border border-cyan-500/30 text-white placeholder-slate-500 text-sm font-roboto focus:outline-none focus:border-cyan-400 focus:shadow-glow-cyan-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-montserrat font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Inquiry Message / Questions
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={inquiryMsg}
                    onChange={(e) => setInquiryMsg(e.target.value)}
                    placeholder="I am interested in learning more about the Pre-Answer Verification Framework / dataset evaluations / collaboration..."
                    className="w-full px-4 py-3 rounded-xl bg-midnight-900 border border-cyan-500/30 text-white placeholder-slate-500 text-sm font-roboto focus:outline-none focus:border-cyan-400 focus:shadow-glow-cyan-sm transition-all"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs font-roboto text-slate-400">
                    Recipient: <span className="text-cyan-300 font-semibold">{personalInfo.email}</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-midnight-950 text-xs sm:text-sm font-montserrat font-bold uppercase tracking-wider shadow-glow-cyan-md hover:shadow-glow-cyan-lg hover:scale-[1.02] transition-all"
                  >
                    <span>Send Inquiry Email</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Direct Contacts box */}
              <div className="pt-6 border-t border-white/10 text-xs font-roboto text-slate-400 text-center">
                Or email directly:{' '}
                <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 underline font-semibold ml-1">
                  {personalInfo.email}
                </a>{' '}
                •{' '}
                <a href="mailto:h43371920@gmail.com" className="text-cyan-400 underline font-semibold ml-1">
                  h43371920@gmail.com
                </a>
              </div>

            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3.5 bg-midnight-900/95 border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-3 shrink-0 text-xs font-roboto text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(0,240,255,0.9)]" />
            <span>Authored by G. Harika & Dr. V. Srikanth</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('inquiry')}
              className="text-cyan-400 hover:text-cyan-300 font-semibold underline"
            >
              Inquire Directly
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-midnight-950 border border-white/10 text-white hover:border-cyan-400 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResearchModal;
