import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: 'PNL Report Agent',
      description: 'AI-powered financial analysis system that automatically identifies anomalies in P&L reports using multi-agent architecture with statistical analysis, vector similarity search, and GPT-4 report generation.',
      tags: ['Python', 'OpenAI GPT-4', 'LangGraph', 'ChromaDB', 'RAG'],
      icon: 'fas fa-chart-line',
      link: 'https://github.com/orbek/PNL-Report-Agent',
      type: 'github'
    },
    {
      title: 'STEM PACTS App',
      description: 'Web application for tracking tutoring sessions and managing attendance, featuring microservices architecture with Azure Functions and secure cloud-based data management.',
      tags: ['Azure', 'Streamlit', 'SQL Server', 'Microservices'],
      icon: 'fas fa-users',
      link: null,
      type: 'private'
    },
    {
      title: 'Personal Financial Planner',
      description: 'AI-powered personal finance manager with PDF bank statement processing using Google Gemini AI, OAuth authentication, and real-time dashboard visualization.',
      tags: ['Streamlit', 'Google Gemini AI', 'Supabase', 'OAuth', 'PDF Processing'],
      icon: 'fas fa-calculator',
      link: 'https://github.com/orbek/financial-planner',
      type: 'github'
    },
    {
      title: 'Deep Learning Research',
      description: 'Research on imitation-based AI agents in simulated environments, developing multiple deep learning models for expert gameplay strategy replication.',
      tags: ['Deep Learning', 'Imitation Learning', 'SuperTuxKart', 'PyTorch'],
      icon: 'fas fa-brain',
      link: 'https://github.com/orbek/portfolio/blob/main/papers/Deep%20Learning%20-%20Analyzing%20the%20Behavior%20of%20an%20Imitation-Based%20Agent.pdf',
      type: 'paper'
    },
    {
      title: 'NLP Model Robustness',
      description: 'Investigation of ELECTRA-small transformer model robustness in NLI tasks, developing ensemble-based training methods to mitigate dataset artifacts.',
      tags: ['ELECTRA', 'NLP', 'Ensemble Learning', 'Transformers'],
      icon: 'fas fa-language',
      link: 'https://github.com/orbek/portfolio/blob/main/papers/Mitigating%20Dataset%20Artifacts%20Through%20Fine%20Tuning%20and%20Ensemble-Based%20Training.pdf',
      type: 'paper'
    },
    {
      title: 'Cybersecurity Ethics',
      description: 'Comparative analysis of EU GDPR and Brazil LGPD data privacy laws, examining cybersecurity professional responsibilities and compliance requirements.',
      tags: ['GDPR', 'LGPD', 'Legal Framework', 'Cybersecurity'],
      icon: 'fas fa-shield-alt',
      link: 'https://github.com/orbek/portfolio/blob/main/papers/Ethics%20in%20Cybersecurity%20-%20Legal%20Framework%20Analysis.pdf',
      type: 'paper'
    },
    {
      title: 'Disney Internship Project',
      description: 'Streamlit application with Logistic Regression to predict customer purchase behavior, helping marketing teams optimize campaigns and increase revenue.',
      tags: ['Streamlit', 'Machine Learning', 'Python', 'Logistic Regression'],
      icon: 'fas fa-magic',
      link: 'https://github.com/orbek/DisneyIntership',
      type: 'github'
    }
  ];

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

  const getButtonContent = (project) => {
    switch (project.type) {
      case 'github':
        return {
          icon: 'fab fa-github',
          text: 'View Code',
          className: 'btn-primary'
        };
      case 'paper':
        return {
          icon: 'fas fa-file-pdf',
          text: 'Read Paper',
          className: 'btn-primary'
        };
      case 'private':
        return {
          icon: 'fas fa-lock',
          text: 'Private Repository',
          className: 'btn-outline disabled'
        };
      default:
        return {
          icon: 'fas fa-external-link-alt',
          text: 'View Project',
          className: 'btn-primary'
        };
    }
  };

  return (
    <section id="projects" className="section section-light">
      <div className="container">
        <motion.div 
          className="section-header"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Projects
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            A showcase of my work across data science, machine learning, and business intelligence
          </motion.p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => {
            const buttonConfig = getButtonContent(project);
            
            return (
              <motion.div
                key={index}
                className="project-card"
                variants={itemVariants}
              >
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      <i className={project.icon}></i>
                      {project.title}
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="project-tags">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="card-text">{project.description}</p>
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`btn ${buttonConfig.className}`}
                      >
                        <i className={buttonConfig.icon}></i>
                        {buttonConfig.text}
                      </a>
                    ) : (
                      <span className={`btn ${buttonConfig.className}`}>
                        <i className={buttonConfig.icon}></i>
                        {buttonConfig.text}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center mt-8"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <a 
            href="https://github.com/orbek/portfolio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline btn-lg"
          >
            <i className="fab fa-github"></i>
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .project-card {
          height: 100%;
        }

        .card-title i {
          margin-right: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .btn.disabled {
          opacity: 0.6;
          cursor: not-allowed;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
