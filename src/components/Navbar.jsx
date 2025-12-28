import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-white tracking-tighter">
                    CB<span className="text-primary-500">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-primary-400 transition-colors text-sm font-medium uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center space-x-4 ml-8 border-l border-slate-700 pl-8">
                        <a href="https://github.com/orbek" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/09barbosacarlos" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:hello@example.com" className="text-slate-400 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-b border-slate-800 md:hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-300 hover:text-primary-400 text-lg font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-6 pt-4 border-t border-slate-800">
                                <a href="https://github.com/orbek" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/09barbosacarlos" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:hello@example.com" className="text-slate-400 hover:text-white">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
