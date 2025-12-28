import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const postsRes = await fetch(`${process.env.PUBLIC_URL}/blog/posts.json?_=${Date.now()}`);
        const postsData = await postsRes.json();
        const found = (postsData.posts || []).find((p) => p.slug === slug);
        setMeta(found || null);

        const res = await fetch(`${process.env.PUBLIC_URL}/blog/${slug}.md?_=${Date.now()}`);
        if (!res.ok) throw new Error('Post not found');
        const text = await res.text();
        setContent(text);
      } catch (e) {
        setError('Unable to load post.');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  return (
    <div className="App">
      <Navbar />
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{meta?.title || 'Blog Post'}</h2>
            {meta?.date && (
              <p className="section-subtitle">{new Date(meta.date).toLocaleDateString()}</p>
            )}
          </div>
          {loading && <p>Loading…</p>}
          {error && <p>{error}</p>}
          {!loading && !error && (
            <article className="card" style={{ padding: '2rem' }}>
              <ReactMarkdown>{content}</ReactMarkdown>
            </article>
          )}
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/blog" className="btn btn-outline">
              <i className="fas fa-arrow-left"></i>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPost;


