'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Animated Background Elements (Glowing Orbs) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -50, 50, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -50, 50, 0],
                        y: [0, 50, -50, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[100px]"
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-primary mb-4 tracking-wide uppercase">
                        Frontend Developer
                    </h2>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                        Building <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">Digital</span>
                        <br />
                        Experiences
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed px-4">
                        I craft proficient, high-performance web applications with React, Next.js, and Redux Toolkit.
                        Focusing on clean code, premium design, and seamless user interaction.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-primary text-slate-900 font-semibold text-lg hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(56,189,248,0.5)]"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-gray-600 text-white font-medium text-lg hover:bg-white/5 hover:border-white transition-all hover:scale-105 active:scale-95"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-gray-400 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
