import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaRocket, FaUsers, FaGraduationCap, FaAward, FaLightbulb, FaHeart } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);
  const [activeTab, setActiveTab] = useState('journey');
  const { ref: chartRef, inView: chartInView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Learning journey data
  const learningData = [
    { year: '2021', ai: 20, web: 30, general: 50 },
    { year: '2022', ai: 40, web: 45, general: 15 },
    { year: '2023', ai: 60, web: 35, general: 5 },
    { year: '2024', ai: 70, web: 25, general: 5 },
    { year: '2025', ai: 75, web: 20, general: 5 }
  ];

  // Skill progression data
  const skillProgression = [
    { month: 'Jan 2021', python: 10, javascript: 20, ml: 5 },
    { month: 'Jun 2021', python: 30, javascript: 40, ml: 15 },
    { month: 'Jan 2022', python: 50, javascript: 60, ml: 30 },
    { month: 'Jun 2022', python: 65, javascript: 70, ml: 45 },
    { month: 'Jan 2023', python: 75, javascript: 75, ml: 60 },
    { month: 'Jun 2023', python: 80, javascript: 80, ml: 70 },
    { month: 'Jan 2024', python: 85, javascript: 85, ml: 75 },
    { month: 'Jun 2024', python: 90, javascript: 85, ml: 80 },
    { month: 'Dec 2024', python: 90, javascript: 85, ml: 85 }
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

  const stats = [
    { icon: FaCode, number: 25, suffix: '+', label: 'Projects Completed' },
    { icon: FaBrain, number: 3, suffix: '+', label: 'Years Learning AI/ML' },
    { icon: FaRocket, number: 100, suffix: '%', label: 'Passion for Innovation' },
    { icon: FaUsers, number: 10, suffix: '+', label: 'Technologies Mastered' }
  ];

  const milestones = [
    { year: '2021', title: 'Started CS Journey', description: 'Began Computer Science studies at Matrusri Engineering College', icon: FaGraduationCap },
    { year: '2022', title: 'AI/ML Exploration', description: 'Discovered passion for Artificial Intelligence and Machine Learning', icon: FaBrain },
    { year: '2023', title: 'Project Development', description: 'Started building real-world applications and projects', icon: FaCode },
    { year: '2024', title: 'Advanced Learning', description: 'Deepened expertise in deep learning and model optimization', icon: FaAward },
    { year: '2025', title: 'Future Goals', description: 'Pursuing advanced AI research and industry applications', icon: FaLightbulb }
  ];

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate AI Engineer with a focus on practical applications
            </p>
            
            <div className="about-description">
              <p>
                I am an AI Engineer with strong expertise in Artificial Intelligence and Machine Learning, 
                specializing in developing and deploying scalable, data-driven solutions. My experience 
                includes model design, training, optimization, and real-world implementation, with a focus 
                on efficiency and innovation.
              </p>
              <p>
                Passionate about staying at the forefront of AI/ML advancements, I strive to build 
                intelligent systems that bridge research and practical applications. Currently in my 
                4th year of Computer Science and Engineering at Matrusri Engineering College.
              </p>
            </div>

            <motion.div className="about-stats" variants={itemVariants}>
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-icon">
                    <stat.icon />
                  </div>
                  <div className="stat-number">
                    <CountUp 
                      end={stat.number} 
                      duration={2}
                      suffix={stat.suffix}
                      start={0}
                    />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tab Navigation */}
            <motion.div className="about-tabs" variants={itemVariants}>
              <button 
                className={`tab-button ${activeTab === 'journey' ? 'active' : ''}`}
                onClick={() => setActiveTab('journey')}
              >
                <FaHeart /> My Journey
              </button>
              <button 
                className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                <FaCode /> Skill Growth
              </button>
              <button 
                className={`tab-button ${activeTab === 'timeline' ? 'active' : ''}`}
                onClick={() => setActiveTab('timeline')}
              >
                <FaAward /> Timeline
              </button>
            </motion.div>

            {/* Journey Tab */}
            {activeTab === 'journey' && (
              <motion.div 
                className="about-tab-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key="journey"
              >
                <div className="chart-container" ref={chartRef}>
                  <h3>Learning Focus Over Time</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={learningData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="ai" stackId="1" stroke="#7c3aed" fill="#7c3aed" name="AI/ML" />
                      <Area type="monotone" dataKey="web" stackId="1" stroke="#a855f7" fill="#a855f7" name="Web Dev" />
                      <Area type="monotone" dataKey="general" stackId="1" stroke="#c084fc" fill="#c084fc" name="General" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <motion.div 
                className="about-tab-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key="skills"
              >
                <div className="chart-container">
                  <h3>Skill Progression Timeline</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={skillProgression}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="python" stroke="#7c3aed" strokeWidth={3} name="Python" />
                      <Line type="monotone" dataKey="javascript" stroke="#a855f7" strokeWidth={3} name="JavaScript" />
                      <Line type="monotone" dataKey="ml" stroke="#c084fc" strokeWidth={3} name="Machine Learning" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            )}

            {/* Timeline Tab */}
            {activeTab === 'timeline' && (
              <motion.div 
                className="about-tab-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key="timeline"
              >
                <div className="timeline-container">
                  {milestones.map((milestone, index) => (
                    <motion.div 
                      key={index}
                      className="timeline-item"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="timeline-icon">
                        <milestone.icon />
                      </div>
                      <div className="timeline-content">
                        <div className="timeline-year">{milestone.year}</div>
                        <h4>{milestone.title}</h4>
                        <p>{milestone.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div className="about-highlights" variants={itemVariants}>
            <div className="highlight-card">
              <h3>What I Do</h3>
              <ul>
                <li>Machine Learning Model Development</li>
                <li>Deep Learning Implementation</li>
                <li>Data Analysis & Visualization</li>
                <li>AI Solution Architecture</li>
                <li>Model Optimization & Deployment</li>
                <li>Research & Innovation</li>
              </ul>
            </div>

            <div className="highlight-card">
              <h3>My Approach</h3>
              <ul>
                <li>Problem-First Thinking</li>
                <li>Data-Driven Decisions</li>
                <li>Scalable Solutions</li>
                <li>Continuous Learning</li>
                <li>Collaborative Development</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
