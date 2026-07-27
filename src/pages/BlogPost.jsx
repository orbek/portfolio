import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, formatDate } from '../data/posts';

const BlogPost = () => {
    const { slug } = useParams();
    const post = getPostBySlug(slug);

    useEffect(() => {
        if (!post) return undefined;

        const previousTitle = document.title;
        document.title = `${post.title} | Carlos Barbosa`;

        if (typeof window.gtag === 'function') {
            window.gtag('event', 'blog_post_view', { slug: post.slug });
        }

        return () => {
            document.title = previousTitle;
        };
    }, [post]);

    if (!post) {
        return <Navigate to="/" replace />;
    }

    const { title, date, readTime, Content } = post;

    return (
        <article className="min-h-screen bg-surface-deep">
            <div className="max-w-2xl mx-auto px-6 pt-28 md:pt-36 pb-24">
                <Link
                    to="/#writing"
                    className="group inline-flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-accent transition-colors mb-12"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                    Back to Writing
                </Link>

                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <div className="flex items-center gap-3 font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-6">
                        <span>{formatDate(date)}</span>
                        <span className="text-neutral-300">/</span>
                        <span>{readTime}</span>
                    </div>
                    <h1 className="font-display text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
                        {title}
                    </h1>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="post-body"
                >
                    <Content />
                </motion.div>
            </div>

            <footer className="py-12 text-center border-t border-neutral-200">
                <Link
                    to="/#writing"
                    className="font-mono text-xs text-neutral-400 hover:text-accent transition-colors tracking-wide"
                >
                    &larr; More writing
                </Link>
            </footer>
        </article>
    );
};

export default BlogPost;
