export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold font-mono text-white text-glow-blue cursor-pointer">
          &lt;Dev /&gt;
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-neon-blue transition-colors duration-300 uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
