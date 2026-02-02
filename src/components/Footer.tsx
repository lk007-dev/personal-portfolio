'use client';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-zinc-950 border-t border-white/10 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Copyright */}
                <p className="text-gray-400 text-sm text-center md:text-left">
                    © {currentYear} Lalit. All rights reserved.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/lk007-dev/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/lalit-bijarnia"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href="https://www.instagram.com/lalitkumarbijarnia/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
