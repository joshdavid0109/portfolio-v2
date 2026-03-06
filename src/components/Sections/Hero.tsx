import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-block py-1 px-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] tracking-widest uppercase rounded">
                        System Active: AI Business Process Analyst
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-none text-glow-cyan text-white">
                        {portfolioData.name.toUpperCase()}
                    </h1>
                    <p className="text-xl text-cyan-200/80 font-light tracking-wide max-w-lg">
                        {portfolioData.title}
                    </p>
                    <p className="text-gray-400 leading-relaxed max-w-lg">
                        {portfolioData.bio}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#projects" className="px-8 py-3 bg-cyan-500 text-black font-bold uppercase text-xs tracking-widest hover:bg-cyan-400 transition-all clip-corner shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                            View Missions
                        </a>
                        <a href={portfolioData.contact.resume} target="_blank" rel="noreferrer" className="px-8 py-3 border border-cyan-500 text-cyan-500 font-bold uppercase text-xs tracking-widest hover:bg-cyan-500/10 transition-all clip-corner flex items-center gap-2">
                            <Download size={16} /> Resume
                        </a>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors"><Github size={20} /></a>
                        <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden md:block"
                >
                    <div className="w-full aspect-square border-2 border-cyan-500/30 rounded-full animate-pulse-glow flex items-center justify-center">
                        <div className="w-3/4 aspect-square border-2 border-purple-500/30 rounded-full animate-spin-slow" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center space-y-2">
                                <div className="text-4xl font-black text-cyan-400">10+</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Projects Completed</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
