import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const AVAILABLE_COMMANDS = [
  { cmd: 'help', desc: 'Display all available terminal commands' },
  { cmd: 'bio', desc: 'Show developer profile and background summary' },
  { cmd: 'education', desc: 'Display academic credentials and CGPA' },
  { cmd: 'skills', desc: 'List core technical competencies' },
  { cmd: 'projects', desc: 'Flagship ML project: Chronic Kidney Disease Detection' },
  { cmd: 'research', desc: 'Authored paper on proactive AI hallucination prevention' },
  { cmd: 'contact', desc: 'Show email and social communication channels' },
  { cmd: 'clear', desc: 'Clear the terminal output screen' },
];

const InteractiveTerminal = ({ isOpen }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'G. Harika Interactive Developer Shell [Version 2.4.0 - Midnight Cyan Edition]' },
    { type: 'system', text: 'Type "help" to view available commands, or click any prompt pill below.' },
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'user', text: `$ ${trimmed}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: AVAILABLE_COMMANDS.map(c => `  ${c.cmd.padEnd(12)} - ${c.desc}`).join('\n')
        });
        break;

      case 'bio':
        newHistory.push({
          type: 'output',
          text: `G. Harika\nMCA Scholar at Acharya Bangalore B-School | Python Developer | Machine Learning & Trustworthy AI\nExperience: Full Stack AI with Python Intern at Zeta Coding Innovative Solutions\nBCA High Distinction (9.18 CGPA, Bengaluru North University)\nLocation: Bengaluru, India`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          text: `1. MCA - Acharya Bangalore B-School [2026 - Present]\n2. BCA - Bengaluru North University [2023 - 2026] | 9.18 CGPA\n3. 12th Intermediate - Board of Intermediate Education, AP [2021 - 2023] | 85%\n4. 10th - Board of Secondary Education, AP [2020 - 2021] | 86%`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `• Programming Languages: Python, PHP, SQL, C, C#\n• Frameworks & Libraries: Django, Flask, Laravel, React, Tailwind CSS, Bootstrap\n• Web Technologies: HTML5, CSS3, REST APIs, WordPress, WooCommerce, Elementor\n• Databases: MySQL, PostgreSQL, MongoDB, SQLite\n• Tools & DevOps: Git, GitHub, Docker, Kubernetes, Nginx, CI/CD, Postman, VS Code, MS Excel, AWS & Azure (fundamentals)\n• AI & Data: LangChain, LangGraph, Neo4j, Pandas, NumPy, Scikit-learn, Matplotlib, Power BI, model training and evaluation, feature engineering`
        });
        break;

      case 'projects':
      case 'project':
        newHistory.push({
          type: 'output',
          text: `[Key Project]:\nChronic Kidney Disease (CKD) Detection using Machine Learning\nTech: Python, Pandas, NumPy, Scikit-learn, Flask\n• Built a classification model to predict the presence of chronic kidney disease from clinical patient data.\n• Pre-processed the dataset: handled missing values, encoded categorical features and scaled numerical features.\n• Trained and compared multiple algorithms and selected the best model based on accuracy, precision, recall and confusion matrix.\n• Created a Flask web interface where users enter patient values and get a CKD / non-CKD prediction.`
        });
        break;

      case 'research':
      case 'paper':
        newHistory.push({
          type: 'output',
          text: `[Research Paper]:\nA Proactive Framework for Detecting and Preventing AI Hallucinations Before Answer Delivery\nAuthors: G. Harika & Dr. V. Srikanth | Acharya Bangalore B-School, Dept. of MCA, Bengaluru\nDomain: AI · NLP · Trustworthy AI · Hallucination Prevention\n• Proposes a proactive pre-answer verification layer placed between response generation and final user delivery.\n• Formulates a composite risk score (R) combining factual consistency, evidence support, source reliability, and uncertainty estimation.\n• Establishes a three-tier decision policy: immediate delivery (low risk), additional verification (medium risk), or regeneration/warning (high risk).\n• PDF paper available at /research-paper.pdf`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email: ${personalInfo.email}\nLinkedIn: ${personalInfo.linkedin}\nGitHub: ${personalInfo.github}\nLocation: ${personalInfo.location}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${trimmed}". Type "help" for a list of valid commands.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <section id="terminal-section" className="py-12 border-t border-cyan-500/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Terminal Window Frame with Glowing Electric Cyan Border */}
        <div className="rounded-2xl bg-midnight-950 border border-cyan-500/35 shadow-card-glow overflow-hidden font-roboto text-slate-100">

          {/* Header Bar */}
          <div className="px-4 py-3 bg-midnight-900 border-b border-cyan-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
              <span className="ml-3 text-xs text-slate-300 flex items-center gap-1.5 font-roboto">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                harika@bengaluru-devbox:~ (python3.12 • midnight-cyan)
              </span>
            </div>

            <div className="text-[11px] font-roboto text-slate-400 hidden sm:block">
              Interactive Terminal
            </div>
          </div>

          {/* Quick Command Suggestion Bar */}
          <div className="px-4 py-2 bg-midnight-900/70 border-b border-white/5 flex flex-wrap gap-2 text-xs">
            <span className="text-slate-400 py-0.5 font-roboto">Quick Run:</span>
            {['help', 'bio', 'skills', 'education', 'projects', 'research', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2 py-0.5 rounded bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 text-[11px] font-roboto transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Screen Body */}
          <div className="p-4 sm:p-6 min-h-[260px] max-h-[380px] overflow-y-auto text-xs sm:text-sm space-y-3 font-roboto">
            {history.map((line, idx) => (
              <div key={idx}>
                {line.type === 'system' && (
                  <p className="text-slate-400 font-roboto">{line.text}</p>
                )}
                {line.type === 'user' && (
                  <p className="text-cyan-300 font-bold font-roboto">{line.text}</p>
                )}
                {line.type === 'output' && (
                  <pre className="text-slate-200 whitespace-pre-wrap font-roboto leading-relaxed pl-2 border-l border-cyan-400/50">
                    {line.text}
                  </pre>
                )}
                {line.type === 'error' && (
                  <p className="text-rose-400 font-roboto">{line.text}</p>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Prompt */}
          <form onSubmit={onSubmit} className="px-4 py-3 bg-midnight-900 border-t border-cyan-500/20 flex items-center gap-2">
            <span className="text-cyan-400 font-bold text-sm font-roboto drop-shadow-[0_0_6px_rgba(0,240,255,0.8)]">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type a command (e.g., 'skills', 'projects', 'bio')..."
              className="flex-grow bg-transparent text-white text-xs sm:text-sm font-roboto focus:outline-none placeholder:text-slate-500"
            />
            <button
              type="submit"
              className="p-1 rounded text-slate-400 hover:text-cyan-400"
              aria-label="Execute Command"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
