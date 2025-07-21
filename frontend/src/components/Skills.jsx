import React from 'react';
import { motion } from 'framer-motion';
import { Code, TrendingUp, Wrench, Zap } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Blockchain Development',
      icon: Code,
      color: '#00ff88',
      skills: [
        { name: 'Solidity', level: 90, description: 'ERC-20/721/1155 standards' },
        { name: 'Motoko', level: 85, description: 'Internet Computer development' },
        { name: 'Web3.js/Ethers.js', level: 88, description: 'Blockchain integration' },
        { name: 'Hardhat/Truffle', level: 87, description: 'Development frameworks' },
        { name: 'Smart Contracts', level: 92, description: 'Secure contract development' },
        { name: 'DeFi Protocols', level: 89, description: 'Decentralized finance' }
      ]
    },
    {
      title: 'Financial Trading',
      icon: TrendingUp,
      color: '#ffd700',
      skills: [
        { name: 'Forex Trading', level: 93, description: 'Prop-firm certified' },
        { name: 'Crypto Trading', level: 91, description: '4+ years experience' },
        { name: 'Risk Management', level: 88, description: 'Multi-asset frameworks' },
        { name: 'Technical Analysis', level: 90, description: 'Chart patterns & indicators' },
        { name: 'Algorithmic Trading', level: 85, description: 'Automated strategies' },
        { name: 'Portfolio Management', level: 87, description: 'Diversified strategies' }
      ]
    },
    {
      title: 'Technical Stack',
      icon: Wrench,
      color: '#ff6b6b',
      skills: [
        { name: 'JavaScript', level: 90, description: 'ES6+ & modern JS' },
        { name: 'React', level: 88, description: 'Component-based UI' },
        { name: 'Python', level: 85, description: 'Data analysis & automation' },
        { name: 'C++', level: 82, description: 'System programming' },
        { name: 'Git/GitHub', level: 89, description: 'Version control' },
        { name: 'Node.js', level: 86, description: 'Backend development' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Zap,
      color: '#4ecdc4',
      skills: [
        { name: 'TradingView', level: 92, description: 'Advanced charting' },
        { name: 'DFX CLI', level: 85, description: 'Internet Computer' },
        { name: 'MetaMask', level: 90, description: 'Wallet integration' },
        { name: 'Remix IDE', level: 88, description: 'Smart contract development' },
        { name: 'Nmap/Bettercap', level: 83, description: 'Security tools' },
        { name: 'Docker', level: 80, description: 'Containerization' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut" }
    })
  };

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive skill set spanning blockchain development, financial trading, and modern web technologies
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={itemVariants}
            >
              <div className="category-header">
                <div className="category-icon" style={{ color: category.color }}>
                  <category.icon size={28} />
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.5 
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <div className="skill-name-container">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <span className="skill-description">{skill.description}</span>
                    </div>
                    
                    <div className="skill-progress">
                      <motion.div
                        className="skill-progress-fill"
                        style={{ backgroundColor: category.color }}
                        custom={skill.level}
                        variants={progressVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-highlight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="highlight-grid">
            <div className="highlight-card">
              <h4>🔐 Security First</h4>
              <p>Every smart contract and trading system I build prioritizes security through rigorous testing and best practices.</p>
            </div>
            
            <div className="highlight-card">
              <h4>📊 Data-Driven</h4>
              <p>All trading decisions and development choices are backed by comprehensive analysis and real-world testing.</p>
            </div>
            
            <div className="highlight-card">
              <h4>🚀 Innovation Focus</h4>
              <p>Constantly exploring emerging technologies and methodologies to stay ahead in the rapidly evolving Web3 space.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
