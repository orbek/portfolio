import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Autonomous Trading Agent',
            description: 'Level 4 adaptive trading system with 6 specialized AI agents orchestrated via LangGraph. Features CAPM-based risk management, GPT-4 sentiment analysis, 15+ guardrails, Bayesian parameter optimization, and market regime detection for swing trading US stocks.',
            tags: ['Python', 'LangGraph', 'OpenAI GPT-4', 'Alpaca API', 'Azure', 'React'],
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            github: 'https://github.com/orbek/portfolio/tree/main/_backup/Projects/Autonomoues%20Trading%20Agent',
            demo: 'https://agenttrading.azurewebsites.net',
        },
        {
            title: 'PNL Report Agent',
            description: 'AI-powered financial analysis system that automatically identifies anomalies in P&L reports using multi-agent architecture with statistical analysis, vector similarity search, and GPT-4 report generation.',
            tags: ['Python', 'OpenAI GPT-4', 'LangGraph', 'ChromaDB', 'RAG'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            github: 'https://github.com/orbek/PNL-Report-Agent',
            demo: '#',
        },
        {
            title: 'STEM PACTS App',
            description: 'Complete grant management system for tracking all grant metrics and objectives. A comprehensive one-place solution for grant management featuring microservices architecture with Azure Functions.',
            tags: ['Azure', 'Streamlit', 'SQL Server'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            github: '#',
            demo: '#',
        },
        {
            title: 'TACOLCY CRM System',
            description: 'Full-stack CRM for Belafonte TACOLCY Center nonprofit. Features client intake with tablet kiosk mode, CANS assessments, FNSP eligibility, donor management, and real-time analytics dashboard with HIPAA-compliant audit logging.',
            tags: ['React', 'Azure Functions', 'Python', 'SQL Server', 'Docker'],
            image: '/assets/images/tacolcy-logo.png',
            github: 'https://github.com/orbek/portfolio/tree/main/_backup/Projects/TACOLCY%20CRM',
            demo: '#',
        },
        {
            title: 'Deep Learning Research',
            description: 'Research on imitation-based AI agents in simulated environments, developing multiple deep learning models for expert gameplay strategy replication.',
            tags: ['Deep Learning', 'Imitation Learning', 'SuperTuxKart'],
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            github: 'https://github.com/orbek/portfolio/blob/main/_backup/papers/Deep%20Learning%20-%20Analyzing%20the%20Behavior%20of%20an%20Imitation-Based%20Agent.pdf',
            demo: '#',
        },
        {
            title: 'NLP Model Robustness',
            description: 'Investigation of ELECTRA-small transformer model robustness in NLI tasks, developing ensemble-based training methods to mitigate dataset artifacts.',
            tags: ['ELECTRA', 'NLP', 'Ensemble Learning'],
            image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            github: 'https://github.com/orbek/portfolio/blob/main/_backup/papers/Mitigating%20Dataset%20Artifacts%20Through%20Fine%20Tuning%20and%20Ensemble-Based%20Training.pdf',
            demo: '#',
        },
        {
            title: 'Disney Internship Project',
            description: 'Developed a Streamlit application with Logistic Regression to predict customer purchase behavior, helping marketing teams optimize campaigns and increase revenue.',
            tags: ['Streamlit', 'Machine Learning', 'Python'],
            image: 'https://images.unsplash.com/photo-1597466599360-3b9775841aec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            github: 'https://github.com/orbek/DisneyIntership',
            demo: '#',
        },
    ];

    return (
        <section id="projects" className="py-20 bg-dark">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-8" />
                    <p className="text-slate-400 text-lg">
                        A selection of projects that demonstrate my expertise in solving real-world problems with technology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-dark-200 rounded-2xl overflow-hidden border border-slate-800 hover:border-primary-500/50 transition-all group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent z-10 opacity-60" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                                    <a href={project.github} className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors">
                                        <Github size={18} />
                                        Code
                                    </a>
                                    <a href={project.demo} className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors">
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
