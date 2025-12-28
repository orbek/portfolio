import { motion } from 'framer-motion';
import { Brain, Database, Cloud, Code, GraduationCap, Award, Briefcase, FolderKanban } from 'lucide-react';

const About = () => {
    const skillCategories = [
        {
            title: 'Machine Learning & Deep Learning',
            icon: <Brain className="w-6 h-6" />,
            description: 'Building and deploying production ML systems',
            skills: [
                { name: 'PyTorch / TensorFlow', level: 'Advanced' },
                { name: 'Scikit-learn', level: 'Expert' },
                { name: 'Deep Learning (CNNs, RNNs, Transformers)', level: 'Advanced' },
                { name: 'NLP / Text Classification', level: 'Advanced' },
                { name: 'Computer Vision', level: 'Intermediate' }
            ]
        },
        {
            title: 'LLMs & AI Engineering',
            icon: <Code className="w-6 h-6" />,
            description: 'Developing intelligent AI-powered applications',
            skills: [
                { name: 'LangChain / LangGraph', level: 'Expert' },
                { name: 'OpenAI API / GPT-4', level: 'Expert' },
                { name: 'RAG Systems', level: 'Advanced' },
                { name: 'Multi-Agent Architectures', level: 'Advanced' },
                { name: 'Prompt Engineering', level: 'Expert' }
            ]
        },
        {
            title: 'Data Science & Analytics',
            icon: <Database className="w-6 h-6" />,
            description: 'Extracting insights from complex datasets',
            skills: [
                { name: 'Python (Pandas, NumPy)', level: 'Expert' },
                { name: 'SQL / Database Design', level: 'Expert' },
                { name: 'Statistical Analysis', level: 'Advanced' },
                { name: 'Data Visualization (Power BI, Matplotlib)', level: 'Advanced' },
                { name: 'Feature Engineering', level: 'Advanced' }
            ]
        },
        {
            title: 'MLOps & Cloud Infrastructure',
            icon: <Cloud className="w-6 h-6" />,
            description: 'Deploying and scaling ML systems in production',
            skills: [
                { name: 'Azure (Functions, SQL, Storage)', level: 'Advanced' },
                { name: 'Docker / Containerization', level: 'Advanced' },
                { name: 'CI/CD Pipelines', level: 'Advanced' },
                { name: 'REST APIs / FastAPI', level: 'Advanced' },
                { name: 'Model Deployment & Monitoring', level: 'Intermediate' }
            ]
        }
    ];

    const stats = [
        { number: '7+', label: 'Years Experience', icon: <Briefcase className="w-5 h-5" /> },
        { number: '15+', label: 'ML Projects', icon: <FolderKanban className="w-5 h-5" /> },
        { number: '20+', label: 'Certifications', icon: <Award className="w-5 h-5" /> },
        { number: 'M.S.', label: 'Data Science', icon: <GraduationCap className="w-5 h-5" /> }
    ];

    const getLevelColor = (level) => {
        switch (level.toLowerCase()) {
            case 'expert':
                return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
            case 'advanced':
                return 'bg-primary-500/20 text-primary-400 border-primary-500/30';
            case 'intermediate':
                return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
            default:
                return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
        }
    };

    return (
        <section id="about" className="py-20 bg-dark-100/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-8" />
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        I'm a <strong className="text-white">Machine Learning Engineer</strong> and <strong className="text-white">Data Scientist</strong> with a M.S. in Data Science from UT Austin. At Harvard, I architect and deploy AI solutions that automate workflows, extract insights from data, and deliver measurable business impact.
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">
                        My expertise spans the full ML lifecycle: from exploratory analysis and feature engineering, through model development and validation, to production deployment with LLMs, multi-agent systems, and RAG architectures. I'm also the founder of{' '}
                        <a
                            href="https://kojoanalytics.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 hover:text-primary-300 underline underline-offset-2"
                        >
                            Kojo Analytics
                        </a>.
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        I also serve as <strong className="text-slate-300">Adjunct Faculty</strong> at Miami Dade College, teaching Intro to Artificial Intelligence and Machine Learning courses.
                    </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                            className="bg-dark-200 p-6 rounded-2xl border border-slate-800 text-center hover:border-primary-500/50 transition-all"
                        >
                            <div className="flex justify-center mb-3 text-primary-400">
                                {stat.icon}
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                            <div className="text-slate-400 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            className="bg-dark-200 p-6 rounded-2xl border border-slate-800 hover:border-primary-500/50 transition-all"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-primary-500/10 rounded-lg text-primary-400">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>
                            <p className="text-slate-500 text-sm mb-4 ml-12">{category.description}</p>

                            <div className="space-y-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                                        className="flex items-center justify-between p-3 bg-dark-100 rounded-lg hover:bg-dark-100/80 transition-colors"
                                    >
                                        <span className="text-slate-300 font-medium">{skill.name}</span>
                                        <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                                            {skill.level}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
