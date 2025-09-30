import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'AI Solution Architect at Harvard',
          'Founder of Kojo Analytics',
          'Process Improvement & Prototyping',
          'Stakeholder Engagement & Delivery'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <section id="home" className="section hero-section">
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="profile-image-container" variants={itemVariants}>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
              alt="Carlos Barbosa" 
              className="profile-image"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            Carlos Barbosa
          </motion.h1>
          
          <motion.div className="hero-subtitle" variants={itemVariants}>
            <span ref={typedRef}></span>
          </motion.div>
          
          <motion.p className="hero-description" variants={itemVariants}>
            AI Solution Architect at Harvard. I analyze processes, identify inefficiencies, design solutions, prototype for feedback, and implement with stakeholder buy-in. Founder of Kojo Analytics (kojoanalytics.com).
          </motion.p>
          
          <motion.blockquote className="hero-quote" variants={itemVariants}>
            <p className="quote-text">
              "You can't improve what you can't measure"
            </p>
            <cite className="quote-author">— Peter Drucker</cite>
          </motion.blockquote>
          
          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#projects" className="btn btn-primary btn-lg">
              <i className="fas fa-rocket"></i>
              View My Work
            </a>
            <a href="https://www.linkedin.com/in/09barbosacarlos" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">
              <i className="fab fa-linkedin"></i>
              Let's Connect
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      
      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #581c87 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .hero-content {
          text-align: center;
          z-index: 2;
          position: relative;
        }
        
        .profile-image-container {
          margin-bottom: 2rem;
        }
        
        .profile-image {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 4px solid rgba(255, 255, 255, 0.2);
          box-shadow: var(--shadow-xl);
          object-fit: cover;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #f1f5f9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #e2e8f0;
          min-height: 2rem;
        }
        
        .hero-description {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .hero-quote {
          margin: 0 auto 3rem;
          max-width: 500px;
          padding: 1.5rem;
          border-left: 4px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          backdrop-filter: blur(10px);
        }
        
        .quote-text {
          font-size: 1.1rem;
          font-style: italic;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 0.75rem;
          line-height: 1.6;
        }
        
        .quote-author {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
          display: block;
          text-align: right;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        
        .hero-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
          }
          
          .hero-description {
            font-size: 1rem;
          }
          
          .profile-image {
            width: 120px;
            height: 120px;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-quote {
            padding: 1rem;
            margin-bottom: 2rem;
          }
          
          .quote-text {
            font-size: 1rem;
          }
          
          .quote-author {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
