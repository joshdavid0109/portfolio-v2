import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-32 px-6 bg-black/50">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-4xl font-black text-glow-cyan uppercase">Experience</h2>
                    <div className="h-px flex-1 bg-cyan-500/20" />
                </div>

                <div className="space-y-12">
                    {portfolioData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="relative pl-8 border-l-2 border-cyan-500/30"
                        >
                            <div className="absolute top-0 left-[-9px] w-4 h-4 bg-cyan-500 rounded-full neon-border-cyan" />
                            <div className="flex flex-col md:flex-row md:justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-cyan-400">{exp.role}</h3>
                                    <p className="text-white/80">{exp.company}</p>
                                </div>
                                <div className="text-[10px] text-cyan-600 uppercase tracking-widest mt-2 md:mt-0 font-bold">
                                    {exp.period} | {exp.type}
                                </div>
                            </div>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                {exp.details.map((detail, idx) => (
                                    <li key={idx} className="flex gap-2">
                                        <span className="text-cyan-500">›</span> {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
