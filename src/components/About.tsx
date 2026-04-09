import { motion } from 'framer-motion';
import { User, Code2, BrainCircuit, Database } from 'lucide-react';

export default function About() {
  const cards = [
    { icon: <Code2 size={24} />, title: "Full-Stack web", desc: "Crafting end-to-end web apps" },
    { icon: <BrainCircuit size={24} />, title: "Machine Learning", desc: "Predictive models & data science" },
    { icon: <Database size={24} />, title: "Backend Systems", desc: "PHP, Flask, MySQL architectures" }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <User className="text-neon-purple" size={32} />
          <h2 className="text-4xl md:text-5xl font-bold">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">Me</span></h2>
          <div className="h-px bg-gradient-to-r from-neon-purple/50 to-transparent flex-1 ml-4 hidden md:block"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glowing borders */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative glass-card p-8 rounded-xl backdrop-blur-xl">
              <h3 className="text-2xl font-mono text-white mb-4 flex items-center gap-2">
                <span className="text-neon-cyan">&gt;</span> Purpose & Vision
              </h3>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  My objective is to secure a challenging position in a reputable organization to continually expand my learning, knowledge, and capabilities. 
                </p>
                <p>
                  I am driven by the desire to proactively utilize and refine my technical understanding and interpersonal skills. Through dedication and analytical thinking, my ultimate goal is to contribute effectively to the progressive growth and success of the organization I am part of.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-6 rounded-xl flex items-center gap-6 hover:border-neon-blue/50 transition-colors duration-300 group cursor-default"
              >
                <div className="p-4 rounded-full bg-white/5 text-neon-blue group-hover:text-neon-cyan group-hover:shadow-neon-cyan transition-all duration-300">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1 tracking-wide">{card.title}</h4>
                  <p className="text-gray-500 font-mono text-sm">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
