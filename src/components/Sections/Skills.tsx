import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-32 px-6 bg-cyan-900/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-glow-cyan uppercase mb-4 text-white">Skill Tree</h2>
                    <p className="text-gray-500 tracking-widest uppercase text-xs font-bold">Full Spectrum Technical Capabilities</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {portfolioData.skills.map((group, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3">
                                <Terminal size={20} className="text-cyan-500" />
                                <h3 className="text-sm font-bold text-cyan-400 tracking-[0.2em] uppercase">{group.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill, idx) => (
                                    <span key={idx} className="px-4 py-2 glass-panel border border-cyan-500/10 text-xs text-gray-300 hover:border-cyan-500/40 hover:text-cyan-400 transition-all clip-corner-sm cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
