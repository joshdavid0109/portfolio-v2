import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Projects: React.FC = () => {
    const [imageIndexes, setImageIndexes] = useState<{ [key: number]: number }>({});

    const nextImage = (projectIndex: number, galleryLength: number) => {
        setImageIndexes((prev) => ({
            ...prev,
            [projectIndex]: ((prev[projectIndex] || 0) + 1) % galleryLength,
        }));
    };

    const prevImage = (projectIndex: number, galleryLength: number) => {
        setImageIndexes((prev) => ({
            ...prev,
            [projectIndex]: ((prev[projectIndex] || 0) - 1 + galleryLength) % galleryLength,
        }));
    };

    return (
        <section id="projects" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-4xl font-black text-glow-cyan uppercase text-white">Missions</h2>
                    <div className="h-px flex-1 bg-cyan-500/20" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            className="glass-panel-heavy border border-cyan-500/20 group hover:border-cyan-500/50 transition-all clip-corner-lg overflow-hidden relative flex flex-col"
                        >
                            {/* Image Gallery */}
                            {project.gallery && project.gallery.length > 0 && (
                                <div className="relative aspect-video overflow-hidden border-b border-cyan-500/20">
                                    <motion.img
                                        key={imageIndexes[i] || 0}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        src={project.gallery[imageIndexes[i] || 0]}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                                    />

                                    {/* Gallery Controls */}
                                    {project.gallery.length > 1 && (
                                        <>
                                            <button
                                                onClick={() => prevImage(i, project.gallery!.length)}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all rounded-full z-10"
                                            >
                                                <ChevronLeft size={16} />
                                            </button>
                                            <button
                                                onClick={() => nextImage(i, project.gallery!.length)}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all rounded-full z-10"
                                            >
                                                <ChevronRight size={16} />
                                            </button>

                                            {/* Dots */}
                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                                                {project.gallery.map((_, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`w-1.5 h-1.5 rounded-full transition-all ${(imageIndexes[i] || 0) === idx ? 'bg-cyan-400 w-3' : 'bg-cyan-900/50'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}

                                    {/* Scanline Overlay */}
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-scan z-0" />
                                </div>
                            )}

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors uppercase">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">{project.desc}</p>
                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {project.tech.split(',').map((t, idx) => (
                                        <span key={idx} className="text-[9px] px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 rounded uppercase tracking-wider font-bold">
                                            {t.trim()}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-xs text-cyan-400 flex items-center gap-1 hover:underline font-bold">
                                            <ExternalLink size={14} /> LIVE LINK
                                        </a>
                                    )}
                                    {project.repoUrl && (
                                        <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-xs text-gray-500 flex items-center gap-1 hover:text-white transition-colors font-bold">
                                            <Github size={14} /> REPO
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
