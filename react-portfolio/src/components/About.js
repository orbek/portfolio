import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
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

  const skills = {
    technical: ['Python', 'SQL', 'Power BI', 'Tableau', 'Azure SQL', 'AWS RDS', 'Machine Learning', 'Power Automate'],
    core: ['AI Implementation', 'Data Analytics', 'Database Management', 'Process Optimization', 'Project Management', 'Requirements Gathering']
  };

  const stats = [
    { number: '7+', label: 'Years Experience' },
    { number: '15+', label: 'Projects' },
    { number: '20+', label: 'Certifications' },
    { number: '2', label: 'Degrees' }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div 
          className="section-header"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            AI Solutions Architect at Harvard | Founder of Kojo Analytics
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <p className="lead">
                I am an <strong>AI Solutions Architect</strong> at Harvard, responsible for understanding internal processes, identifying inefficiencies, proposing solutions, prototyping to collect stakeholder feedback, and implementing with stakeholder buy-in and user acceptance.
              </p>
              <p>
                I’m also the founder of <strong>Kojo Analytics</strong> (<a href="https://kojoanalytics.com" target="_blank" rel="noopener noreferrer">kojoanalytics.com</a>), where I deliver AI-powered data solutions and consulting, from discovery and requirements through prototyping, validation, and implementation.
              </p>
              
              <div className="skills-section">
                <div className="skill-category">
                  <h4><i className="fas fa-code text-primary"></i> Technical Skills</h4>
                  <div className="skills-grid">
                    {skills.technical.map((skill, index) => (
                      <motion.span 
                        key={index} 
                        className="skill-pill"
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <div className="skill-category">
                  <h4><i className="fas fa-brain text-primary"></i> Core Competencies</h4>
                  <div className="skills-grid">
                    {skills.core.map((skill, index) => (
                      <motion.span 
                        key={index} 
                        className="skill-pill"
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: (index + skills.technical.length) * 0.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="stats-section" variants={itemVariants}>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="stat-card"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                  >
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about-content {
          margin-top: 2rem;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text {
          max-width: none;
        }

        .lead {
          font-size: 1.25rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
        }

        .about-text p {
          margin-bottom: 1.5rem;
          line-height: 1.7;
          color: var(--text-light);
        }

        .skills-section {
          margin-top: 3rem;
        }

        .skill-category {
          margin-bottom: 2rem;
        }

        .skill-category h4 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .skill-category h4 i {
          margin-right: 0.5rem;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .stats-section {
          position: sticky;
          top: 100px;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .stats-section {
            position: static;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
