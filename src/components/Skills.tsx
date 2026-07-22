import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Terminal, Cpu, Database, Wrench, Sparkles } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { id: 'All', label: 'All Technologies', icon: <Layers size={16} /> },
    { id: 'Programming', label: 'Programming', icon: <Terminal size={16} /> },
    { id: 'Frontend', label: 'Frontend', icon: <Sparkles size={16} /> },
    { id: 'Backend', label: 'Backend', icon: <Cpu size={16} /> },
    { id: 'AI/ML', label: 'AI & Machine Learning', icon: <Sparkles size={16} /> },
    { id: 'Databases', label: 'Databases', icon: <Database size={16} /> },
    { id: 'Tools', label: 'Tools & Ecosystem', icon: <Wrench size={16} /> },
  ];

  const skillGroups = [
    {
      category: "Programming",
      title: "Core Languages",
      icon: <Terminal className="text-neon-blue" size={24} />,
      skills: [
        { name: "Python", level: "Advanced", desc: "AI models, FastAPI, Flask, Data Science" },
        { name: "Java", level: "Advanced", desc: "Object-oriented software & data structures" },
        { name: "JavaScript", level: "Advanced", desc: "Full-stack web & asynchronous Node.js" },
        { name: "PHP", level: "Proficient", desc: "Backend web architecture & MySQL integration" },
        { name: "C / C++", level: "Proficient", desc: "System fundamentals & memory allocation" },
      ]
    },
    {
      category: "Frontend",
      title: "Frontend Engineering",
      icon: <Sparkles className="text-neon-purple" size={24} />,
      skills: [
        { name: "React.js", level: "Advanced", desc: "Dynamic UIs, hooks & modern SPA design" },
        { name: "HTML5 & CSS3", level: "Advanced", desc: "Semantic markup, flexbox, grid & animations" },
        { name: "Bootstrap", level: "Proficient", desc: "Responsive web layouts & UI components" },
      ]
    },
    {
      category: "Backend",
      title: "Backend & REST APIs",
      icon: <Cpu className="text-neon-cyan" size={24} />,
      skills: [
        { name: "Node.js & Express", level: "Advanced", desc: "Scalable backend services & JWT auth" },
        { name: "FastAPI", level: "Advanced", desc: "High-performance Python microservices" },
        { name: "Flask", level: "Proficient", desc: "RESTful web APIs & ML model integration" },
      ]
    },
    {
      category: "AI/ML",
      title: "Artificial Intelligence & ML",
      icon: <Sparkles className="text-amber-400" size={24} />,
      skills: [
        { name: "OpenAI Whisper", level: "Advanced", desc: "Real-time speech recognition & NLP" },
        { name: "Groq AI API", level: "Advanced", desc: "Llama 3 LLM integration & fast inference" },
        { name: "Scikit-learn", level: "Advanced", desc: "Random Forest & predictive modeling" },
        { name: "Pandas & NumPy", level: "Advanced", desc: "Data processing, cleaning & analytics" },
      ]
    },
    {
      category: "Databases",
      title: "Database Management",
      icon: <Database className="text-emerald-400" size={24} />,
      skills: [
        { name: "MongoDB", level: "Advanced", desc: "NoSQL schema design & microservice state" },
        { name: "MySQL", level: "Advanced", desc: "Relational queries, indexing & session data" },
      ]
    },
    {
      category: "Tools",
      title: "Developer Ecosystem",
      icon: <Wrench className="text-sky-400" size={24} />,
      skills: [
        { name: "Git & GitHub", level: "Advanced", desc: "Version control & CI/CD workflows" },
        { name: "Postman", level: "Advanced", desc: "API testing, debugging & payload design" },
        { name: "VS Code & Streamlit", level: "Advanced", desc: "IDE optimization & fast ML demos" },
        { name: "Android Studio & WAMP", level: "Proficient", desc: "Mobile tooling & local server stacks" },
      ]
    }
  ];

  const filteredGroups = selectedCategory === 'All' 
    ? skillGroups 
    : skillGroups.filter(g => g.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-black/40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,240,255,0.06),rgba(0,0,0,0))]"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12"
        >
          <div className="flex items-center gap-4">
            <Layers className="text-neon-cyan" size={32} />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple">Arsenal</span>
              </h2>
              <p className="text-gray-400 font-mono text-sm mt-1">
                Core technologies, frameworks & specialization domains
              </p>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 flex items-center gap-2 border ${
                  selectedCategory === cat.id
                    ? 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/50 shadow-[0_0_15px_rgba(0,240,255,0.2)] font-bold'
                    : 'bg-white/5 text-gray-400 border-white/10 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skill Category Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGroups.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-neon-cyan/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
                      {group.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white font-mono tracking-wide">{group.title}</h3>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest px-2 py-1 bg-white/5 rounded border border-white/5">
                    {group.skills.length} Stack
                  </span>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          skill.level === 'Advanced' 
                            ? 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30' 
                            : 'bg-neon-purple/10 text-neon-purple border-neon-purple/30'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs font-mono">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
