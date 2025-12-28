import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-slate-200 selection:bg-primary-500/30 selection:text-primary-200">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <footer className="bg-dark-100 py-8 text-center text-slate-500 text-sm border-t border-slate-800">
          <div className="container mx-auto px-6">
            <p className="mb-2">© {new Date().getFullYear()} Carlos Barbosa. All rights reserved.</p>
            <p className="text-slate-600">Built with React & Tailwind CSS. Deployed on GitHub Pages.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
