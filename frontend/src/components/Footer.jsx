import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Send, Heart, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/RadicalUser',
      color: '#ffffff'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:dinaspratap5629@gmail.com',
      color: '#00ff88'
    },
    {
      icon: Send,
      label: 'Telegram',
      url: 'https://t.me/DinasPratap',
      color: '#0088cc'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="footer-brand">
              <h3 className="gradient-text">Dinas Pratap Singh</h3>
              <p>Blockchain Developer & Financial Market Trader</p>
              <p className="footer-description">
                Building the future of decentralized finance, one smart contract at a time. 
                Combining cutting-edge blockchain technology with proven trading strategies.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h4>Expertise</h4>
                <ul>
                  <li>Smart Contract Development</li>
                  <li>DeFi Protocols</li>
                  <li>DAO Governance</li>
                  <li>Trading Systems</li>
                  <li>Blockchain Security</li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Technologies</h4>
                <ul>
                  <li>Solidity & Motoko</li>
                  <li>Web3.js & Ethers.js</li>
                  <li>React & JavaScript</li>
                  <li>Python & C++</li>
                  <li>TradingView & Analytics</li>
                </ul>
              </div>
            </div>

            <div className="footer-social">
              <h4>Connect With Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <social.icon size={24} />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
              
              <div className="availability-badge">
                <div className="status-dot"></div>
                <span>Available for new opportunities</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>
                  © {new Date().getFullYear()} Dinas Pratap Singh. 
                  Made with <Heart className="heart-icon" size={16} /> 
                  using React & Framer Motion
                </p>
              </div>
              
              <div className="footer-note">
                <p>
                  Open to collaborations • Building the Web3 future • 
                  <span className="accent-text"> Let's create something amazing together</span>
                </p>
              </div>
            </div>

            <motion.button
              className="scroll-to-top"
              onClick={scrollToTop}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </motion.div>
        </div>

        <div className="footer-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
