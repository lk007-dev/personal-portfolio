'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
    {
        id: 1,
        role: 'Software Developer',
        company: 'Coneon',
        period: 'Present',
        description: 'Currently working as a Software Developer, contributing to core product features and frontend architecture.',
        type: 'work',
        featured: true
    },
    {
        id: 2,
        role: 'Software Developer Intern',
        company: 'DRDO',
        period: 'Jan 2024 - June 2024',
        description: 'Completed a 6-month internship developing software solutions for defense applications. Gained hands-on experience in secure and scalable system design.',
        type: 'work',
        featured: true
    },
    {
        id: 3,
        role: 'Freelance Developer',
        company: 'Self-Employed',
        period: '2023 - Present',
        description: 'Delivering side projects and custom web solutions for clients. Showcasing expertise in Next.js, React, and modern UI/UX design.',
        type: 'work'
    },
    {
        id: 4,
        role: 'Bachelor of Engineering',
        company: 'Graduation',
        period: '2020 - 2024',
        description: 'Completed B.E with 7.26 CGPA. Specialized in Computer Science and Engineering field.',
        type: 'education'
    },
    {
        id: 5,
        role: 'Senior Secondary (12th)',
        company: 'Schooling',
        period: '2020',
        description: 'Achieved 78.6% in 12th grade board examinations.',
        type: 'education'
    },
    {
        id: 6,
        role: 'Matriculation (10th)',
        company: 'Schooling',
        period: '2018',
        description: 'Achieved 9.6 CGPA in 10th grade board examinations.',
        type: 'education'
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Experience & Education
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My professional journey and academic background.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-white/10 rounded-full" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 top-0 w-3.5 h-3.5 bg-primary rounded-full border-4 border-zinc-950 z-20 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />

                                {/* Content Card */}
                                <div className="ml-8 md:ml-0 md:w-1/2">
                                    <div className={`glass p-6 rounded-2xl border ${
                                        // @ts-ignore
                                        exp.featured ? 'border-primary/50 shadow-[0_0_20px_rgba(56,189,248,0.2)]' : 'border-white/10'
                                        } hover:border-primary/50 transition-all duration-300 relative group shadow-lg hover:shadow-primary/10`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="relative z-10">
                                            <div className="flex items-center gap-3 mb-2 text-primary">
                                                {exp.type === 'work' ? <FaBriefcase size={18} /> : <FaGraduationCap size={20} />}
                                                <span className="text-xs font-bold uppercase tracking-wider bg-white/5 px-2 py-1 rounded-md border border-white/5">{exp.period}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                                                {exp.role}
                                            </h3>
                                            <h4 className="text-gray-300 text-base mb-4 font-medium flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                {exp.company}
                                            </h4>
                                            <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
