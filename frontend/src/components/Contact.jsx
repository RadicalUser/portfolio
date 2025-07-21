import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, MapPin, Phone, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    // Create mailto link
    const subject = formData.subject || 'Portfolio Contact';
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:dinaspratap5629@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    setFormStatus('success');
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormStatus('');
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dinaspratap5629@gmail.com',
      link: 'mailto:dinaspratap5629@gmail.com',
      color: '#00ff88'
    },
    {
      icon: Send,
      label: 'Telegram',
      value: '@DinasPratap',
      link: 'https://t.me/DinasPratap',
      color: '#0088cc'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'RadicalUser',
      link: 'https://github.com/RadicalUser',
      color: '#ffffff'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      link: null,
      color: '#ff6b6b'
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

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to collaborate on exciting blockchain projects or discuss trading strategies? Let's connect!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="contact-intro">
              <h3>Let's Build Something Amazing Together</h3>
              <p>
                I'm always excited to discuss new opportunities in blockchain development, 
                DeFi innovation, or trading system architecture. Whether you're looking for 
                a dedicated developer, trading consultant, or project collaborator, I'd love to hear from you.
              </p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="contact-item"
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="contact-icon" style={{ color: item.color }}>
                    <item.icon size={24} />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="contact-value"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="availability">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Available for new projects</span>
              </div>
              <p>Currently accepting freelance and consulting opportunities</p>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="form-container">
              <div className="form-header">
                <MessageCircle className="form-icon" />
                <h3>Send a Message</h3>
                <p>Drop me a line and I'll get back to you as soon as possible</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or question..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formStatus === 'success'}
                >
                  {formStatus === 'success' ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {formStatus === 'error' && (
                  <motion.div
                    className="form-message error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle size={16} />
                    Please fill in all required fields
                  </motion.div>
                )}

                {formStatus === 'success' && (
                  <motion.div
                    className="form-message success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle size={16} />
                    Your email client should open shortly!
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Ready to Start Something Great?</h3>
          <p>Whether it's a groundbreaking DApp, a trading system, or just a conversation about the future of Web3</p>
          <div className="cta-buttons">
            <a href="mailto:dinaspratap5629@gmail.com" className="btn btn-primary">
              <Mail size={20} />
              Email Me Directly
            </a>
            <a href="https://t.me/DinasPratap" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Send size={20} />
              Message on Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
