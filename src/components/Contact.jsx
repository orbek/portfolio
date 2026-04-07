import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 border-t border-neutral-200">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                    {/* Left */}
                    <motion.div
                        className="md:col-span-7"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="font-mono text-xs text-accent-dark tracking-[0.3em] uppercase mb-4">Contact</p>
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-8 leading-tight">
                            Let's build<br />
                            something<br />
                            <span className="text-accent">together.</span>
                        </h2>
                        <p className="text-neutral-500 leading-relaxed max-w-md">
                            Open to opportunities in AI implementation, data science consulting,
                            and educational roles. If you have a problem worth solving, I'd like to hear about it.
                        </p>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        className="md:col-span-5 flex flex-col justify-end"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="space-y-6">
                            <a
                                href="mailto:carlos@databarbosa.com"
                                className="group flex items-center gap-4 py-4 border-b border-neutral-200/80 hover:border-accent/30 transition-colors"
                            >
                                <Mail size={16} className="text-neutral-400 group-hover:text-accent transition-colors" />
                                <div>
                                    <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Email</p>
                                    <p className="font-display text-sm text-neutral-800 group-hover:text-accent transition-colors">
                                        carlos@databarbosa.com
                                    </p>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/09barbosacarlos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 py-4 border-b border-neutral-200/80 hover:border-accent/30 transition-colors"
                            >
                                <Linkedin size={16} className="text-neutral-400 group-hover:text-accent transition-colors" />
                                <div>
                                    <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-1">LinkedIn</p>
                                    <p className="font-display text-sm text-neutral-800 group-hover:text-accent transition-colors">
                                        /in/09barbosacarlos
                                    </p>
                                </div>
                            </a>

                            <a
                                href="https://github.com/orbek"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 py-4 border-b border-neutral-200/80 hover:border-accent/30 transition-colors"
                            >
                                <Github size={16} className="text-neutral-400 group-hover:text-accent transition-colors" />
                                <div>
                                    <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-1">GitHub</p>
                                    <p className="font-display text-sm text-neutral-800 group-hover:text-accent transition-colors">
                                        @orbek
                                    </p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
