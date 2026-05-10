'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { toggleTheme } from '../features/theme/themeSlice';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme.mode);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Mobile menu uses pure CSS transitions for maximum performance on all devices

    return (
        <nav className="fixed w-full z-50 top-0 start-0 glass border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-10 h-10 relative">
                            {/* Using img tag directly for SVG or Next Image if configured. 
                                 Since it's in public, /logo.svg works. */}
                            <img src="/logo.svg" alt="Lalit Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer hidden sm:block">
                            Lalit
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Icons & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
                        {/* 
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
            */}

                        {/* Socials (Optional in Nav) */}
                        <a href="https://github.com/lk007-dev/" target="_blank" rel="noreferrer" className="hidden md:block text-gray-300 hover:text-white transition-colors">
                            <FaGithub size={20} />
                        </a>

                        {/* Mobile menu button */}
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay - Pure CSS for maximum performance */}
            <div
                className={`md:hidden fixed inset-0 z-40 bg-zinc-950 flex items-center justify-center transition-transform duration-300 ease-out will-change-transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Close Button Layout for Mobile */}
                <div className="absolute top-5 right-5 z-50">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <FaTimes size={32} />
                    </button>
                </div>

                <div className="relative z-10 flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-bold text-gray-300 hover:text-white hover:scale-110 transition-transform block p-2"
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}

                    {/* Mobile Socials */}
                    <div className="flex gap-8 mt-8">
                        <a href="https://github.com/lk007-dev/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaGithub size={32} />
                        </a>
                        <a href="https://www.linkedin.com/in/lalit-bijarnia" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaLinkedin size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
