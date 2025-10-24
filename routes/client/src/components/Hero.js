import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaDownload, FaRocket } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { ReactTyped } from 'react-typed';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: 3, label: 'Years Learning', suffix: '+' },
    { number: 25, label: 'Projects Built', suffix: '+' },
    { number: 15, label: 'Technologies', suffix: '+' },
    { number: 5, label: 'Certifications', suffix: '+' }
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
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Syed Rehan Ahmed</span>
            </motion.h1>
            
            <motion.h2 
              className="hero-subtitle"
              variants={itemVariants}
            >
              <ReactTyped
                strings={[
                  'AI Engineer & Machine Learning Developer',
                  'Full Stack Developer',
                  'Data Science Enthusiast',
                  'Problem Solver & Innovator'
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                showCursor
                cursorChar="|"
                className="typed-text"
              />
            </motion.h2>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              I specialize in developing and deploying scalable, data-driven AI solutions. 
              Passionate about building intelligent systems that bridge research and 
              practical applications.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <FaCode /> View My Work
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <FaRocket /> Get In Touch
              </motion.a>

              <motion.a 
                href="/resume.pdf" 
                className="btn btn-tertiary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download="Syed_Rehan_Ahmed_Resume.pdf"
              >
                <FaDownload /> Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            variants={itemVariants}
          >
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <FaCode className="avatar-icon" />
              </div>
              <div className="avatar-glow"></div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-social"
          variants={itemVariants}
        >
          <a 
            href="https://github.com/rehan123901" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://leetcode.com/problemset/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </a>
          <a 
            href="mailto:srehanahmed59@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="hero-stats"
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number">
                  {statsInView && (
                    <CountUp 
                      end={stat.number} 
                      duration={2}
                      suffix={stat.suffix}
                      start={0}
                    />
                  )}
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
