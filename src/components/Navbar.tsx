import { Download } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold font-mono text-white text-glow-blue cursor-pointer">
          &lt;Dev /&gt;
        </a>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {['About', 'Skills', 'Experience', 'Projects', 'Resume', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
          <a
            href="/Suhas_A_Sakri_Resume.pdf"
            download="Suhas_A_Sakri_Resume.pdf"
            className="px-4 py-1.5 bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-black rounded transition-all text-xs font-mono font-bold flex items-center gap-1.5"
          >
            <Download size={14} /> CV
          </a>
        </div>
      </div>
    </nav>
  );
}
