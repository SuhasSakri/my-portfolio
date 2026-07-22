import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  // Generate a deterministic set of subtle floating particles
  const particles = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    size: (i % 3) + 2, // 2px to 4px
    x: ((i * 17) % 100), // percentage x
    y: ((i * 23) % 100), // percentage y
    duration: 12 + (i % 8) * 2, // 12s to 26s
    delay: (i % 5) * 1.5,
    opacity: 0.15 + (i % 4) * 0.1,
    color: i % 2 === 0 ? '#00f0ff' : '#b026ff'
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#0a0a0c]">
      
      {/* 1. Animated Ambient Gradient Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-neon-cyan/15 rounded-full blur-[120px]"
      />

      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -60, 0],
          y: [0, 40, 0]
        }}
        transition={{ 
          duration: 22, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-neon-purple/15 rounded-full blur-[140px]"
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, 50, 0]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -bottom-40 left-1/4 w-[32rem] h-[32rem] bg-neon-blue/10 rounded-full blur-[150px]"
      />

      {/* 2. Cybernetic Animated Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70"></div>

      {/* 3. Floating Glowing Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: `${p.y}%`, x: `${p.x}%`, opacity: p.opacity }}
          animate={{ 
            y: [`${p.y}%`, `${(p.y - 40 + 100) % 100}%`, `${p.y}%`],
            x: [`${p.x}%`, `${(p.x + (p.id % 2 === 0 ? 8 : -8) + 100) % 100}%`, `${p.x}%`],
            opacity: [p.opacity, p.opacity * 1.8, p.opacity]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}`
          }}
        />
      ))}

      {/* 4. Subtle Moving Light Beam Scanline */}
      <motion.div 
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent pointer-events-none opacity-50"
      />
    </div>
  );
}
