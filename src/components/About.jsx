import { motion } from 'framer-motion';
import { Brain, Database, Cloud, Cog, GraduationCap, Award, Briefcase, FolderKanban } from 'lucide-react';

const About = () => {
    const skillCategories = [
        {
            title: 'AI & Machine Learning',
            icon: <Brain className="w-6 h-6" />,
            description: 'Building intelligent systems that learn and adapt',
            skills: [
                { name: 'Machine Learning', level: 'Advanced' },
                { name: 'LLM Integration', level: 'Advanced' },
                { name: 'AI Solutions Architecture', level: 'Expert' },
                { name: 'Prompt Engineering', level: 'Advanced' }
            ]
        },
        {
            title: 'Data Engineering & Analytics',
            icon: <Database className="w-6 h-6" />,
            description: 'Transforming raw data into actionable insights',
            skills: [
                { name: 'Python', level: 'Advanced' },
                { name: 'SQL', level: 'Expert' },
                { name: 'Power BI', level: 'Advanced' },
                { name: 'Tableau', level: 'Intermediate' }
            ]
        },
        {
            title: 'Cloud & Infrastructure',
            icon: <Cloud className="w-6 h-6" />,
            description: 'Scalable, cloud-native solutions',
            skills: [
                { name: 'Azure SQL', level: 'Advanced' },
                { name: 'AWS RDS', level: 'Intermediate' },
                { name: 'Power Automate', level: 'Advanced' },
                { name: 'API Integration', level: 'Advanced' }
            ]
        },
        {
            title: 'Product & Process',
            icon: <Cog className="w-6 h-6" />,
            description: 'Delivering solutions that drive business value',
            skills: [
                { name: 'Process Optimization', level: 'Expert' },
                { name: 'Requirements Gathering', level: 'Expert' },
                { name: 'Stakeholder Management', level: 'Advanced' },
                { name: 'Agile/Scrum', level: 'Advanced' }
            ]
        }
    ];

    const stats = [
        { number: '7+', label: 'Years Experience', icon: <Briefcase className="w-5 h-5" /> },
        { number: '15+', label: 'Projects', icon: <FolderKanban className="w-5 h-5" /> },
        { number: '20+', label: 'Certifications', icon: <Award className="w-5 h-5" /> },
        { number: '2', label: 'Degrees', icon: <GraduationCap className="w-5 h-5" /> }
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
                        I design and implement AI solutions that solve real business problems at Harvard. My work spans the full lifecycle: analyzing processes, architecting solutions, building prototypes for stakeholder validation, and delivering production systems with strong user adoption.
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">
                        I'm also the founder of{' '}
                        <a
                            href="https://kojoanalytics.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 hover:text-primary-300 underline underline-offset-2"
                        >
                            Kojo Analytics
                        </a>, where I deliver AI-powered data solutions and consulting, from discovery and requirements through prototyping, validation, and implementation.
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        I also serve as an <strong className="text-slate-300">Adjunct Faculty</strong> member at Miami Dade College, teaching classes in Intro to Artificial Intelligence and Machine Learning.
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
