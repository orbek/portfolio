import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Lock } from 'lucide-react';

const Projects = () => {
    const featured = [
        {
            title: 'Enterprise AI Decision Layer',
            subtitle: 'Enterprise Agent Platform · Program Lead',
            description: 'An AI decision layer over a live service-operations platform, built as an event-driven agent pipeline: it polls system state on a short cycle, assembles the same context a human reviewer would see, classifies risk with an LLM, and fuses that into a composite confidence score. Above threshold it acts through the platform\'s own permitted-action API — never writing to the database directly, never inferring what it may do. Below threshold it hands a human a pre-filled decision card instead of a blank ticket.',
            result: 'Led it from discovery to approved production program — charter, roadmap, executive stakeholder sessions, and a build-vs-buy analysis that redirected a six-figure external design proposal in-house. Validated observe-only before earning any autonomy: 10 models across 2 providers benchmarked against a hand-labeled golden set, a ≥90% accuracy gate in CI, thresholds derived from Wilson lower-bound agreement curves rather than chosen by hand, and every decision — executed, shadowed, or escalated — written to an auditable ledger with its rationale, evidence, and the policy in force at that moment.',
            tags: ['Python', 'FastAPI', 'AWS Bedrock', 'Angular', 'SQL Server', 'LLM Evals'],
            proprietary: true,
            number: '01',
        },
        {
            title: 'GrantLens',
            subtitle: 'AI Grant Discovery Platform',
            description: 'AI-powered grant discovery platform for US nonprofits. Aggregates and deduplicates federal, state, county, and foundation opportunities (Grants.gov, SAM.gov, USASpending, state portals, and foundations) into one search, ranks them against each org\'s mission using OpenAI embeddings over pgvector, and predicts eligibility against 174 requirements across 22 funders before you apply.',
            result: 'Live SaaS replacing weeks of manual portal-hopping — with AI matching, a readiness engine, LOI drafting, funder intelligence, and an MCP server exposing 10 tools to Claude.',
            tags: ['Next.js', 'React', 'TypeScript', 'Python', 'Azure', 'pgvector', 'OpenAI', 'Stripe', 'MCP'],
            demo: 'https://grantlens.io',
            number: '02',
        },
        {
            title: 'Argus — Autonomous Trading Agent',
            subtitle: 'Personal Project · Multi-Agent AI System · Decision Layer Open-Sourced',
            description: 'An autonomous trading system for US equities, crypto, and options, built as a five-stage agent pipeline — screener, research, signal, risk, execution — with 15+ guardrails that run in two postures: binary rejection, or a sliding scale that shrinks position size instead of refusing outright. A learning subsystem retunes signal weights, thresholds, and regime-specific sizing from realized outcomes, with regime detection, MFE/MAE outcome tracking, P&L attribution, and counterfactual logging underneath it.',
            result: 'I open-sourced the decision layer — the agent pipeline, the guardrails, and the adaptive-learning subsystem — with the brokerage and notification adapters replaced by signature-compatible stubs, so the repo can be read and audited but cannot place an order. The part worth studying is the validation lane: a proposed parameter change becomes a candidate row, runs in shadow against live bars, and only reaches production after promotion and binomial significance gates clear it — rejections recorded, not silently dropped. Published results are measured rather than marketed, including where the system is weak.',
            tags: ['Python', 'LangGraph', 'OpenAI', 'Alpaca API', 'PostgreSQL', 'Azure', 'React'],
            github: 'https://github.com/orbek/argus-trading-decision-layer',
            demo: 'https://argus.databarbosa.com',
            number: '03',
        },
        {
            title: 'PNL Report Agent',
            subtitle: 'Financial Analysis AI',
            description: 'AI-powered financial analysis system that automatically identifies anomalies in P&L reports using multi-agent architecture with statistical analysis, vector similarity search, and GPT-4 report generation.',
            result: 'Automated anomaly detection across financial statements with natural language explanations.',
            tags: ['Python', 'OpenAI GPT-4', 'LangGraph', 'ChromaDB', 'RAG'],
            number: '04',
        },
        {
            title: 'TACOLCY CRM System',
            subtitle: 'Full-Stack Nonprofit Platform',
            description: 'Full-stack CRM for Belafonte TACOLCY Center nonprofit. Features client intake with tablet kiosk mode, CANS assessments, FNSP eligibility, donor management, and real-time analytics dashboard.',
            result: 'HIPAA-compliant system serving a Miami-based nonprofit with audit logging and role-based access.',
            tags: ['React', 'Azure Functions', 'Python', 'SQL Server', 'Docker'],
            demo: 'https://tacolcy.azurewebsites.net/',
            number: '05',
        },
        {
            title: 'Enterprise Voice Agents',
            subtitle: 'Regulated Voice AI · Reference Architectures',
            description: 'Two open-source, production-shaped voice-agent reference architectures for regulated domains, on a shared half-cascade LiveKit + SIP pipeline (native audio → text LLM → streaming TTS) with safety guardrails enforced in code, not prompts. PatientLine is a HIPAA-aware patient-access agent (no medical advice, no refill approvals, no PHI before identity verification); WillCall is a PCI-aware ticketing agent whose architecture keeps card data entirely out of the AI environment.',
            result: 'Safety is mechanically provable: release-blocking CI evals enforce zero clinical advice / zero refill approvals (PatientLine) and a Luhn-checked scan proving zero card numbers in any transcript or log (WillCall) — shipped with Terraform IaC, BAA/PCI data-flow mapping, and ADRs defending every decision.',
            tags: ['Python', 'LiveKit', 'SIP', 'LLM', 'HIPAA', 'PCI DSS', 'Terraform'],
            github: 'https://github.com/orbek/voice-agent-reference-architectures',
            number: '06',
        },
        {
            title: 'Time & Attendance Platform',
            subtitle: 'Built and Rolled Out',
            description: 'An employee-facing portal for time, attendance, and paid-time-off management, replacing manual PTO tracking for a distributed workforce. Angular front end on a Python API, hosted on AWS over SQL Server, with single sign-on through Microsoft Entra ID so it authenticates against the directory employees already use. I developed and implemented it end to end — requirements through deployment — and ran it as a controlled pilot before any wider release.',
            result: 'Piloted with corporate staff, now expanding to branch locations: a staged rollout that used the pilot to settle real workflow and edge cases before scaling, rather than a single launch across every site at once.',
            tags: ['Angular', 'Python', 'AWS', 'SQL Server', 'Microsoft Entra ID', 'SSO'],
            proprietary: true,
            number: '07',
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
                                    {project.proprietary && (
                                        <span className="flex items-center gap-2 font-mono text-xs text-neutral-400">
                                            <Lock size={12} />
                                            Proprietary — no public link
                                        </span>
                                    )}
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
