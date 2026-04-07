import { motion } from 'framer-motion';

const About = () => {
    const capabilities = [
        { area: 'ML & Deep Learning', tools: 'PyTorch, TensorFlow, Scikit-learn, CNNs, Transformers' },
        { area: 'LLMs & AI Engineering', tools: 'LangChain, LangGraph, GPT-4, RAG, Multi-Agent Systems' },
        { area: 'Data Science', tools: 'Python, SQL, Power BI, Statistical Analysis, Feature Engineering' },
        { area: 'MLOps & Cloud', tools: 'Azure, Docker, CI/CD, FastAPI, Model Deployment' },
    ];

    return (
        <section id="about" className="py-24 md:py-32 border-t border-neutral-200">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                    {/* Left column */}
                    <motion.div
                        className="md:col-span-5"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="font-mono text-xs text-accent-dark tracking-[0.3em] uppercase mb-4">About</p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-8">
                            Building intelligent
                            <br />
                            systems that
                            <br />
                            <span className="text-accent">deliver impact.</span>
                        </h2>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-neutral-200">
                            {[
                                { value: '7+', label: 'Years' },
                                { value: '15+', label: 'Projects' },
                                { value: '20+', label: 'Certs' },
                            ].map((stat, i) => (
                                <div key={i}>
                                    <p className="font-display text-2xl font-bold text-neutral-900">{stat.value}</p>
                                    <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right column */}
                    <motion.div
                        className="md:col-span-7"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="space-y-6 mb-12">
                            <p className="text-lg text-neutral-700 leading-relaxed">
                                Machine Learning Engineer and Data Scientist with an M.S. in Data Science
                                from UT Austin. At Harvard Maintenance, I architect and deploy AI solutions that automate
                                workflows, extract insights from data, and deliver measurable business impact.
                            </p>
                            <p className="text-neutral-500 leading-relaxed">
                                My expertise spans the full ML lifecycle: from exploratory analysis and feature
                                engineering, through model development and validation, to production deployment
                                with LLMs, multi-agent systems, and RAG architectures. I also teach AI and
                                Machine Learning as Adjunct Faculty at Miami Dade College.
                            </p>
                        </div>

                        {/* Capabilities */}
                        <div className="space-y-0">
                            {capabilities.map((cap, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-4 border-b border-neutral-200/80"
                                >
                                    <span className="font-display text-sm font-semibold text-neutral-800 shrink-0 sm:w-48">
                                        {cap.area}
                                    </span>
                                    <span className="font-mono text-xs text-neutral-500">
                                        {cap.tools}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
