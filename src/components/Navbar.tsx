'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring' as const,
                stiffness: 260,
                damping: 22,
            },
        },
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none p-4 sm:p-5">
            <motion.nav 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-full max-w-5xl rounded-full glass border border-white/5 shadow-[0_8px_32px_0_rgba(15,23,42,0.5)] pointer-events-auto px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300"
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
                        <motion.div 
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-9 h-9 relative filter drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]"
                        >
                            <img src="/logo.svg" alt="Lalit Logo" className="w-full h-full object-contain" />
                        </motion.div>
                        <span className="text-lg font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent cursor-pointer hidden sm:block tracking-wide group-hover:brightness-110 transition-all duration-300">
                            Lalit
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-1 bg-white/5 px-2 py-1 rounded-full border border-white/5">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="relative text-gray-300 hover:text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors duration-300 z-10"
                                >
                                    {hoveredIndex === index && (
                                        <motion.span
                                            layoutId="navbar-hover-pill"
                                            className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Icons & Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        {/* Github Link */}
                        <motion.a 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://github.com/lk007-dev/" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="hidden md:flex w-9 h-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            <FaGithub size={18} />
                        </motion.a>

                        {/* Mobile menu button */}
                        <div className="flex md:hidden">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleMenu}
                                type="button"
                                className="w-9 h-9 bg-white/5 border border-white/5 inline-flex items-center justify-center rounded-full text-gray-400 hover:text-white focus:outline-none"
                                aria-controls="mobile-menu"
                                aria-expanded={false}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay - AnimatePresence */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl flex items-center justify-center pointer-events-auto"
                    >
                        {/* Close Button Layout for Mobile */}
                        <div className="absolute top-5 right-5 z-50">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(false)}
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                            >
                                <FaTimes size={22} />
                            </motion.button>
                        </div>

                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="relative z-10 flex flex-col items-center gap-6"
                        >
                            {navLinks.map((link) => (
                                <motion.div key={link.name} variants={itemVariants}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-bold tracking-wide text-gray-300 hover:text-white transition-colors block p-2"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Mobile Socials */}
                            <motion.div variants={itemVariants} className="flex gap-6 mt-6">
                                <motion.a 
                                    whileHover={{ scale: 1.1 }}
                                    href="https://github.com/lk007-dev/" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                                >
                                    <FaGithub size={24} />
                                </motion.a>
                                <motion.a 
                                    whileHover={{ scale: 1.1 }}
                                    href="https://www.linkedin.com/in/lalit-bijarnia" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                                >
                                    <FaLinkedin size={24} />
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
