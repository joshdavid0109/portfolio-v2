import React, { useEffect, useRef, useState } from 'react';

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [currentPhase, setCurrentPhase] = useState<string>('INITIALIZING SYSTEM');
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Loading animation effect
  useEffect(() => {
    const phases = [
      { text: 'INITIALIZING SYSTEM', progress: 0 },
      { text: 'LOADING ASSETS', progress: 25 },
      { text: 'ESTABLISHING CONNECTION', progress: 50 },
      { text: 'RENDERING INTERFACE', progress: 75 },
    ];

    let currentProgress = 0;
    let phaseIndex = 0;

    const interval = setInterval(() => {
      currentProgress += 2;
      setLoadingProgress(currentProgress);

      // Update phase based on progress
      if (currentProgress > 25 && phaseIndex === 0) {
        setCurrentPhase(phases[1].text);
        phaseIndex = 1;
      } else if (currentProgress > 50 && phaseIndex === 1) {
        setCurrentPhase(phases[2].text);
        phaseIndex = 2;
      } else if (currentProgress > 75 && phaseIndex === 2) {
        setCurrentPhase(phases[3].text);
        phaseIndex = 3;
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setLoading(false);
          }, 1000); // Wait for fade animation to complete
        }, 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  

  interface Project {
    title: string;
    desc: string;
    tech: string;
    image?: string;     
    gallery?: string[];  
    liveUrl?: string;
    repoUrl?: string;
  }


  interface Tech {
    name: string;
    icon: string;
  }

  const projects: Project[] = [
    {
      title: "D'Xplorer Travel & Tours Web & App",
      desc: "Cross-platform Travel and Tours booking app using React Native & React (TypeScript) with PostgreSQL (Supabase): RPC, Edge Functions, Webhooks, Xendit Payment Integration. Admin panel for managing users, bookings, and content.",
      tech: "React Native, React, Supabase, Tailwind",
      image: "/projects/dxplorer/cover.png",
      liveUrl: "https://dxplorer.app",
      repoUrl: "https://github.com/joshdavid0109/dxplorer",
    },
    {
      title: "Blue Phoenix Reviewer App and Web CMS",
      desc: "Bar Exam preparation mobile app (Android/iOS) using React Native (TypeScript) with PostgreSQL (Supabase): RPC, Edge Functions, Webhooks, Real-time. CMS for admin using React to edit content of reviewers.",
      tech: "React Native, React, Supabase, TypeScript",
      image: "/projects/dxplorer/cover.png",
      liveUrl: "https://dxplorer.app",
      repoUrl: "https://github.com/joshdavid0109/dxplorer",
    },
    {
      title: "Ilocano Language Learning App",
      desc: "Adaptive gamified learning using sequence-to-sequence model for translating English to Ilocano sentences with interactive exercises and progress tracking.",
      tech: "Flask, Bootstrap, Seq2Seq NLP",
      image: "/projects/dxplorer/cover.png",
      liveUrl: "https://dxplorer.app",
      repoUrl: "https://github.com/joshdavid0109/dxplorer",
    },
    {
      title: "Cloud-based RoBERTa SDG Assessment Tool",
      desc: "Machine Learning Model (RoBERTa) trained with scraped data from different HEIs in the Philippines integrated in a website to assess HEI documents with their compliance to SDG.",
      tech: "NLP, RoBERTa, Google Cloud, Python",
      image: "/projects/dxplorer/cover.png",
      liveUrl: "https://dxplorer.app",
      repoUrl: "https://github.com/joshdavid0109/dxplorer",
    },
  ];

  const techStack: Tech[] = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'n8n', icon: 'https://cdn.simpleicons.org/n8n/EF6C00' },
  ];


  const skillGroups = [
    {
      title: 'Languages',
      skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'Kotlin'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        'React', 'React Native', 'Laravel', 'Express.js',
        'Flask', 'Bootstrap', 'Tailwind', 'Tauri',
      ],
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        'TensorFlow', 'PyTorch', 'Scikit-learn',
        'Keras', 'NLP', 'LLMs', 'RoBERTa',
      ],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'Firebase', 'Supabase'],
    },
    {
      title: 'Tools',
      skills: [
        'Git', 'n8n', 'Figma', 'Docker', 'Postman', 'VS Code',
      ],
    },
    {
      title: 'Other',
      skills: [
        'REST APIs', 'GitHub Actions', 'RLS Policies',
        'Photoshop', 'Lightroom', 'Premiere Pro', 'After Effects',
      ],
    },
  ];

  const sections: string[] = ['home', 'projects', 'skills', 'experience', 'contact'];

  // Loading screen
  if (loading) {
    return (
      <div className={`fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.3) 25%, rgba(0, 255, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.3) 75%, rgba(0, 255, 255, 0.3) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.3) 25%, rgba(0, 255, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.3) 75%, rgba(0, 255, 255, 0.3) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-scan" />
        </div>

        {/* Main loading content */}
        <div className="relative z-10 max-w-2xl w-full px-6">
          {/* HUD corners */}
          <div className="absolute -top-12 -left-12 w-24 h-24 border-l-4 border-t-4 border-cyan-400 animate-pulse-glow" />
          <div className="absolute -top-12 -right-12 w-24 h-24 border-r-4 border-t-4 border-cyan-400 animate-pulse-glow" />
          <div className="absolute -bottom-12 -left-12 w-24 h-24 border-l-4 border-b-4 border-cyan-400 animate-pulse-glow" />
          <div className="absolute -bottom-12 -right-12 w-24 h-24 border-r-4 border-b-4 border-cyan-400 animate-pulse-glow" />

          <div className="border-2 border-cyan-500/50 bg-black/80 p-12 backdrop-blur-sm">
            {/* Logo/Title */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
                  LOADING ...
                </span>
              </h1>
              <div className="h-1 w-64 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
            </div>

            {/* System initialization messages */}
            <div className="space-y-3 mb-8 font-mono text-sm">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="animate-pulse">{'>'}</span>
                <span className="animate-flicker">{currentPhase}...</span>
              </div>
              
              {loadingProgress > 25 && (
                <div className="flex items-center gap-2 text-green-400 opacity-70">
                  <span>✓</span>
                  <span>Core modules loaded</span>
                </div>
              )}
              
              {loadingProgress > 50 && (
                <div className="flex items-center gap-2 text-green-400 opacity-70">
                  <span>✓</span>
                  <span>Network protocols established</span>
                </div>
              )}
              
              {loadingProgress > 75 && (
                <div className="flex items-center gap-2 text-green-400 opacity-70">
                  <span>✓</span>
                  <span>UI components ready</span>
                </div>
              )}
            </div>

            {/* Progress bar */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs text-cyan-400">
                <span>SYSTEM BOOT</span>
                <span>{loadingProgress}%</span>
              </div>
              
              <div className="relative h-3 bg-black border-2 border-cyan-500/50 overflow-hidden">
                {/* Progress fill */}
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                >
                  {/* Animated glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide" />
                </div>
                
                {/* Grid overlay on progress bar */}
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                  backgroundSize: '20px 100%',
                }} />
              </div>

              {/* Progress segments indicator */}
              <div className="flex gap-1">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 transition-all duration-300 ${
                      i < loadingProgress / 5
                        ? 'bg-cyan-400 shadow-[0_0_5px_rgba(0,255,255,0.8)]'
                        : 'bg-gray-800'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Loading footer */}
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500 uppercase tracking-wider animate-pulse">
                Preparing experience...
              </p>
            </div>
          </div>
        </div>

        {/* Particle effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-['Orbitron',sans-serif] custom-cursor animate-fade-in">

      {/* Animated grid overlay */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.3) 25%, rgba(0, 255, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.3) 75%, rgba(0, 255, 255, 0.3) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.3) 25%, rgba(0, 255, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.3) 75%, rgba(0, 255, 255, 0.3) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />

      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-scan" />
      </div>

      {/* Navigation - Game UI Style */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-cyan-500/30">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="text-2xl sm:text-3xl font-bold tracking-wider relative">
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setActiveSection(section)}
                className={`relative px-4 lg:px-6 py-2 uppercase text-xs lg:text-sm tracking-widest transition-all group ${
                  activeSection === section
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-cyan-300'
                }`}
              >
                {section}
                {activeSection === section && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                )}
                <div className="absolute inset-0 border border-cyan-500/0 group-hover:border-cyan-500/50 transition-all" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400/20 transition-all"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <div className={`w-5 h-0.5 bg-cyan-400 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-5 h-0.5 bg-cyan-400 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-5 h-0.5 bg-cyan-400 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* HUD corner decoration - hidden on mobile */}
          <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none hidden lg:block">
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute top-4 right-12 w-8 h-0.5 bg-cyan-400/50" />
            <div className="absolute top-12 right-4 h-8 w-0.5 bg-cyan-400/50" />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-cyan-500/30 transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-2 space-y-1">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => {
                  setActiveSection(section);
                  setMobileMenuOpen(false);
                }}
                className={`block px-4 py-3 uppercase text-sm tracking-widest transition-all border-l-2 ${
                  activeSection === section
                    ? 'text-cyan-400 border-cyan-400 bg-cyan-400/10'
                    : 'text-gray-400 border-transparent hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-cyan-500/5'
                }`}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section - Game Loading Screen Style */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-900/20 via-transparent to-transparent" />
        
        <div className="relative max-w-6xl w-full z-20">
          {/* HUD Corners - responsive sizing */}
          <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-16 sm:w-24 h-16 sm:h-24 border-l-2 border-t-2 border-cyan-400/50" />
          <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-16 sm:w-24 h-16 sm:h-24 border-r-2 border-t-2 border-cyan-400/50" />
          <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-16 sm:w-24 h-16 sm:h-24 border-l-2 border-b-2 border-cyan-400/50" />
          <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-16 sm:w-24 h-16 sm:h-24 border-r-2 border-b-2 border-cyan-400/50" />

          <div className="text-center space-y-6 sm:space-y-8 p-6 sm:p-8 md:p-12 bg-black/40 backdrop-blur-sm border border-cyan-500/30 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-slide" />
            </div>

            <div className="relative">
              <p className="text-cyan-400 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 uppercase animate-flicker">
              {'// '} System.Initialize()
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-2 relative px-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]">
                  JOSHUA DANIEL DAVID
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 blur-xl -z-10" />
              </h1>
              <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4 px-2">
                <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-cyan-400" />
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 tracking-wider uppercase text-center">
                  AI Business Process Analyst | Full Stack Web and App Developer
                </p>
                <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-cyan-400" />
              </div>
            </div>

            {/* Stats Display - Game Style */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto my-6 sm:my-8">
              <div className="bg-black/60 border border-cyan-500/30 p-3 sm:p-4 relative group hover:border-cyan-400 transition-all">
                <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-all" />
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">10+</div>
                <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="bg-black/60 border border-blue-500/30 p-3 sm:p-4 relative group hover:border-blue-400 transition-all">
                <div className="absolute inset-0 bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-all" />
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">24+</div>
                <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">Skills</div>
              </div>
              <div className="bg-black/60 border border-purple-500/30 p-3 sm:p-4 relative group hover:border-purple-400 transition-all">
                <div className="absolute inset-0 bg-purple-400/5 opacity-0 group-hover:opacity-100 transition-all" />
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">100%</div>
                <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">Committed</div>
              </div>
            </div>

            <div className="flex justify-center gap-4 sm:gap-6 my-6 sm:my-8">
              <a
                href="https://www.linkedin.com/in/joshuadanieldavid"
                target="_blank"
                rel="noreferrer"
                className="relative group"
              >
                <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-0 group-hover:opacity-50 transition-all" />
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400/20 transition-all clip-corner">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-cyan-400 sm:w-5 sm:h-5">
                    <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0zM7 20.452H3.9V9H7v11.452zM5.337 7.433c-1.144 0-2.069-.927-2.069-2.071 0-1.144.925-2.069 2.069-2.069 1.144 0 2.069.925 2.069 2.069 0 1.144-.925 2.071-2.069 2.071zM20.447 20.452h-3.554V14.89c0-1.327-.025-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.656H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.267 2.371 4.267 5.455v6.288z" />
                  </svg>
                </div>
              </a>
              <a
                href="https://github.com/joshdavid0109"
                target="_blank"
                rel="noreferrer"
                className="relative group"
              >
                <div className="absolute inset-0 bg-purple-400 blur-lg opacity-0 group-hover:opacity-50 transition-all" />
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 border-2 border-purple-400 flex items-center justify-center hover:bg-purple-400/20 transition-all clip-corner">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-purple-400 sm:w-5 sm:h-5">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.79 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.47-2.36 1.24-3.19-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.22.96-.27 1.98-.41 3-.41s2.04.14 3 .41c2.29-1.54 3.3-1.22 3.3-1.22.66 1.66.24 2.88.12 3.18.77.83 1.24 1.89 1.24 3.19 0 4.58-2.81 5.59-5.49 5.89.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.56 21.79 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                  </svg>
                </div>
              </a>
            </div>

            <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed border-l-2 border-cyan-400/50 pl-3 sm:pl-4 text-left">
              AI Automation Business Analyst and Full-Stack Developer with experience analyzing business workflows, designing AI-driven automation, and building scalable web and mobile applications using modern frameworks, cloud platforms, and NLP technologies.            
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="relative group px-6 sm:px-8 py-3 border-2 border-cyan-400 text-cyan-400 uppercase tracking-widest text-xs sm:text-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative z-10 group-hover:text-black transition-colors">Download CV</span>
              </a>
              <a
                href="#contact"
                className="relative px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold uppercase tracking-widest text-xs sm:text-sm overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative z-10">Get In Touch</span>
              </a>
            </div>

            {/* Tech Stack Icons */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-cyan-500/30">
              <p className="text-cyan-400 mb-4 sm:mb-6 text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase">{'// '} Tech Stack</p>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center max-w-4xl mx-auto">
                {techStack.map((tech, i) => (
                  <div
                    key={tech.name}
                    className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border border-cyan-500/30 p-1.5 sm:p-2 hover:border-cyan-400 transition-all group bg-black/40"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-all" />
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-cyan-400/50" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-cyan-400/50" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Experience Section - Quest Log Style */}
      <section id="experience" className="relative min-h-screen py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-900/10 via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto z-20">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-cyan-400 text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">{'// '}Quest Log</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                EXPERIENCE
              </span>
            </h2>
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-4" />
          </div>

          <div className="relative bg-black/60 border-2 border-cyan-500/30 p-6 sm:p-8 hover:border-cyan-400 transition-all group mb-10">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-l-2 border-t-2 border-cyan-400" />
            <div className="absolute top-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-r-2 border-t-2 border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-l-2 border-b-2 border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-r-2 border-b-2 border-cyan-400" />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400">
                  AI Business Process Analyst
                </h3>
                <div className="text-purple-400 text-xs border border-purple-400/50 px-3 py-1 self-start">
                  CONTRACTUAL
                </div>
              </div>
              <p className="text-gray-400 mb-4 text-xs sm:text-sm">
                Pop AI Technologies | October 2025 - February 2026
              </p>
              <div className="h-px w-full bg-gradient-to-r from-cyan-400/50 to-transparent mb-4" />
              <ul className="text-sm sm:text-base text-gray-300 leading-relaxed space-y-2">
                <li>• Analyze and map business processes to identify areas for AI and automation integration</li>
                <li>• Translate business needs into AI solution requirements and workflows</li>
                <li>• Create and test automation prototypes to ensure technical feasibility and business value</li>
                <li>• Collaborate with dev team to design and validate AI-driven process improvements</li>
                <li>• Evaluate performance of AI systems and ensure continuous optimization</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-12 sm:mt-16">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <p className="text-cyan-400 text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                {'// '} Education
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/50 to-transparent" />
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="relative bg-black/60 border-2 border-cyan-500/30 p-6 sm:p-8 hover:border-cyan-400 transition-all group">
                <div className="absolute top-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-l-2 border-t-2 border-cyan-400" />
                <div className="absolute top-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-r-2 border-t-2 border-cyan-400" />
                <div className="absolute bottom-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-l-2 border-b-2 border-cyan-400" />
                <div className="absolute bottom-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-r-2 border-b-2 border-cyan-400" />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-cyan-400">
                      Bachelor of Science in Computer Science
                    </h3>
                    <div className="text-yellow-400 text-xs border border-yellow-400/50 px-3 py-1 self-start whitespace-nowrap">
                      MAGNA CUM LAUDE
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4 text-xs sm:text-sm">
                    Saint Louis University | August 2021 - June 2025
                  </p>
                  <div className="h-px w-full bg-gradient-to-r from-cyan-400/50 to-transparent mb-4" />
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Graduated with Magna Cum Laude honors. Presented research at national and international conferences including Philippine Computing Science Congress and IEEE ISCI2025.
                  </p>
                </div>
              </div>

              <div className="relative bg-black/60 border-2 border-cyan-500/30 p-6 sm:p-8 hover:border-cyan-400 transition-all group">
                <div className="absolute top-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-l-2 border-t-2 border-cyan-400" />
                <div className="absolute top-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-r-2 border-t-2 border-cyan-400" />
                <div className="absolute bottom-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-l-2 border-b-2 border-cyan-400" />
                <div className="absolute bottom-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-r-2 border-b-2 border-cyan-400" />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-cyan-400">
                      Science, Technology, Engineering, and Mathematics
                    </h3>
                    <div className="text-green-400 text-xs border border-green-400/50 px-3 py-1 self-start whitespace-nowrap">
                      HIGH HONORS
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4 text-xs sm:text-sm">
                    University of the Cordilleras | August 2019 - May 2021
                  </p>
                  <div className="h-px w-full bg-gradient-to-r from-cyan-400/50 to-transparent mb-4" />
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Graduated with High Honors specializing in STEM track.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-12 sm:mt-16">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <p className="text-cyan-400 text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                {'// '}Certifications & Achievements
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/50 to-transparent" />
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-black/60 border border-cyan-500/30 p-3 sm:p-4 hover:border-cyan-400 transition-all">
                <div className="text-xs sm:text-sm text-cyan-400 mb-1">Electronic Data Processing Specialist Eligibility</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Civil Service Commission • September 2025</div>
              </div>
              <div className="bg-black/60 border border-cyan-500/30 p-3 sm:p-4 hover:border-cyan-400 transition-all">
                <div className="text-xs sm:text-sm text-cyan-400 mb-1">12th TOPCIT Philippines</div>
                <div className="text-[10px] sm:text-xs text-gray-400">IITP • July 2025</div>
              </div>
              <div className="bg-black/60 border border-cyan-500/30 p-3 sm:p-4 hover:border-cyan-400 transition-all">
                <div className="text-xs sm:text-sm text-cyan-400 mb-1">AI - Natural Language Processing Capacity Program</div>
                <div className="text-[10px] sm:text-xs text-gray-400">National University • March 2024</div>
              </div>
              <div className="bg-black/60 border border-cyan-500/30 p-3 sm:p-4 hover:border-cyan-400 transition-all">
                <div className="text-xs sm:text-sm text-cyan-400 mb-1">ICT Specialist - Computer Programming</div>
                <div className="text-[10px] sm:text-xs text-gray-400">DICT • February 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Mission Select Style */}
      <section id="projects" className="relative min-h-screen py-10 sm:py-2 md:py-10 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto z-20">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-cyan-400 text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">{'// '}Mission Archives</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                FEATURED PROJECTS
              </span>
            </h2>
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative bg-black/60 border-2 border-cyan-500/30 overflow-hidden hover:border-cyan-400 transition-all"
              >
                {/* Image Preview */}
                {project.image && (
                  <div className="relative h-40 sm:h-48 overflow-hidden border-b border-cyan-500/30">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-2 left-4 text-cyan-400 text-xs tracking-widest">
                      PROJECT #{String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 sm:p-8 relative z-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-px flex-1 bg-cyan-400/30" />
                    <p className="text-[10px] sm:text-xs text-cyan-400 uppercase tracking-wider">
                      {project.tech}
                    </p>
                    <div className="h-px flex-1 bg-cyan-400/30" />
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 sm:px-5 py-2 border border-cyan-400 text-cyan-400 text-xs uppercase tracking-widest hover:bg-cyan-400/10 transition-all clip-corner-sm text-center"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 sm:px-5 py-2 border border-purple-400 text-purple-400 text-xs uppercase tracking-widest hover:bg-purple-400/10 transition-all clip-corner-sm text-center"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Scan line */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-horizontal" />
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Inventory Style */}
      <section id="skills" className="relative min-h-screen py-10 sm:py-8 md:py-100 px-4 sm:px-6 bg-black/40">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto z-20">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-cyan-400 text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">{'// '} Skill Tree</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                ABILITIES & TECH
              </span>
            </h2>
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-4" />
          </div>

          <div className="space-y-8 sm:space-y-12 max-w-6xl mx-auto">
            {skillGroups.map((group, groupIndex) => (
              <div key={group.title}>
                {/* Category Title */}
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <p className="text-cyan-400 text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                    {'// '} {group.title}
                  </p>
                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/50 to-transparent" />
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {group.skills.map((skill, i) => (
                    <div
                      key={skill}
                      className="relative group"
                      style={{
                        animationDelay: `${(groupIndex * 10 + i) * 0.03}s`,
                      }}
                    >
                      <div className="absolute inset-0 bg-cyan-400 blur opacity-0 group-hover:opacity-30 transition-all" />
                      <span className="relative block px-4 sm:px-6 py-2 sm:py-3 border border-cyan-500/30 bg-black/60 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-all uppercase text-[10px] sm:text-xs tracking-wider cursor-default clip-corner-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Terminal Style */}
      <section id="contact" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-black/60 py-16 sm:py-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />
        
        <div className="relative max-w-2xl w-full z-20">
          <div className="border-2 border-cyan-500/30 bg-black/80 p-8 sm:p-12 relative">
            {/* Terminal header */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-cyan-900/30 border-b border-cyan-500/30 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-cyan-400 ml-2 sm:ml-4">contact.terminal</span>
            </div>

            <div className="text-center mt-8">
              <p className="text-cyan-400 text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 animate-flicker">
                {'> '}ESTABLISH_CONNECTION
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  GET IN TOUCH
                </span>
              </h2>

              <div className="space-y-3 sm:space-y-4 my-6 sm:my-8">
                <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base justify-center">
                  <span className="text-cyan-400">{'> '}</span>
                  <span className="text-xs sm:text-sm">Location:</span>
                  <span className="text-white text-xs sm:text-base">Baguio City, Philippines</span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <a
                  href="tel:+639608360277"
                  className="block px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-all group relative overflow-hidden text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className="text-cyan-400">{'> '}</span>
                    +63 960 836 0277
                  </span>
                </a>
                <a
                  href="mailto:joshdan.david@gmail.com"
                  className="block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:from-cyan-500 hover:to-blue-600 transition-all relative overflow-hidden group text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 break-all">
                    <span>{'> '}</span>
                    joshdan.david@gmail.com
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute -top-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 border-l-4 border-t-4 border-cyan-400" />
          <div className="absolute -top-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 border-r-4 border-t-4 border-cyan-400" />
          <div className="absolute -bottom-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 border-l-4 border-b-4 border-cyan-400" />
          <div className="absolute -bottom-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 border-r-4 border-b-4 border-cyan-400" />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-cyan-500/30 py-4 sm:py-6 text-center text-xs sm:text-sm text-gray-500 bg-black/60">
        <p className="text-cyan-400/50">{'>'} END_OF_FILE</p>
      </footer>
    </div>
  );
};

export default App;