import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDarkMode ? 180 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {isDarkMode ? (
          <i className="fas fa-sun"></i>
        ) : (
          <i className="fas fa-moon"></i>
        )}
      </motion.div>

      <style jsx>{`
        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.1rem;
          backdrop-filter: blur(10px);
        }

        .theme-toggle:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .theme-toggle i {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .theme-toggle {
            width: 36px;
            height: 36px;
            font-size: 1rem;
          }
        }
      `}</style>
    </motion.button>
  );
};

export default ThemeToggle;
