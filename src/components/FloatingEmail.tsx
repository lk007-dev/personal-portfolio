'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

export default function FloatingEmail() {
    const [tooltipText, setTooltipText] = useState('Say Hi!');


    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, type: 'spring' }}
            className="fixed bottom-8 right-8 z-50 hidden md:block"
        >
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bijarnialalit07@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-full shadow-[0_0_20px_rgba(56,189,248,0.5)] text-slate-900 transition-transform hover:scale-110 active:scale-95 group relative"
                aria-label="Send Email"
            >
                <FaEnvelope size={24} />

                {/* Tooltip */}
                <span className="absolute right-full mr-4 bg-zinc-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
                    {tooltipText}
                </span>
            </a>
        </motion.div>
    );
}
