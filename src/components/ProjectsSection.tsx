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

                <div className="flex flex-col gap-12 md:gap-16">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.2 }
                                }}
                                className="group relative block glass rounded-2xl border border-white/5 hover:border-secondary/40 transition-all duration-350 shadow-lg hover:shadow-secondary/5 overflow-hidden"
                            >
                                <div className={`flex flex-col lg:flex-row items-stretch ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                                    {/* Screenshot container */}
                                    <div className="w-full lg:w-1/2 aspect-[16/10] relative overflow-hidden bg-zinc-950/40 border-b lg:border-b-0 border-white/5">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={`${project.title} Screenshot`}
                                                className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                                                <span className="text-gray-500 font-medium">No Image Available</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent pointer-events-none" />
                                    </div>

                                    {/* Content container */}
                                    <div className="w-full lg:w-1/2 p-6 sm:p-10 md:p-12 flex flex-col justify-between relative z-10">
                                        <div>
                                            <div className="flex justify-between items-start mb-4 md:mb-6">
                                                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-secondary transition-colors">
                                                    {project.title}
                                                </h3>
                                                <span className="text-gray-400 group-hover:text-white transition-colors p-2 glass rounded-full self-start">
                                                    <FaExternalLinkAlt size={14} />
                                                </span>
                                            </div>
                                            <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/5"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 -z-10" />
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
