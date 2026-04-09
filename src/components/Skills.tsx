import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Programming",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "C / C++", level: 80 },
        { name: "JavaScript", level: 88 }
      ]
    },
    {
      title: "Web & Databases",
      skills: [
        { name: "HTML / CSS", level: 95 },
        { name: "PHP", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Android Studio", level: 75 },
        { name: "VS Code / WAMP", level: 90 },
        { name: "Keil u Vision 4 / Latex", level: 70 },
        { name: "Analytical Thinking", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-black/40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(176,38,255,0.1),rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-end gap-4 mb-16"
        >
          <div className="h-px bg-gradient-to-l from-neon-blue/50 to-transparent flex-1 mr-4 hidden md:block"></div>
          <h2 className="text-4xl md:text-5xl font-bold">Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">Arsenal</span></h2>
          <Layers className="text-neon-cyan" size={32} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-mono text-sm">{skill.name}</span>
                      <span className="text-neon-cyan font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                        className={`h-full rounded-full bg-gradient-to-r ${idx === 0 ? 'from-neon-blue to-neon-cyan' : idx === 1 ? 'from-neon-purple to-neon-blue' : 'from-gray-500 to-white'}`}
                        style={{ boxShadow: idx === 0 ? '0 0 10px rgba(0, 240, 255, 0.8)' : idx === 1 ? '0 0 10px rgba(176, 38, 255, 0.8)' : '0 0 10px rgba(255,255,255,0.5)' }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
