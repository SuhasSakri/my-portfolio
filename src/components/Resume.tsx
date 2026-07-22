import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Eye, 
  ExternalLink, 
  Award, 
  Languages, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Sparkles,
  X,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';

export default function Resume() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'skills' | 'education' | 'certifications'>('overview');

  const resumePdfPath = "/Suhas_A_Sakri_Resume.pdf";

  const selectedProjects = [
    {
      title: "Accentrix – AI Pronunciation Coach",
      tech: "React, Node.js, FastAPI, MongoDB, OpenAI Whisper, JWT",
      bullets: [
        "Developed a full-stack AI pronunciation platform using React, Node.js, FastAPI and MongoDB.",
        "Integrated OpenAI Whisper for real-time speech analysis, multilingual pronunciation feedback and progress tracking.",
        "Implemented JWT authentication, browser audio processing and scalable microservice architecture."
      ]
    },
    {
      title: "GrowRight – AI Health & Nutrition Platform",
      tech: "PHP, MySQL, Groq AI API, JavaScript, Bootstrap",
      bullets: [
        "Built an AI-powered healthcare platform featuring personalized nutrition recommendations, gamification and an admin dashboard.",
        "Integrated Groq AI, secure session management and SQL injection prevention."
      ]
    },
    {
      title: "Laptop Price Predictor & Recommender",
      tech: "Python, Flask, Streamlit, Scikit-learn, Random Forest",
      bullets: [
        "Trained a Random Forest model on 1,000+ laptop records for accurate price prediction.",
        "Developed Flask APIs, recommendation features, responsive frontend and deployed the application."
      ]
    }
  ];

  const certifications = [
    {
      title: "Google Analytics Certification (GA4)",
      issuer: "Google",
      date: "Apr 2026",
      badge: "Analytics"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google",
      date: "Feb 2026",
      badge: "AI / ML"
    },
    {
      title: "Python for Beginners",
      issuer: "Simplilearn",
      date: "21 May 2026",
      badge: "Programming"
    }
  ];

  const languages = ["English", "Kannada", "Hindi"];

  const technicalCategories = [
    { label: "Programming", items: ["Java", "Python", "JavaScript", "PHP", "C", "C++"] },
    { label: "Frontend", items: ["React.js", "HTML5", "CSS3", "Bootstrap"] },
    { label: "Backend", items: ["Node.js", "Express.js", "Flask", "FastAPI"] },
    { label: "AI/ML", items: ["Scikit-learn", "Pandas", "NumPy", "OpenAI Whisper", "Groq API"] },
    { label: "Databases", items: ["MongoDB", "MySQL"] },
    { label: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Streamlit", "Android Studio", "WAMP"] }
  ];

  return (
    <section id="resume" className="py-24 relative bg-black/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,240,255,0.06),rgba(0,0,0,0))]"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16"
        >
          <div className="flex items-center gap-4">
            <FileText className="text-neon-cyan" size={36} />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Curriculum <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple">Vitae</span>
              </h2>
              <p className="text-gray-400 font-mono text-sm mt-1">
                Official resume details, projects, qualifications & downloadable document
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => setIsPreviewOpen(true)}
              className="px-6 py-3 bg-white/5 border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan hover:text-black rounded-lg transition-all duration-300 font-mono text-sm font-semibold flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-neon-cyan"
            >
              <Eye size={18} /> View PDF Preview
            </button>
            <a 
              href={resumePdfPath}
              download="Suhas_A_Sakri_Resume.pdf"
              className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-black rounded-lg font-mono text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-[1.02]"
            >
              <Download size={18} /> Download Resume PDF
            </a>
            <a 
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Navigation / Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Quick Profile Summary Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-neon-cyan/10 rounded-full blur-2xl group-hover:bg-neon-cyan/20 transition-all"></div>
              
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-neon-cyan" size={20} />
                <h3 className="text-lg font-bold font-mono text-white">SUHAS A SAKRI</h3>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Computer Science Engineering Student | AI & Full Stack Developer
              </p>

              <div className="pt-4 border-t border-white/10 space-y-2.5 font-mono text-xs text-gray-400">
                <div className="flex justify-between">
                  <span>Phone:</span>
                  <span className="text-neon-cyan">+91 9019258533</span>
                </div>
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span className="text-neon-cyan">suhassakri2@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span>College:</span>
                  <span className="text-neon-cyan">Jain College (CSE)</span>
                </div>
                <div className="flex justify-between">
                  <span>CGPA:</span>
                  <span className="text-neon-cyan">8.7 / 10.0</span>
                </div>
              </div>
            </div>

            {/* Tab Selector */}
            <div className="glass-card p-2 rounded-xl border border-white/10 flex flex-col gap-2">
              {[
                { id: 'overview', label: 'Professional Summary', icon: <Briefcase size={16} /> },
                { id: 'projects', label: 'Selected Projects', icon: <FolderGit2 size={16} /> },
                { id: 'skills', label: 'Technical Expertise', icon: <Code2 size={16} /> },
                { id: 'education', label: 'Education & Academic', icon: <GraduationCap size={16} /> },
                { id: 'certifications', label: 'Certifications & Languages', icon: <Award size={16} /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full px-4 py-3 rounded-lg font-mono text-sm flex items-center justify-between transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-neon-blue/20 text-neon-cyan border border-neon-cyan/40 font-semibold shadow-[0_0_10px_rgba(0,240,255,0.1)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {tab.icon}
                    <span>{tab.label}</span>
                  </div>
                  {activeTab === tab.id && <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping"></span>}
                </button>
              ))}
            </div>

            {/* Direct Action Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-neon-purple/10 to-neon-blue/10 border border-neon-purple/30 text-center">
              <FileText className="mx-auto text-neon-purple mb-3" size={32} />
              <h4 className="text-white font-bold mb-2">Original Resume Document</h4>
              <p className="text-gray-400 text-xs mb-4">
                Download the exact PDF document (`Suhas_A_Sakri_Resume.pdf`) to share with recruiters or employers.
              </p>
              <a
                href={resumePdfPath}
                download="Suhas_A_Sakri_Resume.pdf"
                className="w-full py-2.5 px-4 bg-neon-purple/20 hover:bg-neon-purple text-white hover:text-black border border-neon-purple/50 rounded-lg text-xs font-mono font-bold uppercase transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Download size={14} /> Download PDF
              </a>
            </div>
          </motion.div>

          {/* Interactive Details Display */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/10 min-h-[500px]">
              
              {/* Tab 1: Overview */}
              {activeTab === 'overview' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                      <Sparkles className="text-neon-cyan" size={24} /> Professional Summary
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base bg-white/5 p-5 rounded-xl border border-white/5">
                      Computer Science Engineering undergraduate with hands-on experience in Artificial Intelligence, Machine Learning, and Full Stack Development. Experienced in building scalable web applications, REST APIs, AI-powered solutions, and data-driven systems using React, FastAPI, Flask, Node.js, Python, and MongoDB. Passionate about developing production-ready software, solving real-world problems, and continuously learning modern technologies.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-mono text-neon-cyan mb-4 uppercase tracking-wider">Key Highlights</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-neon-blue/40 transition-colors">
                        <div className="text-neon-blue font-bold text-lg mb-1">AI Speech & NLP</div>
                        <p className="text-gray-400 text-xs">Integrated OpenAI Whisper for real-time speech analysis & Groq AI for healthcare platforms.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-neon-purple/40 transition-colors">
                        <div className="text-neon-purple font-bold text-lg mb-1">Full Stack Development</div>
                        <p className="text-gray-400 text-xs">Built production applications with React, Node.js, Express, FastAPI, Flask, PHP, MongoDB & MySQL.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-neon-cyan/40 transition-colors">
                        <div className="text-neon-cyan font-bold text-lg mb-1">Machine Learning Models</div>
                        <p className="text-gray-400 text-xs">Trained Random Forest algorithms on 1,000+ data records with high accuracy.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-400/40 transition-colors">
                        <div className="text-emerald-400 font-bold text-lg mb-1">Academic Excellence</div>
                        <p className="text-gray-400 text-xs">Consistently high academics (8.7 CGPA B.E. CSE, 91.8% II PUC, 89.28% SSLC).</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setIsPreviewOpen(true)}
                      className="text-neon-cyan hover:underline font-mono text-sm flex items-center gap-2"
                    >
                      Click here to view PDF document viewer <ExternalLink size={14} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: Projects */}
              {activeTab === 'projects' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <FolderGit2 className="text-neon-cyan" size={24} /> Selected Projects
                  </h3>

                  <div className="space-y-6">
                    {selectedProjects.map((proj, idx) => (
                      <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/40 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <h4 className="text-xl font-bold text-white">{proj.title}</h4>
                          <span className="text-neon-cyan font-mono text-xs px-3 py-1 bg-white/5 rounded-full border border-white/10">
                            {proj.tech.split(',')[0]}
                          </span>
                        </div>
                        <p className="text-xs font-mono text-neon-blue mb-4">{proj.tech}</p>
                        <ul className="space-y-2">
                          {proj.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="text-gray-300 text-sm flex items-start gap-2 leading-relaxed">
                              <span className="text-neon-cyan mt-1">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Skills */}
              {activeTab === 'skills' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Code2 className="text-neon-cyan" size={24} /> Technical Expertise
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {technicalCategories.map((cat, i) => (
                      <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/5">
                        <h4 className="text-neon-cyan font-mono text-sm font-bold mb-3 uppercase tracking-wider">{cat.label}</h4>
                        <div className="flex flex-wrap gap-2">
                          {cat.items.map((item, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-200 text-xs font-mono hover:border-neon-cyan/50 hover:text-neon-cyan transition-colors"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tab 4: Education */}
              {activeTab === 'education' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <GraduationCap className="text-neon-purple" size={24} /> Education Background
                  </h3>

                  <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-white/5 border border-neon-purple/30 relative">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h4 className="text-xl font-bold text-white">B.E. Computer Science & Engineering</h4>
                        <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full font-mono text-xs font-bold w-max">
                          2023 - 2027 | CGPA: 8.7
                        </span>
                      </div>
                      <p className="text-neon-cyan font-mono text-sm mb-3">Jain College of Engineering and Technology</p>
                      <p className="text-gray-400 text-sm">
                        Pursuing B.E. in Computer Science Engineering. Hands-on expertise in Artificial Intelligence, Machine Learning, Data Structures, Algorithms, REST APIs, and scalable software systems.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h4 className="text-lg font-bold text-white">II PUC</h4>
                        <span className="px-3 py-1 bg-white/10 text-slate-300 rounded-full font-mono text-xs font-bold w-max">
                          91.8%
                        </span>
                      </div>
                      <p className="text-gray-400 font-mono text-sm">Mahesh PU College</p>
                    </div>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h4 className="text-lg font-bold text-white">SSLC</h4>
                        <span className="px-3 py-1 bg-white/10 text-slate-300 rounded-full font-mono text-xs font-bold w-max">
                          89.28%
                        </span>
                      </div>
                      <p className="text-gray-400 font-mono text-sm">SBIOAES English Medium School</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 5: Certifications & Languages */}
              {activeTab === 'certifications' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                      <Award className="text-neon-blue" size={24} /> Certifications
                    </h3>

                    <div className="space-y-4">
                      {certifications.map((cert, i) => (
                        <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-4 hover:border-neon-blue/40 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-neon-blue/10 text-neon-blue rounded-lg">
                              <CheckCircle2 size={20} />
                            </div>
                            <div>
                              <h4 className="text-white font-bold">{cert.title}</h4>
                              <p className="text-gray-400 font-mono text-xs">{cert.issuer} • {cert.date}</p>
                            </div>
                          </div>
                          <span className="px-3 py-1 bg-white/5 text-neon-cyan rounded-full font-mono text-xs border border-white/10 hidden sm:inline-block">
                            {cert.badge}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Languages className="text-neon-cyan" size={20} /> Languages
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {languages.map((lang, idx) => (
                        <div key={idx} className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 font-mono text-sm text-slate-200 flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-neon-cyan"></span>
                          <span>{lang}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

            </div>
          </motion.div>

        </div>
      </div>

      {/* PDF Interactive Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPreviewOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neon-dark border border-white/20 w-full max-w-5xl h-[90vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl relative"
            >
              {/* Modal Header */}
              <div className="p-4 md:px-6 bg-black/60 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="text-neon-cyan" size={22} />
                  <div>
                    <h3 className="text-white font-bold font-mono text-sm md:text-base">Suhas_A_Sakri_Resume.pdf</h3>
                    <p className="text-gray-400 text-xs">Official Resume PDF</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a 
                    href={resumePdfPath}
                    download="Suhas_A_Sakri_Resume.pdf"
                    className="px-4 py-2 bg-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan hover:text-black border border-neon-cyan/50 rounded text-xs font-mono font-bold uppercase transition-all flex items-center gap-2"
                  >
                    <Download size={14} /> Download
                  </a>
                  <button 
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-2 rounded-lg bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal PDF Viewer Body */}
              <div className="flex-1 bg-neutral-900 w-full h-full relative">
                <iframe 
                  src={`${resumePdfPath}#toolbar=1&navpanes=0`} 
                  title="Suhas A Sakri Resume Preview" 
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
