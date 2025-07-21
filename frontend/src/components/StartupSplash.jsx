import React from 'react';
import { motion } from 'framer-motion';
import './StartupSplash.css';

const StartupSplash = () => {
  return (
    <motion.div
      className="startup-splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="splash-content">
        <motion.div
          className="splash-text-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {"WELCOME TO MY PORTFOLIO".split("").map((char, index) => (
            <motion.span
              key={index}
              className="splash-char"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                color: ["#ffffff", "#00ff88", "#00ff88"]
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: "easeOut"
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="splash-tagline"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          built on outcomes, not assumptions
        </motion.div>

        <motion.div
          className="splash-loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <div className="loading-dots">
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            />
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            />
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StartupSplash;
