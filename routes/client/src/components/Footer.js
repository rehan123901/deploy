import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/rehan123901',
      label: 'GitHub'
    },
    {
      icon: SiLeetcode,
      href: 'https://leetcode.com/problemset/',
      label: 'LeetCode'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:srehanahmed59@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="footer-title">Syed Rehan Ahmed</h3>
            <p className="footer-description">
              AI Engineer & Machine Learning Developer passionate about creating 
              intelligent solutions that bridge research and practical applications.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="footer-section footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="footer-heading">Contact Info</h4>
            <div className="contact-info">
              <p className="contact-item">
                <strong>Email:</strong>{' '}
                <a href="mailto:srehanahmed59@gmail.com" className="contact-link">
                  srehanahmed59@gmail.com
                </a>
              </p>
              <p className="contact-item">
                <strong>Location:</strong> Hyderabad, India
              </p>
              <p className="contact-item">
                <strong>Education:</strong> Computer Science & Engineering
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              © {currentYear} Syed Rehan Ahmed. Made with{' '}
              <FaHeart className="heart-icon" /> using React.js
            </p>
            <p className="footer-subtitle">
              Building the future, one algorithm at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
