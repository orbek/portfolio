import { motion } from 'framer-motion';
import { Linkedin, Github, Award, Bot, LineChart, GraduationCap, Database } from 'lucide-react';

const Contact = () => {
    const contactMethods = [
        {
            title: 'LinkedIn',
            description: 'Connect with me professionally',
            icon: <Linkedin className="w-6 h-6" />,
            link: 'https://www.linkedin.com/in/09barbosacarlos',
            buttonText: 'Connect',
            color: 'from-blue-600 to-blue-500'
        },
        {
            title: 'GitHub',
            description: 'Explore my code repositories',
            icon: <Github className="w-6 h-6" />,
            link: 'https://github.com/orbek',
            buttonText: 'Follow',
            color: 'from-slate-700 to-slate-600'
        },
        {
            title: 'Credly',
            description: 'View my certifications',
            icon: <Award className="w-6 h-6" />,
            link: 'https://www.credly.com/users/carlos-barbosa.71a6836a',
            buttonText: 'View Badges',
            color: 'from-orange-600 to-orange-500'
        }
    ];

    const highlights = [
        { icon: <Bot className="w-5 h-5" />, label: 'AI Implementation' },
        { icon: <LineChart className="w-5 h-5" />, label: 'Data Science Consulting' },
        { icon: <GraduationCap className="w-5 h-5" />, label: 'Educational Roles' },
        { icon: <Database className="w-5 h-5" />, label: 'Business Intelligence' }
    ];

    return (
        <section id="contact" className="py-20 bg-dark-100/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-8" />
                    <p className="text-slate-400 text-lg">
                        Ready to collaborate on your next data science or AI project?
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="bg-dark-200 p-8 rounded-2xl border border-slate-800 hover:border-primary-500/50 transition-all text-center"
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${method.color} rounded-full mb-6 text-white shadow-lg`}>
                                {method.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                            <p className="text-slate-400 mb-6">{method.description}</p>
                            <a
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${method.color} text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary-500/20`}
                            >
                                {method.buttonText}
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-primary-500/20"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Work Together?</h3>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        I'm currently open to new opportunities in AI implementation, data science consulting,
                        and educational roles. Let's discuss how we can drive innovation and efficiency through data.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                whileHover={{ y: -3 }}
                                className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 rounded-xl backdrop-blur-sm"
                            >
                                <span className="text-white/90">{item.icon}</span>
                                <span className="text-white font-medium text-sm">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
