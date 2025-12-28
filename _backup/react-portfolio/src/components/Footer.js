import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/09barbosacarlos',
      icon: 'fab fa-linkedin',
      label: 'LinkedIn'
    },
    {
      href: 'https://github.com/orbek',
      icon: 'fab fa-github',
      label: 'GitHub'
    },
    {
      href: 'https://www.credly.com/users/carlos-barbosa.71a6836a',
      icon: 'fas fa-certificate',
      label: 'Credly'
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-title">Carlos Barbosa</h3>
            <p className="footer-description">
              AI Solutions Architect at Harvard and founder of <a href="https://kojoanalytics.com" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>Kojo Analytics</a>. I analyze processes, design solutions, prototype for feedback, and implement with stakeholder buy-in.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={link.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-subtitle">Expertise</h4>
            <ul className="footer-links">
              <li>AI Implementation</li>
              <li>Data Science</li>
              <li>Business Intelligence</li>
              <li>Machine Learning</li>
              <li>Process Optimization</li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-subtitle">Get In Touch</h4>
            <p className="contact-info">
              Open to engagements in AI solution architecture, process optimization, data science consulting, and prototyping.
            </p>
            <a 
              href="https://www.linkedin.com/in/09barbosacarlos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              <i className="fab fa-linkedin"></i>
              Let's Connect
            </a>
            <div style={{ marginTop: '0.75rem' }}>
              <a 
                href="https://kojoanalytics.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <i className="fas fa-globe"></i>
                Visit Kojo Analytics
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Carlos Barbosa. All rights reserved.</p>
            <p className="footer-note">
              Built with React & deployed on GitHub Pages
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-dark);
          color: white;
          padding: 4rem 0 2rem;
          margin-top: 4rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-section {
          max-width: none;
        }

        .footer-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--primary-color), #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-subtitle {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }

        .footer-description {
          color: #d1d5db;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 2.5rem;
          height: 2.5rem;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: var(--transition);
          box-shadow: var(--shadow-md);
        }

        .social-link:hover {
          color: white;
          text-decoration: none;
          box-shadow: var(--shadow-lg);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
          color: #d1d5db;
          transition: var(--transition);
        }

        .footer-links li:hover {
          color: var(--primary-color);
        }

        .footer-links a {
          color: inherit;
          text-decoration: none;
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: var(--primary-color);
          text-decoration: none;
        }

        .contact-info {
          color: #d1d5db;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        .btn-outline {
          background: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }

        .btn-outline:hover {
          background: var(--primary-color);
          color: white;
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 2rem;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          margin: 0;
          color: #9ca3af;
          font-size: 0.875rem;
        }

        .footer-note {
          font-style: italic;
        }

        @media (max-width: 968px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 640px) {
          .footer {
            padding: 3rem 0 2rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
