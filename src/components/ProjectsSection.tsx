'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppSelector } from '../lib/hooks';
import { selectAllProjects } from '../features/projects/projectsSlice';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const themes = [
    {
        bgGradient: 'from-cyan-500/10 via-blue-500/5 to-transparent',
        textColor: 'text-cyan-400',
        borderColor: 'border-cyan-500/30',
        glowColor: 'rgba(6, 182, 212, 0.2)',
        accentBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
        glowText: 'shadow-[0_0_15px_rgba(6,182,212,0.4)]',
        colorHex: '#06b6d4'
    },
    {
        bgGradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
        textColor: 'text-amber-400',
        borderColor: 'border-amber-500/30',
        glowColor: 'rgba(245, 158, 11, 0.2)',
        accentBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        glowText: 'shadow-[0_0_15px_rgba(245,158,11,0.4)]',
        colorHex: '#f59e0b'
    },
    {
        bgGradient: 'from-indigo-500/10 via-purple-500/5 to-transparent',
        textColor: 'text-indigo-400',
        borderColor: 'border-indigo-500/30',
        glowColor: 'rgba(99, 102, 241, 0.2)',
        accentBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
        glowText: 'shadow-[0_0_15px_rgba(99,102,241,0.4)]',
        colorHex: '#6366f1'
    },
    {
        bgGradient: 'from-pink-500/10 via-rose-500/5 to-transparent',
        textColor: 'text-pink-400',
        borderColor: 'border-pink-500/30',
        glowColor: 'rgba(236, 72, 153, 0.2)',
        accentBg: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
        glowText: 'shadow-[0_0_15px_rgba(236,72,153,0.4)]',
        colorHex: '#ec4899'
    }
];

