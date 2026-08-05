import { motion } from 'framer-motion';

const About = () => {
    const capabilities = [
        { area: 'AI Agents & LLM Systems', tools: 'Multi-agent pipelines, tool use, structured output, prompt versioning' },
        { area: 'Evaluation & AI Safety', tools: 'Golden sets, CI eval gates, confidence calibration, shadow-mode validation' },
        { area: 'ML & Deep Learning', tools: 'PyTorch, Transformers, Scikit-learn, Feature Engineering' },
        { area: 'Backend & Data', tools: 'Python, FastAPI, SQLAlchemy, SQL Server, Event-Driven Architecture' },
        { area: 'Cloud & MLOps', tools: 'AWS Bedrock, Azure, Docker, CI/CD, Model Registry & Versioning' },
    ];

    const leadership = [
        { label: 'Ownership', detail: 'AI portfolio — strategy, roadmap, architecture, delivery' },
        { label: 'Stakeholders', detail: 'C-suite sponsorship (CEO, CFO, COO, CLO) and director-level partners' },
        { label: 'Team', detail: '2 engineers, mentored toward full-time roles' },
        { label: 'Delivery', detail: 'Discovery and brainstorming through build, validation, and rollout' },
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
                                { value: '11', label: 'Shipped' },
                                { value: '6', label: 'In Production' },
                                { value: '2', label: 'Engineers Led' },
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
                                AI Solutions Manager at Harvard Maintenance, where I own the AI
                                portfolio — setting the roadmap, running discovery with executive
                                sponsors, and staying hands-on in the architecture. M.S. in Data
                                Science from UT Austin.
                            </p>
                            <p className="text-neutral-500 leading-relaxed">
                                I take initiatives from the first discovery session through production:
                                framing the problem with directors and C-suite leadership, designing the
                                system, building it, then proving it works before it earns any autonomy.
                                I lead a team of two engineers I'm developing toward full-time roles, and
                                I teach AI and Machine Learning as Adjunct Faculty at Miami Dade College.
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

                        {/* Leadership & scope */}
                        <div className="mt-12">
                            <p className="font-mono text-xs text-accent-dark tracking-[0.3em] uppercase mb-6">
                                Leadership &amp; Scope
                            </p>
                            <div className="space-y-0">
                                {leadership.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-4 border-b border-neutral-200/80"
                                    >
                                        <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest shrink-0 sm:w-32 sm:pt-1">
                                            {item.label}
                                        </span>
                                        <span className="text-sm text-neutral-600">
                                            {item.detail}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
