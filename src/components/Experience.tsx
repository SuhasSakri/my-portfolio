import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Experience() {
  const education = [
    {
      degree: "B.E. in Computer Science and Engineering",
      institution: "Jain College of Engineering and Technology, Hubballi",
      period: "2023 - 2027",
      desc: "Currently pursuing B.E. Achieved an impressive CGPA of 8.7 so far. Engaged with rigorous coursework involving data structures, algorithms, machine learning, and advanced software engineering."
    },
    {
      degree: "II PUC",
      institution: "Mahesh PU College, Hubballi",
      period: "Completed",
      desc: "Graduated with an outstanding percentage of 91.8%. Focused heavily on Mathematics and Sciences to build a strong foundational logic framework."
    },
    {
      degree: "SSLC",
      institution: "SBIOAES English Medium School, Hubballi",
      period: "Completed",
      desc: "Completed secondary education passing with an excellent 89.28%. Built early foundations in computing and logical reasoning."
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <GraduationCap className="text-neon-purple" size={32} />
          <h2 className="text-4xl md:text-5xl font-bold">Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">Background</span></h2>
        </motion.div>

        <div className="relative border-l border-white/20 ml-4 md:ml-8 space-y-12 pb-8">
          {education.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute w-4 h-4 rounded-full bg-neon-dark border-2 border-neon-purple left-[-8.5px] top-2 shadow-[0_0_10px_#b026ff]"></div>
              
              <div className="glass-card p-6 md:p-8 rounded-xl hover:border-neon-purple/50 transition-colors duration-300 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none"></div>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors max-w-lg">{edu.degree}</h3>
                  <span className="text-neon-cyan font-mono text-sm px-3 py-1 bg-white/5 rounded-full inline-block w-max mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                <h4 className="text-lg text-gray-400 mb-4 font-mono leading-relaxed">{edu.institution}</h4>
                <p className="text-gray-500 leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
