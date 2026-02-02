'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector, useAppStore } from '../lib/hooks';
import { setFilter, selectFilteredSkills } from '../features/skills/skillsSlice';
import { FaCode, FaServer, FaTools, FaLayerGroup } from 'react-icons/fa';

const categories = [
    { name: 'All', icon: FaLayerGroup },
    { name: 'Frontend', icon: FaCode },
    { name: 'Backend', icon: FaServer },
    { name: 'Tools', icon: FaTools },
] as const;

export default function SkillsSection() {
    const dispatch = useAppDispatch();
    const currentFilter = useAppSelector((state) => state.skills.filter);
    const filteredSkills = useAppSelector(selectFilteredSkills);

    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-primary">Proficiency</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My tech stack is built on a solid foundation of modern web technologies.
                        Filter below to see my expertise across different domains.
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = currentFilter === cat.name;
                        return (
                            <button
                                key={cat.name}
                                onClick={() => dispatch(setFilter(cat.name))}
                                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 ${isActive
                                        ? 'bg-primary text-slate-900 shadow-lg shadow-primary/25 scale-105'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                <Icon />
                                <span>{cat.name}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Skills Grid */}
                <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <AnimatePresence>
                        {filteredSkills.map((skill) => (
                            <motion.div
                                layout
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="glass p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors group"
                            >
                                {/* Visual Circle/Progress (Simplified for now) */}
                                <div className="relative w-20 h-20 flex items-center justify-center">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r="36"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            fill="transparent"
                                            className="text-gray-700"
                                        />
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r="36"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            fill="transparent"
                                            strokeDasharray={2 * Math.PI * 36}
                                            strokeDashoffset={2 * Math.PI * 36 * (1 - (skill.level || 0) / 100)}
                                            className="text-primary transition-all duration-1000 ease-out"
                                        />
                                    </svg>
                                    <span className="absolute text-sm font-semibold text-white">
                                        {skill.level}%
                                    </span>
                                </div>

                                <h3 className="font-semibold text-lg text-white group-hover:text-primary transition-colors">
                                    {skill.name}
                                </h3>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
