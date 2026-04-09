import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-neon-dark min-h-screen selection:bg-neon-blue/30 selection:text-neon-cyan text-slate-300 font-sans antialiased">
      {/* Global Particle overlay (Optional subtle background styling) */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,rgba(0,240,255,0.05),rgba(10,10,10,1))]"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 border-t border-white/10 text-center relative z-10 glass">
        <p className="text-gray-500 font-mono text-sm">
          &copy; {new Date().getFullYear()} Suhas A Sakri. Designed & Engineered with Precision.
        </p>
      </footer>
    </div>
  );
}

export default App;
