import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone size={20} className="text-neon-cyan" />,
      label: "PHONE",
      value: "+91 9019258533"
    },
    {
      icon: <Mail size={20} className="text-neon-cyan" />,
      label: "EMAIL",
      value: "suhassakri2@gmail.com"
    },
    {
      icon: <MapPin size={20} className="text-neon-cyan" />,
      label: "LOCATION",
      value: "Pn:9 Laxmi Nivas, Pearl layout, Keshwapur, Hubballi-580023"
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-black/60">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-neon-cyan/10 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">Connection</span></h2>
          <p className="text-gray-400 max-w-lg mx-auto">Open for independent projects, collaborations, and full-time opportunities. Send me a transmission.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-8 mt-4">
            {contactInfo.map((info, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-sm font-mono text-gray-500 mb-1">{info.label}_</h4>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-8 flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:shadow-neon-blue transition-all duration-300 group">
                <FaGithub size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/suhas-sakri-b72565397" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:shadow-neon-blue transition-all duration-300 group">
                <FaLinkedin size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:shadow-neon-blue transition-all duration-300 group">
                <FaTwitter size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 glass-card p-8 md:p-12 rounded-2xl relative">
            {/* Glowing corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-cyan rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-cyan rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan rounded-br-2xl"></div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-neon-blue block">NAME_</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-neon-blue block">EMAIL_</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-mono text-neon-blue block">MESSAGE_</label>
                <textarea 
                  rows={5}
                  className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all resize-none"
                  placeholder="Enter your message..."
                ></textarea>
              </div>

              <button className="w-full py-4 bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan hover:text-black font-bold uppercase tracking-widest rounded transition-all duration-300 hover:shadow-neon-cyan">
                Transmit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
