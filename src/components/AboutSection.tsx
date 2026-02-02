'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaCoffee, FaCode, FaRocket } from 'react-icons/fa';

const stats = [
    { label: 'Years Experience', value: '3+', icon: FaCode },
    { label: 'Projects Completed', value: '15+', icon: FaRocket },
    { label: 'Coffee Consumed', value: '∞', icon: FaCoffee },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                            Who is <span className="text-accent">Lalit?</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I&apos;m a passionate Frontend Developer who bridges the gap between design and technology.
                            My journey started with a curiosity for how things work on the web, which evolved into a career
                            crafting pixel-perfect, performant user interfaces.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Specializing in the React ecosystem, I build scalable applications with Redux Toolkit and Next.js.
                            I believe in writing clean code, optimizing for speed, and creating experiences that delight users.
                            When I&apos;m not coding, I&apos;m exploring new tech trends or optimizing my development workflow.
                        </p>

                        <a
                            href="/Lalit_Kumar_Resume.pdf"
                            download="Lalit_Kumar_Resume.pdf"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-gray-200 transition-colors shadow-lg"
                        >
                            <FaDownload /> Download Resume
                        </a>
                    </motion.div>

                    {/* Creative Visual - "Terminal" or Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Abstract Background Blotches */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10" />

                        <div className="glass p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
                            {/* Terminal Header */}
                            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-4 text-xs text-gray-500 font-mono">lalit@developer:~</span>
                            </div>

                            {/* Stats Grid inside Terminal */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {stats.map((stat, index) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div key={index} className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                                            <Icon className="text-primary mb-2 text-2xl" />
                                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                            <div className="text-sm text-gray-400">{stat.label}</div>
                                        </div>
                                    );
                                })}

                                {/* Current Status Box */}
                                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors sm:col-span-2 sm:col-start-2 lg:col-span-1 lg:col-start-auto">
                                    <div className="text-xs text-primary mb-2 font-mono">{'>'} Current Status</div>
                                    <div className="text-white font-medium flex items-center gap-2">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                        </span>
                                        Open to Work
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
