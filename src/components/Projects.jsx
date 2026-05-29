import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const featured = [
        {
            title: 'GrantLens',
            subtitle: 'AI Grant Discovery Platform',
            description: 'AI-powered grant discovery platform for US nonprofits. Aggregates and deduplicates federal, state, county, and foundation opportunities (Grants.gov, SAM.gov, USASpending, state portals, and foundations) into one search, ranks them against each org\'s mission using OpenAI embeddings over pgvector, and predicts eligibility against 174 requirements across 22 funders before you apply.',
            result: 'Live SaaS replacing weeks of manual portal-hopping — with AI matching, a readiness engine, LOI drafting, funder intelligence, and an MCP server exposing 10 tools to Claude.',
            tags: ['Next.js', 'React', 'TypeScript', 'Python', 'Azure', 'pgvector', 'OpenAI', 'Stripe', 'MCP'],
            demo: 'https://grantlens.io',
            number: '01',
        },
        {
            title: 'Autonomous Trading Agent',
            subtitle: 'Multi-Agent AI System',
            description: 'Fully autonomous Level 4 adaptive trading system with 6 specialized AI agents orchestrated via LangGraph. Features CAPM-based risk management, GPT-4 sentiment analysis, 15+ guardrails, Bayesian parameter optimization, and market regime detection.',
            result: 'Trades US stocks and cryptocurrency 24/7 with dynamic parameter adjustment.',
            tags: ['Python', 'LangGraph', 'OpenAI', 'Alpaca API', 'Azure', 'React'],
            demo: 'https://argus.databarbosa.com',
            number: '02',
        },
        {
            title: 'PNL Report Agent',
            subtitle: 'Financial Analysis AI',
            description: 'AI-powered financial analysis system that automatically identifies anomalies in P&L reports using multi-agent architecture with statistical analysis, vector similarity search, and GPT-4 report generation.',
            result: 'Automated anomaly detection across financial statements with natural language explanations.',
            tags: ['Python', 'OpenAI GPT-4', 'LangGraph', 'ChromaDB', 'RAG'],
            number: '03',
        },
        {
            title: 'TACOLCY CRM System',
            subtitle: 'Full-Stack Nonprofit Platform',
            description: 'Full-stack CRM for Belafonte TACOLCY Center nonprofit. Features client intake with tablet kiosk mode, CANS assessments, FNSP eligibility, donor management, and real-time analytics dashboard.',
            result: 'HIPAA-compliant system serving a Miami-based nonprofit with audit logging and role-based access.',
            tags: ['React', 'Azure Functions', 'Python', 'SQL Server', 'Docker'],
            demo: 'https://tacolcy.azurewebsites.net/',
            number: '04',
        },
    ];

    const other = [
        {
            title: 'STEM PACTS App',
            description: 'Grant management system for tracking metrics and objectives',
            tags: ['Azure', 'Streamlit', 'SQL Server'],
            demo: 'https://mdcgrant.azurewebsites.net',
        },
        {
            title: 'Deep Learning Research',
            description: 'Imitation-based AI agents in simulated environments',
            tags: ['Deep Learning', 'Imitation Learning'],
            github: 'https://github.com/orbek/portfolio/blob/main/_backup/papers/Deep%20Learning%20-%20Analyzing%20the%20Behavior%20of%20an%20Imitation-Based%20Agent.pdf',
        },
        {
            title: 'NLP Model Robustness',
            description: 'ELECTRA transformer robustness in NLI tasks',
            tags: ['ELECTRA', 'NLP', 'Ensemble Learning'],
            github: 'https://github.com/orbek/portfolio/blob/main/_backup/papers/Mitigating%20Dataset%20Artifacts%20Through%20Fine%20Tuning%20and%20Ensemble-Based%20Training.pdf',
        },
        {
            title: 'Disney Internship',
            description: 'Customer purchase behavior prediction for marketing optimization',
            tags: ['Streamlit', 'ML', 'Python'],
            github: 'https://github.com/orbek/DisneyIntership',
        },
    ];

    return (
        <section id="projects" className="py-24 md:py-32 border-t border-neutral-200">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <p className="font-mono text-xs text-accent-dark tracking-[0.3em] uppercase mb-4">Selected Work</p>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
                        Case Studies
                    </h2>
                </motion.div>

                {/* Featured projects */}
                <div className="space-y-20 md:space-y-32 mb-24 md:mb-32">
                    {featured.map((project, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.7 }}
                            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
                        >
                            {/* Number + Meta */}
                            <div className="md:col-span-3">
                                <span className="font-mono text-6xl md:text-7xl font-bold text-neutral-300 leading-none">
                                    {project.number}
                                </span>
                                <div className="mt-4 space-y-3">
                                    <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                                        {project.subtitle}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="font-mono text-[10px] text-neutral-500 px-2 py-1 border border-neutral-300 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-9">
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-500 leading-relaxed mb-4 max-w-2xl">
                                    {project.description}
                                </p>
                                <p className="text-neutral-700 leading-relaxed mb-8 max-w-2xl border-l-2 border-accent/40 pl-4">
                                    {project.result}
                                </p>

                                <div className="flex items-center gap-6">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-accent transition-colors"
                                        >
                                            <Github size={14} />
                                            Source
                                            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-2 font-mono text-xs text-accent hover:text-accent-dark transition-colors"
                                        >
                                            Live
                                            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Other projects */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="font-mono text-xs text-neutral-400 tracking-[0.3em] uppercase mb-8">
                        Other Projects
                    </p>
                    <div className="space-y-0">
                        {other.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-0 py-4 border-b border-neutral-200/80"
                            >
                                <div className="sm:flex-1">
                                    {(project.demo || project.github) ? (
                                        <a
                                            href={project.demo || project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-display text-sm font-semibold text-neutral-800 hover:text-accent transition-colors"
                                        >
                                            {project.title}
                                        </a>
                                    ) : (
                                        <span className="font-display text-sm font-semibold text-neutral-800">
                                            {project.title}
                                        </span>
                                    )}
                                </div>
                                <p className="sm:flex-1 text-sm text-neutral-400">{project.description}</p>
                                <div className="sm:flex-shrink-0 flex gap-2 sm:ml-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="font-mono text-[10px] text-neutral-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
