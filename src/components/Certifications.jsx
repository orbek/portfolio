import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Certifications = () => {
    return (
        <section id="credentials" className="py-24 md:py-32 border-t border-neutral-200">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                    {/* Left: Education */}
                    <motion.div
                        className="md:col-span-5"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="font-mono text-xs text-accent-dark tracking-[0.3em] uppercase mb-4">Credentials</p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-12">
                            Education &<br />
                            Certifications
                        </h2>

                        <div className="space-y-8">
                            <div>
                                <p className="font-display text-lg font-semibold text-neutral-900">
                                    M.S. Data Science
                                </p>
                                <p className="text-neutral-500 text-sm">University of Texas at Austin</p>
                                <p className="font-mono text-xs text-neutral-300 mt-1">2024</p>
                            </div>
                            <div>
                                <p className="font-display text-lg font-semibold text-neutral-900">
                                    B.S. Industrial Engineering
                                </p>
                                <p className="text-neutral-500 text-sm">FAESA</p>
                                <p className="font-mono text-xs text-neutral-300 mt-1">2016</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Certifications */}
                    <motion.div
                        className="md:col-span-7"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="space-y-0 mb-10">
                            {[
                                { area: 'Data Science & AI', count: '10+', detail: 'Python, ML, Deep Learning' },
                                { area: 'Business Intelligence', count: '8+', detail: 'Power BI, Excel, SQL' },
                                { area: 'Cloud & DevOps', count: '5+', detail: 'Azure, AWS, Git' },
                                { area: 'Agile & Management', count: '3+', detail: 'Scrum, Sprint Planning' },
                            ].map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-baseline justify-between py-5 border-b border-neutral-200/80"
                                >
                                    <div>
                                        <span className="font-display text-sm font-semibold text-neutral-800">
                                            {cert.area}
                                        </span>
                                        <span className="font-mono text-xs text-neutral-400 ml-3">
                                            {cert.detail}
                                        </span>
                                    </div>
                                    <span className="font-mono text-xs text-accent">{cert.count}</span>
                                </motion.div>
                            ))}
                        </div>

                        <a
                            href="https://www.credly.com/users/carlos-barbosa.71a6836a"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-accent transition-colors"
                        >
                            View all on Credly
                            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
