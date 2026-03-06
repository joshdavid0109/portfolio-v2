import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { portfolioData } from './data/portfolio';

// Section Components
import Hero from './components/Sections/Hero';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Skills from './components/Sections/Skills';
import Contact from './components/Sections/Contact';

// UI Components
import Chatbot from './components/UI/Chatbot';

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [currentPhase, setCurrentPhase] = useState<string>('INITIALIZING SYSTEM');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Matrix-like background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '0123456789ABCDEF';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0ff';
      ctx.font = fontSize + 'px Orbitron';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Loading animation effect
  useEffect(() => {
    const phases = [
      { text: 'INITIALIZING SYSTEM', progress: 0 },
      { text: 'LOADING PROJECT DATA', progress: 30 },
      { text: 'ESTABLISHING SECURE CONNECTION', progress: 60 },
      { text: 'RENDERING HUD INTERFACE', progress: 90 },
    ];

    let currentProgress = 0;
    let phaseIndex = 0;

    const interval = setInterval(() => {
      currentProgress += 2;
      setLoadingProgress(currentProgress);

      if (currentProgress > phases[phaseIndex + 1]?.progress) {
        phaseIndex++;
        setCurrentPhase(phases[phaseIndex].text);
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 800);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-[100] overflow-hidden font-['Orbitron']">
        <div className="max-w-md w-full px-10 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl font-bold text-cyan-400 mb-8 tracking-[0.2em]"
          >
            LOADING...
          </motion.h1>

          <div className="relative h-1 w-full bg-gray-900 overflow-hidden mb-4">
            <motion.div
              className="absolute top-0 left-0 h-full bg-cyan-500 shadow-[0_0_10px_#0ff]"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <div className="flex justify-between text-[10px] text-cyan-600 uppercase tracking-widest">
            <span>{currentPhase}</span>
            <span>{loadingProgress}%</span>
          </div>
        </div>
      </div>
    );
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="relative min-h-screen bg-black text-gray-100 font-['Orbitron',sans-serif] selection:bg-cyan-500/30 overflow-x-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 opacity-20 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-gradient-radial from-cyan-900/10 via-transparent to-black pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-2xl font-black text-cyan-400 tracking-tighter cursor-default"
          >
            JD<span className="text-white">.DEV</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`text-xs uppercase tracking-[0.2em] transition-all hover:text-cyan-400 relative py-2 ${activeSection === item.id ? 'text-cyan-400' : 'text-gray-400'}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_5px_#0ff]"
                  />
                )}
              </a>
            ))}
          </div>

          <button className="md:hidden text-cyan-400 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-panel border-b border-cyan-500/20 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-sm uppercase tracking-widest ${activeSection === item.id ? 'text-cyan-400' : 'text-gray-400'}`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-cyan-500/10 text-center relative z-10 bg-black/60">
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.5em]">
          © 2026 {portfolioData.name.toUpperCase()} | END_OF_TRANSMISSION
        </p>
      </footer>

      {/* Persistent UI Components */}
      <Chatbot />
    </div>
  );
};

export default App;