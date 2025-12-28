import { motion } from 'framer-motion';
import { GraduationCap, Award, BarChart3, Brain, ListTodo, Cloud, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const education = [
        {
            degree: 'Master of Science: Data Science',
            institution: 'University of Texas at Austin',
            year: '2024'
        },
        {
            degree: 'Bachelor of Science: Industrial Engineering',
            institution: 'FAESA',
            year: '2016'
        }
    ];

    const certificationCategories = [
        {
            title: 'Business Intelligence',
            icon: <BarChart3 className="w-6 h-6" />,
            description: 'Power BI, Excel, SQL',
            count: '8+'
        },
        {
            title: 'Data Science & AI',
            icon: <Brain className="w-6 h-6" />,
            description: 'Python, ML, Deep Learning',
            count: '10+'
        },
        {
            title: 'Agile & Project Management',
            icon: <ListTodo className="w-6 h-6" />,
            description: 'Scrum, Sprint Planning',
            count: '3+'
        },
        {
            title: 'Cloud & DevOps',
            icon: <Cloud className="w-6 h-6" />,
            description: 'Azure, AWS, Git',
            count: '5+'
        }
    ];

    return (
        <section id="certifications" className="py-20 bg-dark">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education & Certifications</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-8" />
                    <p className="text-slate-400 text-lg">
                        Continuous learning and professional development in data science and AI
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Education Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-1"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-primary-500/10 rounded-lg text-primary-400">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Education</h3>
                        </div>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="bg-dark-200 p-6 rounded-2xl border border-slate-800 hover:border-primary-500/50 transition-all"
                                >
                                    <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                                    <p className="text-slate-400 mb-2">{edu.institution}</p>
                                    <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-sm font-semibold rounded-full">
                                        {edu.year}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-primary-500/10 rounded-lg text-primary-400">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {certificationCategories.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="bg-dark-200 p-6 rounded-2xl border border-slate-800 hover:border-primary-500/50 transition-all text-center"
                                >
                                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full mb-4 text-white">
                                        {category.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{category.title}</h4>
                                    <p className="text-slate-500 text-sm mb-3">{category.description}</p>
                                    <span className="text-primary-400 font-semibold text-sm uppercase tracking-wide">
                                        {category.count} Certifications
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-center"
                        >
                            <a
                                href="https://www.credly.com/users/carlos-barbosa.71a6836a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all border border-slate-700 hover:border-primary-500/50"
                            >
                                <ExternalLink size={18} />
                                View All Certifications on Credly
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
