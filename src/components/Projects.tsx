import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, MonitorPlay } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Laptop Price Predictor & Recommender",
    category: "Machine Learning / Fullstack",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    tech: ["Python", "Flask", "Streamlit", "scikit-learn", "JavaScript"],
    desc: "Full-stack ML web application for laptop price prediction and budget-based recommendations. Trained a Random Forest Regressor on 1000+ laptop records. Built a Flask backend with API endpoints and developed a responsive frontend deployed on Render.",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "GrowRight - Kids Health Platform",
    category: "Fullstack Web",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    tech: ["PHP", "MySQL", "Groq AI API", "JavaScript", "Bootstrap"],
    desc: "Full-stack web application for children's fitness and nutrition management. Integrated Groq AI API (Llama 3.3-70B) for real-time health assistance. Features region-based nutrition recommendations, gamification, and age-specific fitness programs with comprehensive admin oversight.",
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <MonitorPlay className="text-neon-blue" size={32} />
          <h2 className="text-4xl md:text-5xl font-bold">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Projects</span></h2>
          <div className="h-px bg-gradient-to-r from-neon-blue/50 to-transparent flex-1 ml-4 hidden md:block"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-neon-blue/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <motion.img 
                  layoutId={`card-image-${project.id}`}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-mono text-neon-cyan mb-2 block">{project.category}</span>
                <motion.h3 layoutId={`card-title-${project.id}`} className="text-2xl font-bold text-white mb-2">{project.title}</motion.h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-1 bg-white/10 rounded text-gray-300">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
              <motion.div 
                layoutId={`card-container-${selectedProject.id}`}
                onClick={(e) => e.stopPropagation()}
                className="bg-neon-dark border border-white/10 w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl relative"
                style={{ boxShadow: '0 0 50px rgba(0, 240, 255, 0.2)' }}
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-neon-blue hover:text-black transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className="relative h-64 sm:h-80 w-full">
                  <motion.img 
                    layoutId={`card-image-${selectedProject.id}`}
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neon-dark to-transparent"></div>
                </div>
                
                <div className="p-8 relative -mt-16 z-10">
                  <span className="text-sm font-mono text-neon-cyan block mb-2">{selectedProject.category}</span>
                  <motion.h3 layoutId={`card-title-${selectedProject.id}`} className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                    {selectedProject.title}
                  </motion.h3>
                  
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    {selectedProject.desc}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-white font-bold mb-3 font-mono text-sm">TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-neon-blue font-mono text-sm">{t}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    <a href={selectedProject.demo} className="px-6 py-2 bg-neon-blue text-black font-bold uppercase tracking-wider text-sm rounded hover:shadow-neon-blue transition-all flex items-center gap-2">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a href={selectedProject.github} className="px-6 py-2 bg-white/10 text-white font-bold uppercase tracking-wider text-sm rounded hover:bg-white/20 transition-all flex items-center gap-2">
                      <FaGithub size={16} /> Source
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
