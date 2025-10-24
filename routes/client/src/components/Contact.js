import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaPhone,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('/api/contact', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'srehanahmed59@gmail.com',
      link: 'mailto:srehanahmed59@gmail.com'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/rehan123901',
      link: 'https://github.com/rehan123901'
    },
    {
      icon: SiLeetcode,
      label: 'LeetCode',
      value: 'leetcode.com/problemset/',
      link: 'https://leetcode.com/problemset/'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Hyderabad, India',
      link: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to collaborate? Let's discuss how we can work together to create something amazing.
            </p>
          </motion.div>

          <div className="contact-content">
            <motion.div 
              className="contact-info"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h3>Let's Connect</h3>
                <p>
                  I'm always interested in new opportunities, collaborations, and interesting projects. 
                  Whether you have a question, want to work together, or just want to say hi, feel free to reach out!
                </p>
              </motion.div>

              <motion.div 
                className="contact-methods"
                variants={containerVariants}
              >
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    className="contact-method"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="contact-icon">
                      <contact.icon />
                    </div>
                    <div className="contact-details">
                      <h4>{contact.label}</h4>
                      {contact.link ? (
                        <a 
                          href={contact.link} 
                          target={contact.link.startsWith('http') ? '_blank' : '_self'}
                          rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="contact-link"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="contact-text">{contact.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="contact-form-container"
              variants={itemVariants}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send a Message</h3>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    required
                    rows="5"
                    className="form-textarea"
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus && (
                  <div className={`submit-status ${submitStatus}`}>
                    {submitStatus === 'success' ? (
                      <>
                        <FaCheckCircle />
                        <span>Message sent successfully! I'll get back to you soon.</span>
                      </>
                    ) : (
                      <>
                        <FaExclamationCircle />
                        <span>Failed to send message. Please try again.</span>
                      </>
                    )}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
