import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, ChevronDown, FileText, Download, Code, FileCode, Check, Play, RefreshCw } from 'lucide-react';

function DeveloperTerminal() {
  const [activeTab, setActiveTab] = useState<'profile' | 'stack' | 'status'>('profile');
  const [copied, setCopied] = useState(false);
  const [displayedTextLength, setDisplayedTextLength] = useState(0);

  const codeSnippets = {
    profile: `interface Engineer {
  name: string;
  degree: string;
  cgpa: number;
  specialization: string[];
}

const suhas: Engineer = {
  name: "Suhas A Sakri",
  degree: "B.E. Computer Science",
  cgpa: 8.7,
  specialization: [
    "AI Speech Recognition",
    "Full-Stack Microservices",
    "Machine Learning Models"
  ]
};`,
    stack: `{
  "ai_ml": ["OpenAI Whisper", "Groq AI", "Scikit-learn"],
  "frontend": ["React.js", "HTML5/CSS3", "Bootstrap"],
  "backend": ["Node.js", "FastAPI", "Flask", "PHP"],
  "databases": ["MongoDB", "MySQL"],
  "languages": ["Java", "Python", "JavaScript", "C++"]
}`,
    status: `$ suhas --status
● Status: READY_FOR_HIRE
● Projects: Accentrix, GrowRight, Price Predictor
● Academics: Jain College of Engineering (8.7 CGPA)
● Contact: suhassakri2@gmail.com

$ systemctl status ai-services
● Active: running (0 errors)`
  };

  const currentCode = codeSnippets[activeTab];

  // Reset and restart character-by-character typing animation when tab changes
  useEffect(() => {
    setDisplayedTextLength(0);
    const interval = setInterval(() => {
      setDisplayedTextLength((prev) => {
        if (prev < currentCode.length) {
          return prev + 3; // type 3 chars per tick for smooth fast typing
        }
        clearInterval(interval);
        return currentCode.length;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRestartTyping = () => {
    setDisplayedTextLength(0);
  };

  // Syntax highlighting renderer helper
  const renderHighlightedCode = (text: string) => {
    return text.split('\n').map((line, lineIdx) => (
      <div key={lineIdx} className="table-row">
        <span className="table-cell select-none pr-4 text-right text-gray-600 text-[11px] font-mono">
          {lineIdx + 1}
        </span>
        <span className="table-cell whitespace-pre">
          {line.split(/(".*?"|interface|const|string|number|boolean|let|\$|\b\d+(?:\.\d+)?\b)/g).map((part, pIdx) => {
            if (!part) return null;
            if (part.startsWith('"') && part.endsWith('"')) {
              return <span key={pIdx} className="text-amber-300">{part}</span>;
            }
            if (['interface', 'const', 'let', 'type'].includes(part)) {
              return <span key={pIdx} className="text-purple-400 font-semibold">{part} </span>;
            }
            if (['string', 'number', 'boolean', 'string[]'].includes(part)) {
              return <span key={pIdx} className="text-emerald-400">{part}</span>;
            }
            if (part === '$') {
              return <span key={pIdx} className="text-neon-cyan font-bold">$ </span>;
            }
            if (!isNaN(Number(part))) {
              return <span key={pIdx} className="text-neon-cyan">{part}</span>;
            }
            if (part.includes(':')) {
              const [key, val] = part.split(':');
              return (
                <span key={pIdx}>
                  <span className="text-neon-blue">{key}</span>:{val}
                </span>
              );
            }
            return <span key={pIdx} className="text-gray-300">{part}</span>;
          })}
        </span>
      </div>
    ));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Outer ambient aura */}
      <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/25 via-neon-purple/20 to-neon-blue/25 rounded-2xl blur-xl opacity-75"></div>

      {/* Terminal Window Container */}
      <div className="relative glass-card rounded-2xl border border-white/15 overflow-hidden shadow-2xl bg-[#0b0f19]/95 backdrop-blur-xl">
        
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-black/60 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="text-xs font-mono text-gray-400 ml-2">suhas-workspace</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRestartTyping}
              className="text-[11px] font-mono text-gray-400 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
              title="Re-run typing animation"
            >
              <RefreshCw size={13} />
            </button>
            <button 
              onClick={handleCopy}
              className="text-[11px] font-mono text-gray-400 hover:text-neon-cyan px-2.5 py-1 rounded bg-white/5 border border-white/10 flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check size={12} className="text-emerald-400" /> : <Code size={12} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-black/40 border-b border-white/10 font-mono text-xs overflow-x-auto">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2.5 flex items-center gap-2 border-r border-white/10 transition-colors whitespace-nowrap ${
              activeTab === 'profile'
                ? 'bg-white/10 text-neon-cyan border-b-2 border-b-neon-cyan font-semibold'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FileCode size={14} />
            <span>suhas.ts</span>
          </button>

          <button
            onClick={() => setActiveTab('stack')}
            className={`px-4 py-2.5 flex items-center gap-2 border-r border-white/10 transition-colors whitespace-nowrap ${
              activeTab === 'stack'
                ? 'bg-white/10 text-neon-purple border-b-2 border-b-neon-purple font-semibold'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FileCode size={14} />
            <span>tech_stack.json</span>
          </button>

          <button
            onClick={() => setActiveTab('status')}
            className={`px-4 py-2.5 flex items-center gap-2 border-r border-white/10 transition-colors whitespace-nowrap ${
              activeTab === 'status'
                ? 'bg-white/10 text-emerald-400 border-b-2 border-b-emerald-400 font-semibold'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <TerminalIcon size={14} />
            <span>status.sh</span>
          </button>
        </div>

        {/* Live Typing Code Body */}
        <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[260px] flex flex-col justify-between">
          <div className="table w-full">
            {renderHighlightedCode(currentCode.slice(0, displayedTextLength))}
            {displayedTextLength < currentCode.length && (
              <span className="inline-block w-2 h-4 bg-neon-cyan ml-1 animate-pulse align-middle"></span>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-500 font-mono">
            <span className="flex items-center gap-1.5">
              <Play size={10} className="text-neon-cyan" /> 
              {displayedTextLength < currentCode.length ? 'Typing code stream...' : 'Execution complete'}
            </span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> 0 Errors
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 pt-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Call-to-actions */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 px-3 py-1 rounded-full glass-card border-neon-cyan/30 text-neon-cyan font-mono text-sm"
            >
              <TerminalIcon size={14} />
              <span>SYSTEM.READY</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple mt-2"
            >
              SUHAS A SAKRI
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-mono"
            >
              &gt; Computer Science Engineer & AI Full-Stack Developer
              <span className="animate-pulse text-neon-blue">_</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="max-w-xl text-gray-400 text-base sm:text-lg leading-relaxed"
            >
              Building scalable AI-powered applications, machine learning microservices, and modern web platforms with React, FastAPI, Node.js, and Python.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-4 mt-6"
            >
              <a 
                href="#resume" 
                className="px-6 sm:px-8 py-3.5 bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/60 rounded-lg hover:bg-neon-cyan hover:text-black hover:shadow-neon-cyan transition-all duration-300 font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <FileText size={18} /> View Resume
              </a>
              <a 
                href="/Suhas_A_Sakri_Resume.pdf" 
                download="Suhas_A_Sakri_Resume.pdf" 
                className="px-6 sm:px-8 py-3.5 bg-neon-blue/10 text-neon-blue border border-neon-blue/50 rounded-lg hover:bg-neon-blue hover:text-black hover:shadow-neon-blue transition-all duration-300 font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <Download size={18} /> Download CV
              </a>
              <a 
                href="#projects" 
                className="px-6 sm:px-8 py-3.5 bg-transparent text-white border border-gray-700 rounded-lg hover:border-white transition-all duration-300 font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                View Work
              </a>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Typing Developer Terminal */}
          <div className="lg:col-span-5 w-full">
            <DeveloperTerminal />
          </div>

        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 hidden sm:block"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
