import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import useSectionTracking from './hooks/useSectionTracking';

function App() {
  useSectionTracking();

  return (
    <div className="min-h-screen bg-surface-deep text-neutral-700">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="py-12 text-center border-t border-neutral-200">
        <p className="font-mono text-xs text-neutral-400 tracking-wide">
          &copy; {new Date().getFullYear()} Carlos Barbosa
        </p>
      </footer>
    </div>
  );
}

export default App;
