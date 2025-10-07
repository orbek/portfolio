import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
    { href: '#/blog', label: 'Blog' }
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href.startsWith('#/')) {
      window.location.hash = href.substring(1);
      return;
    }
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="nav-content">
            <a href="#home" className="nav-brand" onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}>
              <i className="fas fa-chart-line"></i>
              Carlos Barbosa
            </a>

            <button 
              className={`nav-toggle ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(31, 41, 55, 0.95);
          backdrop-filter: blur(10px);
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
        }

        .navbar.scrolled {
          background: rgba(31, 41, 55, 0.98);
          box-shadow: var(--shadow-md);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
          transition: var(--transition);
        }

        .nav-brand i {
          margin-right: 0.5rem;
          color: var(--primary-color);
        }

        .nav-brand:hover {
          color: var(--primary-color);
          text-decoration: none;
        }

        .nav-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .nav-toggle span {
          width: 25px;
          height: 3px;
          background: white;
          margin: 3px 0;
          transition: var(--transition);
        }

        .nav-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .nav-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .nav-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
          transition: var(--transition);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background: var(--primary-color);
          transition: var(--transition);
        }

        .nav-link:hover {
          color: var(--primary-color);
          text-decoration: none;
        }

        .nav-link:hover::after {
          width: 100%;
          left: 0;
        }

        @media (max-width: 768px) {
          .nav-toggle {
            display: flex;
          }

          .nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(31, 41, 55, 0.98);
            flex-direction: column;
            padding: 2rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
          }

          .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-link {
            padding: 1rem 0;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .nav-link:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
