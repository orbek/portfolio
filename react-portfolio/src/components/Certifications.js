import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Certifications = () => {
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
      icon: 'fas fa-chart-bar',
      description: 'Power BI, Excel, SQL',
      count: '8+'
    },
    {
      title: 'Data Science & AI',
      icon: 'fas fa-robot',
      description: 'Python, ML, Deep Learning',
      count: '10+'
    },
    {
      title: 'Agile & Project Management',
      icon: 'fas fa-tasks',
      description: 'Scrum, Sprint Planning',
      count: '3+'
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      description: 'Azure, AWS, Git',
      count: '5+'
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <motion.div 
          className="section-header"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Education & Certifications
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Continuous learning and professional development in data science and AI
          </motion.p>
        </motion.div>

        <motion.div 
          className="certifications-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="certifications-grid">
            <motion.div className="education-section" variants={itemVariants}>
              <h3><i className="fas fa-graduation-cap text-primary"></i> Education</h3>
              <div className="timeline">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ x: -50, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                    transition={{ delay: index * 0.3 }}
                  >
                    <h4>{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>
                    <span className="year">{edu.year}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="certifications-section" variants={itemVariants}>
              <h3><i className="fas fa-certificate text-primary"></i> Professional Certifications</h3>
              <div className="cert-grid">
                {certificationCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    className="cert-card"
                    initial={{ scale: 0, rotate: -5 }}
                    animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -5 }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="cert-icon">
                      <i className={category.icon}></i>
                    </div>
                    <h4>{category.title}</h4>
                    <p>{category.description}</p>
                    <span className="cert-count">{category.count} Certifications</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="cert-action"
                variants={itemVariants}
              >
                <a 
                  href="https://www.credly.com/users/carlos-barbosa.71a6836a" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline btn-lg"
                >
                  <i className="fas fa-external-link-alt"></i>
                  View All Certifications on Credly
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .certifications-content {
          margin-top: 2rem;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          align-items: start;
        }

        .education-section h3,
        .certifications-section h3 {
          margin-bottom: 2rem;
          color: var(--text-dark);
          font-size: 1.5rem;
        }

        .education-section h3 i,
        .certifications-section h3 i {
          margin-right: 0.75rem;
        }

        .timeline-item {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .timeline-item:last-child {
          border-bottom: none;
        }

        .timeline-item h4 {
          margin-bottom: 0.5rem;
          color: var(--text-dark);
          font-size: 1.25rem;
        }

        .institution {
          color: var(--text-light);
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .year {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .cert-card {
          background: var(--bg-card);
          border-radius: var(--border-radius);
          padding: 2rem;
          text-align: center;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
          border: 1px solid #e5e7eb;
        }

        .cert-card:hover {
          box-shadow: var(--shadow-lg);
        }

        .cert-icon {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
          font-size: 1.5rem;
        }

        .cert-card h4 {
          margin-bottom: 0.75rem;
          color: var(--text-dark);
          font-size: 1.1rem;
        }

        .cert-card p {
          color: var(--text-light);
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .cert-count {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .cert-action {
          text-align: center;
        }

        @media (max-width: 968px) {
          .certifications-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .cert-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
          }

          .cert-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .cert-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
