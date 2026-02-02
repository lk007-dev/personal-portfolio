'use client';

import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt, FaPhone } from 'react-icons/fa';

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        Let&apos;s <span className="text-primary">Connect</span>
                    </h2>
                    <p className="text-gray-400">
                        Have a project in mind or just want to chat? Drop me a message.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass p-8 md:p-12 rounded-2xl shadow-2xl border border-white/10"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="relative group">
                                <FaUser className="absolute left-4 top-4 text-gray-500 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                />
                            </div>

                            {/* Email */}
                            <div className="relative group">
                                <FaEnvelope className="absolute left-4 top-4 text-gray-500 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                />
                            </div>
                        </div>

                        {/* Subject/Phone (Optional mix) */}
                        <div className="relative group">
                            <FaPhone className="absolute left-4 top-4 text-gray-500 group-focus-within:text-primary transition-colors" />
                            <input
                                type="tel"
                                placeholder="Phone Number (Optional)"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            />
                        </div>

                        {/* Message */}
                        <div className="relative group">
                            <FaCommentAlt className="absolute left-4 top-4 text-gray-500 group-focus-within:text-primary transition-colors" />
                            <textarea
                                rows={4}
                                placeholder="Your Message..."
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow flex items-center justify-center gap-2 text-lg"
                        >
                            <FaPaperPlane /> Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
