import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
    const roles = [
        'AI Solutions Architect at Harvard',
        'Founder of Kojo Analytics',
        'Process Improvement & Prototyping',
        'Stakeholder Engagement & Delivery'
    ];

    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const role = roles[currentRole];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < role.length) {
                    setDisplayText(role.substring(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.substring(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 30 : 50);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole, roles]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Profile Image */}
                        <motion.div
                            className="mb-8"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        >
                            <img
                                src="/assets/images/profile.jpg"
                                alt="Carlos Barbosa"
                                className="w-36 h-36 md:w-40 md:h-40 rounded-full mx-auto border-4 border-primary-500/30 shadow-2xl shadow-primary-500/20 object-cover"
                            />
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                            Carlos Barbosa
                        </h1>

                        {/* Typed Role */}
                        <div className="h-10 md:h-12 mb-6">
                            <span className="text-xl md:text-2xl text-primary-400 font-medium">
                                {displayText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </div>

                        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                            AI Solutions Architect at Harvard. I analyze processes, identify inefficiencies, design solutions, prototype for feedback, and implement with stakeholder buy-in. Founder of{' '}
                            <a
                                href="https://kojoanalytics.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-400 hover:text-primary-300 underline underline-offset-2"
                            >
                                Kojo Analytics
                            </a>.
                        </p>

                        {/* Quote */}
                        <motion.blockquote
                            className="mb-10 max-w-lg mx-auto p-6 bg-slate-800/50 rounded-xl border-l-4 border-primary-500/50 backdrop-blur-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <p className="text-slate-300 italic text-lg mb-2">
                                "You can't improve what you can't measure"
                            </p>
                            <cite className="text-slate-500 text-sm">— Peter Drucker</cite>
                        </motion.blockquote>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-primary-500/25"
                        >
                            View My Work
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/09barbosacarlos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all border border-slate-700 flex items-center gap-2"
                        >
                            <Linkedin size={20} />
                            Let's Connect
                        </a>
                        <a
                            href="https://kojoanalytics.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-purple-500/25"
                        >
                            <Globe size={20} />
                            Kojo Analytics
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-slate-500 rounded-full p-1 flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
