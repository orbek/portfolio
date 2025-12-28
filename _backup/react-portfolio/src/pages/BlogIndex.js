import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const BlogIndex = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch(`${process.env.PUBLIC_URL}/blog/posts.json?_=${Date.now()}`);
        if (!res.ok) throw new Error('Failed to load posts');
        const data = await res.json();
        setPosts(data.posts || []);
      } catch (e) {
        setError('Unable to load blog posts.');
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <section id="blog" className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Blog</h2>
            <p className="section-subtitle">Personal notes, tutorials, and thoughts.</p>
          </div>

          {loading && <p>Loading posts…</p>}
          {error && <p>{error}</p>}

          {!loading && !error && (
            <div className="grid grid-3">
              {posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  className="card project-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="card-header">
                    <h3 className="card-title">
                      <i className="fas fa-pen-nib"></i>
                      {post.title}
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="project-tags">
                      {post.tags?.map((tag) => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <p className="card-text">{post.excerpt}</p>
                    <a href={`#/blog/${post.slug}`} className="btn btn-primary">
                      <i className="fas fa-book-open"></i>
                      Read Post
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogIndex;


