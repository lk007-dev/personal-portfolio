'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 relative overflow-hidden px-4">
            {/* Consistent Background Glows */}
            {/* Consistent Animated Background Glows (Matching Hero) */}
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

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="glass max-w-2xl w-full p-12 rounded-3xl text-center border border-white/10 shadow-2xl relative z-10"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2"
                >
                    404
                </motion.h1>

                <motion.div
                    initial={{ width: "100px", opacity: 0 }}
                    animate={{
                        width: ["100px", "180px", "100px"],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"
                />

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl md:text-3xl font-bold text-white mb-6"
                >
                    Page Not Found
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                        opacity: 1,
                        y: [0, -6, 0]
                    }}
                    transition={{
                        opacity: { delay: 0.6 },
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
                    }}
                    className="text-gray-400 text-lg mb-10 leading-relaxed"
                >
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/5 px-8 py-3 rounded-full transition-all hover:scale-105"
                    >
                        <FaArrowLeft />
                        <span>Back to Home</span>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
