import Hero from './components/Hero';
import Skills from './components/Skills';
import { Experience } from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import './styles/globals.css';

function App() {
  return (
    <>
      <ThemeToggle />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}

export default App;