import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
            {/* Subtle grain overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Accent line */}
            <motion.div
                className="absolute top-0 left-8 md:left-16 w-px bg-gradient-to-b from-accent/0 via-accent/30 to-accent/0"
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            />

            <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                    {/* Left: Name and title */}
                    <div className="md:col-span-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <p className="font-mono text-xs text-accent-dark tracking-[0.3em] uppercase mb-6">
                                AI Solutions Architect
                            </p>
                        </motion.div>

                        <motion.h1
                            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-900 tracking-tight leading-[0.9] mb-8"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            Carlos
                            <br />
                            Barbosa
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-neutral-500 max-w-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            I analyze processes, identify inefficiencies, design solutions,
                            and implement with stakeholder buy-in.{' '}
                            <span className="text-neutral-800">
                                Currently at Harvard Maintenance.
                            </span>
                        </motion.p>
                    </div>

                    {/* Right: Meta info */}
                    <motion.div
                        className="md:col-span-4 flex flex-col gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                    >
                        <div className="space-y-4 md:text-right">
                            <div>
                                <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Currently</p>
                                <a
                                    href="https://www.harvardmaint.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-display text-sm text-neutral-800 hover:text-accent transition-colors"
                                >
                                    Harvard Maintenance
                                </a>
                            </div>
                            <div>
                                <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Founded</p>
                                <a
                                    href="https://kojoanalytics.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-display text-sm text-accent hover:text-accent-dark transition-colors"
                                >
                                    Kojo Analytics
                                </a>
                            </div>
                            <div>
                                <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Education</p>
                                <p className="font-display text-sm text-neutral-800">M.S. Data Science, UT Austin</p>
                            </div>
                        </div>

                        <a
                            href="#projects"
                            className="group flex items-center gap-2 md:justify-end font-mono text-xs text-neutral-400 hover:text-accent transition-colors"
                        >
                            View selected work
                            <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
