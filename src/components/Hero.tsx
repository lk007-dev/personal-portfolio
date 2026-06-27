'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaReact, FaRocket } from 'react-icons/fa';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring' as const,
                stiffness: 100,
                damping: 18,
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Ambient Background Grid Overlay */}
            <div 
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(circle at center, black 65%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 65%, transparent 100%)'
                }}
            />

            {/* Animated Background Elements (Glowing Orbs) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 40, -40, 0],
                        y: [0, -40, 40, 0],
                        scale: [1, 1.15, 0.9, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/15 rounded-full blur-3xl"
                    animate={{
                        x: [0, -40, 40, 0],
                        y: [0, 40, -40, 0],
                        scale: [1, 1.1, 0.95, 1],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[120px]"
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Floating Visual Badges - Left */}
            <motion.div
                initial={{ opacity: 0, x: -40, y: 40 }}
                animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: [0, -10, 0]
                }}
                transition={{
                    y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                    opacity: { duration: 0.8, delay: 0.8 },
                    x: { duration: 0.8, delay: 0.8 }
                }}
                className="absolute left-[6%] bottom-[25%] hidden lg:flex items-center gap-3 glass px-5 py-3 rounded-2xl border border-white/5 shadow-2xl z-10 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
            >
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                    <FaRocket size={16} />
                </div>
                <div className="text-left">
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Performance</div>
                    <div className="text-sm font-bold text-white">Lighthouse 100%</div>
                </div>
            </motion.div>

            {/* Floating Visual Badges - Right */}
            <motion.div
                initial={{ opacity: 0, x: 40, y: -40 }}
                animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: [0, 10, 0]
                }}
                transition={{
                    y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
                    opacity: { duration: 0.8, delay: 1.0 },
                    x: { duration: 0.8, delay: 1.0 }
                }}
                className="absolute right-[6%] top-[25%] hidden lg:flex items-center gap-3 glass px-5 py-3 rounded-2xl border border-white/5 shadow-2xl z-10 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
            >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                        className="text-primary flex items-center justify-center"
                    >
                        <FaReact size={18} />
                    </motion.div>
                </div>
                <div className="text-left">
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Modern Stack</div>
                    <div className="text-sm font-bold text-white">Next.js & React</div>
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8 sm:mt-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2 
                        variants={itemVariants}
                        className="text-sm sm:text-base md:text-lg font-semibold text-primary mb-4 tracking-widest uppercase bg-primary/10 px-4 py-1.5 rounded-full inline-block border border-primary/10"
                    >
                        Frontend Developer
                    </motion.h2>

                    <motion.h1 
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none text-white"
                    >
                        Building <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent filter drop-shadow-[0_2px_15px_rgba(56,189,248,0.15)]">Premium Digital</span>
                        <br />
                        Experiences
                    </motion.h1>

                    <motion.p 
                        variants={itemVariants}
                        className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed px-4 font-light"
                    >
                        I craft high-performance, responsive web applications with React, Next.js, and Redux Toolkit, focusing on clean code, visual excellence, and smooth interactions.
                    </motion.p>

                    <motion.div 
                        variants={itemVariants} 
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        {/* Glow Wrapper for View CV CTA */}
                        <div className="relative group">
                            <motion.div 
                                className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                            />
                            <a
                                href="/resume.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative px-8 py-3 rounded-full bg-primary text-slate-900 font-semibold text-lg hover:bg-primary/95 transition-transform hover:scale-102 active:scale-98 flex items-center gap-2 shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                            >
                                <span>View CV</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        <Link
                            href="#projects"
                            className="px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium text-lg hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105 active:scale-95 shadow-lg"
                        >
                            View Projects
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ delay: 1.4, duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Link href="#about" aria-label="Scroll Down">
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1 hover:border-primary/50 transition-colors">
                        <motion.div 
                            animate={{
                                y: [0, 12, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                            className="w-1.5 h-1.5 bg-primary rounded-full" 
                        />
                    </div>
                </Link>
            </motion.div>
        </section>
    );
}
