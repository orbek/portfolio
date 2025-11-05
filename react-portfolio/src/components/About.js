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

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: 'fa-brain',
      description: 'Building intelligent systems that learn and adapt',
      skills: [
        { name: 'Machine Learning', level: 'Advanced' },
        { name: 'LLM Integration', level: 'Advanced' },
        { name: 'AI Solutions Architecture', level: 'Expert' },
        { name: 'Prompt Engineering', level: 'Advanced' }
      ]
    },
    {
      title: 'Data Engineering & Analytics',
      icon: 'fa-database',
      description: 'Transforming raw data into actionable insights',
      skills: [
        { name: 'Python', level: 'Advanced' },
        { name: 'SQL', level: 'Expert' },
        { name: 'Power BI', level: 'Advanced' },
        { name: 'Tableau', level: 'Intermediate' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: 'fa-cloud',
      description: 'Scalable, cloud-native solutions',
      skills: [
        { name: 'Azure SQL', level: 'Advanced' },
        { name: 'AWS RDS', level: 'Intermediate' },
        { name: 'Power Automate', level: 'Advanced' },
        { name: 'API Integration', level: 'Advanced' }
      ]
    },
    {
      title: 'Product & Process',
      icon: 'fa-cogs',
      description: 'Delivering solutions that drive business value',
      skills: [
        { name: 'Process Optimization', level: 'Expert' },
        { name: 'Requirements Gathering', level: 'Expert' },
        { name: 'Stakeholder Management', level: 'Advanced' },
        { name: 'Agile/Scrum', level: 'Advanced' }
      ]
    }
  ];

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
            Turning Data into Decisions, Processes into Products
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
                I design and implement AI solutions that solve real business problems at Harvard. My work spans the full lifecycle: analyzing processes, architecting solutions, building prototypes for stakeholder validation, and delivering production systems with strong user adoption.
              </p>
              <p>
                I’m also the founder of <strong>Kojo Analytics</strong> (<a href="https://kojoanalytics.com" target="_blank" rel="noopener noreferrer">kojoanalytics.com</a>), where I deliver AI-powered data solutions and consulting, from discovery and requirements through prototyping, validation, and implementation.
              </p>
              
              <div className="skills-section">
                {skillCategories.map((category, catIndex) => (
                  <motion.div
                    key={catIndex}
                    className="skill-category-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: catIndex * 0.1 }}
                  >
                    <div className="category-header">
                      <div className="category-title">
                        <i className={`fas ${category.icon} category-icon`}></i>
                        <h4>{category.title}</h4>
                      </div>
                      <p className="category-description">{category.description}</p>
                    </div>
                    <div className="skills-grid">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className="skill-item"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                          transition={{ delay: (catIndex * 0.2) + (skillIndex * 0.05) }}
                        >
                          <span className="skill-name">{skill.name}</span>
                          <span className={`skill-level level-${skill.level.toLowerCase()}`}>
                            {skill.level}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
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
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .skill-category-card {
          background: var(--bg-card);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .skill-category-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-color);
        }

        .category-header {
          margin-bottom: 1.5rem;
        }

        .category-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .category-title h4 {
          margin: 0;
          color: var(--text-dark);
          font-size: 1.1rem;
        }

        .category-icon {
          color: var(--primary-color);
          font-size: 1.5rem;
        }

        .category-description {
          color: var(--text-light);
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
          padding-left: 2.25rem;
        }

        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .skill-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          background: var(--bg-light);
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .skill-item:hover {
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(245, 158, 11, 0.1));
          transform: translateX(5px);
        }

        .skill-name {
          font-weight: 500;
          color: var(--text-dark);
          font-size: 0.95rem;
        }

        .skill-level {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .level-expert {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
        }

        .level-advanced {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
        }

        .level-intermediate {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
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
