import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { posts, formatDate } from '../data/posts';

const Writing = () => {
    return (
        <section id="writing" className="py-24 md:py-32 border-t border-neutral-200">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <p className="font-mono text-xs text-accent-dark tracking-[0.3em] uppercase mb-4">Writing</p>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
                        Notes &amp; Essays
                    </h2>
                </motion.div>

                <div className="space-y-0">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            className="group border-b border-neutral-200/80 first:border-t py-8 md:py-10"
                        >
                            <Link to={`/blog/${post.slug}`} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                                <div className="md:col-span-3">
                                    <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                                        {formatDate(post.date)}
                                    </p>
                                    <p className="font-mono text-[10px] text-neutral-400 tracking-widest mt-1">
                                        {post.readTime}
                                    </p>
                                </div>

                                <div className="md:col-span-9">
                                    <h3 className="font-display text-xl md:text-2xl font-bold text-neutral-900 tracking-tight mb-3 group-hover:text-accent transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-neutral-500 leading-relaxed max-w-2xl mb-4">
                                        {post.excerpt}
                                    </p>
                                    <span className="inline-flex items-center gap-2 font-mono text-xs text-accent group-hover:text-accent-dark transition-colors">
                                        Read
                                        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Writing;
