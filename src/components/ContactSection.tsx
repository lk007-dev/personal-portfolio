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
                    className="glass p-10 md:p-14 rounded-3xl shadow-2xl border border-white/10 text-center max-w-2xl mx-auto"
                >
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(56,189,248,0.4)]">
                        <FaEnvelope size={32} className="text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                        Send me an email
                    </h3>

                    <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                        I'm currently available for freelance work and open to new opportunities.
                        If you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a
                        href="mailto:bijarnialalit07@gmail.com"
                        className="inline-flex items-center gap-3 bg-white text-zinc-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all hover:scale-105 shadow-xl"
                    >
                        <FaPaperPlane />
                        bijarnialalit07@gmail.com
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
