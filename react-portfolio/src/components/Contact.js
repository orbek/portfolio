import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
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

  const contactMethods = [
    {
      title: 'LinkedIn',
      description: 'Connect with me professionally',
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/09barbosacarlos',
      buttonText: 'Connect',
      color: '#0077b5'
    },
    {
      title: 'GitHub',
      description: 'Explore my code repositories',
      icon: 'fab fa-github',
      link: 'https://github.com/orbek',
      buttonText: 'Follow',
      color: '#333'
    },
    {
      title: 'Credly',
      description: 'View my certifications',
      icon: 'fas fa-certificate',
      link: 'https://www.credly.com/users/carlos-barbosa.71a6836a',
      buttonText: 'View Badges',
      color: '#ff6b35'
    }
  ];

  return (
    <section id="contact" className="section section-light">
      <div className="container">
        <motion.div 
          className="section-header"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Let's Connect
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Ready to collaborate on your next data science or AI project?
          </motion.p>
        </motion.div>

        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="contact-grid">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="contact-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="contact-icon" style={{ backgroundColor: method.color }}>
                  <i className={method.icon}></i>
                </div>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
                <a 
                  href={method.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{ backgroundColor: method.color, borderColor: method.color }}
                >
                  {method.buttonText}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="contact-cta"
            variants={itemVariants}
          >
            <div className="cta-content">
              <h3>Ready to Work Together?</h3>
              <p>
                I'm currently open to new opportunities in AI implementation, data science consulting, 
                and educational roles. Let's discuss how we can drive innovation and efficiency through data.
              </p>
              <div className="cta-highlights">
                <div className="highlight-item">
                  <i className="fas fa-robot"></i>
                  <span>AI Implementation</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-chart-line"></i>
                  <span>Data Science Consulting</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-chalkboard-teacher"></i>
                  <span>Educational Roles</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-database"></i>
                  <span>Business Intelligence</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .contact-content {
          margin-top: 2rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .contact-card {
          background: var(--bg-card);
          border-radius: var(--border-radius);
          padding: 3rem 2rem;
          text-align: center;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
          border: 1px solid #e5e7eb;
          cursor: pointer;
        }

        .contact-card:hover {
          box-shadow: var(--shadow-xl);
        }

        .contact-icon {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
          font-size: 1.5rem;
          box-shadow: var(--shadow-md);
        }

        .contact-card h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
          font-size: 1.5rem;
        }

        .contact-card p {
          color: var(--text-light);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-cta {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: var(--border-radius);
          padding: 3rem;
          text-align: center;
          color: white;
          box-shadow: var(--shadow-lg);
        }

        .cta-content h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: white;
        }

        .cta-content p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          backdrop-filter: blur(10px);
          transition: var(--transition);
        }

        .highlight-item:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .highlight-item i {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .highlight-item span {
          font-weight: 500;
          color: white;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .contact-card {
            padding: 2rem 1.5rem;
          }

          .contact-cta {
            padding: 2rem;
          }

          .cta-content h3 {
            font-size: 1.5rem;
          }

          .cta-highlights {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
