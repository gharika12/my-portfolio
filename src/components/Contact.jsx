import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = ({ showToast }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (showToast) showToast('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (showToast) showToast('Please fill out all required fields.');
      return;
    }

    // Trigger simulated success
    setSubmitted(true);
    if (showToast) showToast('Message dispatched! Thank you for reaching out.');
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden border-t border-cyan-500/15">
      {/* Background soft glow in Electric Cyan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Montserrat & Playfair accent */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-900 border border-cyan-500/40 text-xs font-montserrat uppercase tracking-wider font-bold text-cyan-300 mb-4 shadow-glow-cyan-sm">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>06 // CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold tracking-tight text-white mb-4">
            Let's <span className="font-playfair italic font-bold text-gradient-stylish">Connect.</span>
          </h2>
          <p className="font-inter text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Whether you have an internship opportunity, project proposal, research inquiry, or want to discuss AI and Python engineering, I'd love to hear from you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card with Glowing Border */}
            <div className="p-6 sm:p-8 rounded-3xl bg-midnight-900/85 border border-cyan-500/35 hover:border-cyan-400 shadow-card-midnight hover:shadow-card-glow backdrop-blur-xl transition-all duration-300">
              <h3 className="text-xl font-poppins font-bold text-white mb-6">
                Communication Channels
              </h3>

              <div className="space-y-4 font-roboto">
                {/* Email Item with Instant Copy */}
                <div className="p-4 rounded-2xl bg-midnight-950/80 border border-cyan-500/20 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-400/40 text-cyan-400 shrink-0 shadow-glow-cyan-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-roboto uppercase text-slate-400 font-semibold">Direct Email</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm text-white font-semibold hover:text-cyan-300 transition-colors truncate block font-roboto">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-2 rounded-xl bg-midnight-900 border border-cyan-500/30 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors shrink-0 shadow-sm"
                  >
                    {copied ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-midnight-950/80 border border-cyan-500/20 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-400/40 text-cyan-400 shrink-0 shadow-glow-cyan-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-roboto uppercase text-slate-400 font-semibold">Location</div>
                    <div className="text-xs sm:text-sm text-white font-semibold font-roboto">
                      Bengaluru, Karnataka, India
                    </div>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="p-4 rounded-2xl bg-cyan-950/60 border border-cyan-400/40 flex items-center gap-3 shadow-glow-cyan-sm">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
                  </span>
                  <div className="text-xs text-cyan-300 font-roboto font-semibold">
                    Actively seeking AI/ML & Python Developer Opportunities
                  </div>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs font-montserrat uppercase text-slate-400 font-bold mb-3 tracking-wider">
                  Professional Profiles
                </div>
                <div className="flex gap-3 font-montserrat">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-midnight-950 border border-cyan-500/25 hover:border-cyan-400 text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 hover:shadow-glow-cyan-sm"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-midnight-950 border border-cyan-500/25 hover:border-cyan-400 text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 hover:shadow-glow-cyan-sm"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Messaging Form with Glowing Border */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-midnight-900/85 border border-cyan-500/35 hover:border-cyan-400 shadow-card-midnight hover:shadow-card-glow backdrop-blur-xl transition-all duration-300">
              <h3 className="text-xl font-poppins font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm font-inter text-slate-300 mb-6 font-normal">
                Have a role or collaboration in mind? Drop a message here directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-roboto uppercase text-slate-300 font-semibold mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Chen"
                      className="w-full px-4 py-3 rounded-xl bg-midnight-950/80 border border-cyan-500/25 focus:border-cyan-400 focus:shadow-glow-cyan-sm focus:outline-none text-white text-sm font-inter placeholder:text-slate-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-roboto uppercase text-slate-300 font-semibold mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-midnight-950/80 border border-cyan-500/25 focus:border-cyan-400 focus:shadow-glow-cyan-sm focus:outline-none text-white text-sm font-inter placeholder:text-slate-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-roboto uppercase text-slate-300 font-semibold mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry / Internship / General"
                    className="w-full px-4 py-3 rounded-xl bg-midnight-950/80 border border-cyan-500/25 focus:border-cyan-400 focus:shadow-glow-cyan-sm focus:outline-none text-white text-sm font-inter placeholder:text-slate-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-roboto uppercase text-slate-300 font-semibold mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-midnight-950/80 border border-cyan-500/25 focus:border-cyan-400 focus:shadow-glow-cyan-sm focus:outline-none text-white text-sm font-inter placeholder:text-slate-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-midnight-950 font-montserrat font-bold uppercase tracking-wider text-xs shadow-glow-cyan-md hover:shadow-glow-cyan-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4 text-midnight-950" />
                      <span>Message Dispatched!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
