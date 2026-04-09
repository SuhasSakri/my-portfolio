import { motion } from 'framer-motion';
import { Terminal, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 pt-20">
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full glass-card border-neon-cyan/30 text-neon-cyan font-mono text-sm"
          >
            <Terminal size={14} />
            <span>SYSTEM.READY</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple mt-4"
          >
            SUHAS A SAKRI
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-2xl md:text-4xl text-gray-400 font-mono"
          >
            &gt; Computer Science Engineer
            <span className="animate-pulse text-neon-blue">_</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="max-w-xl text-gray-500 mt-4 text-lg"
          >
            Passionate about algorithmic problem-solving and building progressive software solutions. Expanding my knowledge and capabilities across full-stack and machine learning domains.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a href="#projects" className="px-8 py-3 bg-neon-blue/10 text-neon-blue border border-neon-blue/50 rounded hover:bg-neon-blue hover:text-black hover:shadow-neon-blue transition-all duration-300 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-transparent text-white border border-gray-700 rounded hover:border-white transition-all duration-300 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
