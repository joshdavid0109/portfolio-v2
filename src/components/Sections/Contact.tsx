import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-32 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel-heavy p-12 border border-cyan-500/20 clip-corner-lg relative"
                >
                    {/* Decorative Corner Borders */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-500" />
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-cyan-500" />

                    <h2 className="text-4xl font-black text-glow-cyan uppercase mb-4 text-white">Establish Connection</h2>
                    <p className="text-gray-500 tracking-widest uppercase text-[10px] mb-12 font-bold">Protocol {portfolioData.contact.location.toUpperCase().replace(' ', '_')}</p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {/* Email Link */}
                        <a
                            href={`mailto:${portfolioData.contact.email}`}
                            className="flex flex-col items-center gap-4 group transition-transform hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 rounded-full border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black group-hover:shadow-[0_0_20px_#0ff] transition-all">
                                <Mail size={24} />
                            </div>
                            <div className="space-y-1">
                                <span className="block text-[10px] text-cyan-500 uppercase font-black tracking-widest">Email</span>
                                <span className="block text-xs text-gray-400 group-hover:text-white transition-colors">{portfolioData.contact.email}</span>
                            </div>
                        </a>

                        {/* Phone Link */}
                        <a
                            href={`tel:${portfolioData.contact.phone}`}
                            className="flex flex-col items-center gap-4 group transition-transform hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 rounded-full border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black group-hover:shadow-[0_0_20px_#0ff] transition-all">
                                <Phone size={24} />
                            </div>
                            <div className="space-y-1">
                                <span className="block text-[10px] text-cyan-500 uppercase font-black tracking-widest">Phonetic</span>
                                <span className="block text-xs text-gray-400 group-hover:text-white transition-colors">{portfolioData.contact.phone}</span>
                            </div>
                        </a>

                        {/* Location Link (non-clickable) */}
                        <div className="flex flex-col items-center gap-4 group cursor-default">
                            <div className="w-14 h-14 rounded-full border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-500 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all">
                                <MapPin size={24} className="text-cyan-500" />
                            </div>
                            <div className="space-y-1">
                                <span className="block text-[10px] text-cyan-500 uppercase font-black tracking-widest">Base</span>
                                <span className="block text-xs text-gray-400 group-hover:text-white transition-colors">{portfolioData.contact.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-cyan-500/10 flex justify-center gap-8">
                        <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="p-3 text-gray-500 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all rounded-full border border-transparent hover:border-cyan-500/20">
                            <Github size={24} />
                        </a>
                        <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="p-3 text-gray-500 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all rounded-full border border-transparent hover:border-cyan-500/20">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 flex items-center justify-center gap-2 text-cyan-700 text-[10px] uppercase font-bold tracking-[0.5em]"
                >
                    <span className="animate-pulse">AVAILABLE FOR MISSIONS</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-700 animate-flicker" />
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
