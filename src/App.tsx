import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="bg-neon-dark min-h-screen selection:bg-neon-blue/30 selection:text-neon-cyan text-slate-300 font-sans antialiased relative">
      {/* Animated Dark Theme Background */}
      <BackgroundAnimation />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
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