export default function ProjectsSection() {
    const projects = useAppSelector(selectAllProjects);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);

    // Refs for mobile scroll intersection observer tracking
    const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Mouse coordinates state for spotlight cursor tracking glow on desktop
    const [mousePositions, setMousePositions] = useState<{ [key: string]: { x: number; y: number } }>({});

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, projectId: string) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePositions(prev => ({
            ...prev,
            [projectId]: {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            }
        }));
    };

    // IntersectionObserver scroll-triggering configuration for Mobile screens
    useEffect(() => {
        let observers: IntersectionObserver[] = [];

        const setupMobileObserver = () => {
            // Disconnect any existing active observers
            observers.forEach(obs => obs.disconnect());
            observers = [];

            // Trigger scroll detection only on mobile screens (width < 1024px)
            const isMobile = window.innerWidth < 1024;
            if (!isMobile) return;

            panelRefs.current.forEach((ref, index) => {
                if (!ref) return;
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        // Expand the card when it enters focus in the screen center bounds
                        if (entry.isIntersecting) {
                            setActiveIndex(index);
                        }
                    },
                    {
                        root: null,
                        rootMargin: '-35% 0px -35% 0px', // Triggers when the panel crosses the center vertical band
                        threshold: 0.25 // The panel is 25% visible in the defined vertical focus zone
                    }
                );
                observer.observe(ref);
                observers.push(observer);
            });
        };

        setupMobileObserver();

        // Listen for screen resize events to dynamically toggle intersection observation
        window.addEventListener('resize', setupMobileObserver);
        return () => {
            observers.forEach(obs => obs.disconnect());
            window.removeEventListener('resize', setupMobileObserver);
        };
    }, [projects]);

    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-zinc-950/60">
            {/* Divider lines */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-white">
                        Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                        An interactive stage displaying high-performance web applications and design systems I have engineered.
                    </p>
                </motion.div>

                {/* Interactive Stage (Accordion Wrapper) */}
                <div className="flex flex-col lg:flex-row gap-4 h-[750px] lg:h-[600px] items-stretch w-full">
                    {projects.map((project, index) => {
                        const theme = themes[index % themes.length];
                        const isActive = activeIndex === index;

                        return (
                            <motion.div
                                key={project.id}
                                ref={el => { panelRefs.current[index] = el; }}
                                onClick={() => setActiveIndex(index)}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseMove={(e) => handleMouseMove(e, project.id)}
                                animate={{ 
                                    flex: isActive ? 4.5 : 1,
                                    backgroundColor: isActive ? 'rgba(30, 41, 59, 0.35)' : 'rgba(15, 23, 42, 0.2)'
                                }}
                                transition={{ type: 'spring', stiffness: 140, damping: 20 }}
                                className={`relative rounded-3xl border ${
                                    isActive ? 'border-white/10 shadow-2xl' : 'border-white/5'
                                } overflow-hidden flex flex-col justify-between group cursor-pointer transition-colors duration-300`}
                                style={{
                                    boxShadow: isActive ? `0 20px 40px -15px ${theme.glowColor}` : 'none'
                                }}
                            >
                                {/* Subtle backing theme gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${theme.bgGradient} opacity-50 pointer-events-none -z-10`} />

                                {/* Desktop spotlight cursor tracking glow */}
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                                    style={{
                                        background: mousePositions[project.id] 
                                            ? `radial-gradient(350px circle at ${mousePositions[project.id].x}px ${mousePositions[project.id].y}px, ${theme.glowColor}, transparent 80%)`
                                            : 'none'
                                    }}
                                />

                                <AnimatePresence mode="wait">
                                    {isActive ? (
                                        /* Expanded View */
                                        <motion.div
                                            key="expanded"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative z-10 w-full h-full flex flex-col lg:flex-row items-stretch p-6 sm:p-8 md:p-10 gap-6 lg:gap-8"
                                        >
                                            {/* Left details pane */}
                                            <div className="w-full lg:w-1/2 flex flex-col justify-between h-full">
                                                <div>
                                                    {/* Number Badge */}
                                                    <span className={`text-xs font-mono font-bold uppercase tracking-widest ${theme.textColor} mb-3 block`}>
                                                        Project 0{index + 1}
                                                    </span>

                                                    {/* Title */}
                                                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                                                        {project.title}
                                                    </h3>

                                                    {/* Description */}
                                                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6 font-light">
                                                        {project.description}
                                                    </p>
                                                </div>

                                                <div className="mt-auto">
                                                    {/* Tags */}
                                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                                        {project.tags.map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className={`text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5`}
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* CTA Link Button */}
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-slate-955 hover:bg-gray-100 font-bold text-sm transition-transform hover:scale-105 active:scale-95 shadow-md text-slate-950"
                                                    >
                                                        <span>Visit Website</span>
                                                        <FaExternalLinkAlt size={12} />
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Right macOS browser mockup pane */}
                                            <div className="w-full lg:w-1/2 flex items-center justify-center relative">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.1, duration: 0.4 }}
                                                    className="w-full max-w-[420px] aspect-[16/10] bg-zinc-900 rounded-xl border border-white/10 overflow-hidden shadow-2xl flex flex-col"
                                                    onMouseEnter={() => setHoveredImageIndex(index)}
                                                    onMouseLeave={() => setHoveredImageIndex(null)}
                                                >
                                                    {/* macOS Window Header */}
                                                    <div className="flex items-center gap-1.5 px-4 py-2.5 bg-zinc-950 border-b border-white/5">
                                                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                                                        <div className="flex-1 flex justify-center">
                                                            <div className="bg-white/5 border border-white/5 rounded px-3 py-0.5 text-[9px] text-gray-400 font-mono w-[85%] max-w-[220px] truncate text-center">
                                                                {project.link.replace('https://', '')}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Browser window frame image container */}
                                                    <div className="flex-1 overflow-hidden relative bg-zinc-950/40">
                                                        {project.image ? (
                                                            <motion.img
                                                                src={project.image}
                                                                alt={`${project.title} Preview`}
                                                                animate={{ y: hoveredImageIndex === index ? '-55%' : '0%' }}
                                                                transition={{ duration: 6, ease: 'easeInOut' }}
                                                                className="w-full h-auto object-cover origin-top"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                                                                <FaCode className="text-gray-600 mb-2 text-3xl" />
                                                            </div>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        /* Contracted View (Collapsed Pane) */
                                        <motion.div
                                            key="collapsed"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative z-10 w-full h-full flex lg:flex-col justify-between items-center p-4 lg:py-8 lg:px-4"
                                        >
                                            {/* Big Number Label */}
                                            <span className="text-2xl lg:text-3xl font-black font-mono text-white/10 group-hover:text-white/20 transition-colors">
                                                0{index + 1}
                                            </span>

                                            {/* Rotated title on Desktop, regular on Mobile */}
                                            <div className="lg:h-36 flex items-center justify-center relative lg:-translate-y-4">
                                                <h3 className="text-lg lg:text-xl font-bold text-gray-400 group-hover:text-white whitespace-nowrap lg:-rotate-90 lg:transform transition-all duration-300 origin-center">
                                                    {project.title}
                                                </h3>
                                            </div>

                                            {/* Tiny dot of the theme color */}
                                            <div
                                                className="w-2.5 h-2.5 rounded-full"
                                                style={{ backgroundColor: theme.colorHex }}
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
