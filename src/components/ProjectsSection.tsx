'use client';

import { motion } from 'framer-motion';
import { useAppSelector } from '../lib/hooks';
import { selectAllProjects } from '../features/projects/projectsSlice';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsSection() {
    const projects = useAppSelector(selectAllProjects);

    return (
        <section id="projects" className="py-20 relative bg-zinc-900/50">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-secondary">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of web applications and digital products I&apos;ve helped bring to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                rotateX: 5,
                                rotateY: 5,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            className="group relative h-full perspective-1000"
                        >
                            <div
                                className="glass p-8 rounded-2xl h-full flex flex-col justify-between border border-white/5 hover:border-secondary/50 transition-colors shadow-lg hover:shadow-secondary/20"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">
                                            {project.title}
                                        </h3>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-full"
                                            aria-label={`Visit ${project.title}`}
                                        >
                                            <FaExternalLinkAlt size={14} />
                                        </a>
                                    </div>

                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Decorative Glow */}
                                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur-lg transition duration-500 -z-10" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
