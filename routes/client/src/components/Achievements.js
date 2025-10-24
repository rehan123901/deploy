import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCode, FaUsers, FaRocket } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const achievementsRef = useRef(null);

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

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      id: 1,
      title: 'National Hackathon Participation',
      description: 'Participated in national-level hackathons, showcasing problem-solving skills and teamwork under tight deadlines.',
      icon: FaTrophy,
      category: 'Competition',
      highlights: [
        'Problem-solving under pressure',
        'Team collaboration',
        'Innovation in tech solutions',
        'Technical presentation skills'
      ],
      color: '#FFD700'
    },
    {
      id: 2,
      title: 'Innovative Tech Solutions',
      description: 'Built innovative tech solutions under tight deadlines, demonstrating ability to deliver quality work efficiently.',
      icon: FaRocket,
      category: 'Innovation',
      highlights: [
        'Rapid prototyping',
        'Creative problem solving',
        'Technical implementation',
        'Project delivery'
      ],
      color: '#7c3aed'
    },
    {
      id: 3,
      title: 'Academic Excellence',
      description: 'Consistent academic performance with 95% in Intermediate and 10 CGPA in High School, showing dedication to learning.',
      icon: FaMedal,
      category: 'Academic',
      highlights: [
        'Consistent performance',
        'Strong foundation',
        'Learning dedication',
        'Academic discipline'
      ],
      color: '#10B981'
    },
    {
      id: 4,
      title: 'Project Development',
      description: 'Successfully developed multiple full-stack projects including Train Booking System, Food Delivery Platform, and Graphical Authentication.',
      icon: FaCode,
      category: 'Development',
      highlights: [
        'Full-stack development',
        'Database design',
        'User interface design',
        'System architecture'
      ],
      color: '#F59E0B'
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
    <section id="achievements" className="achievements" ref={achievementsRef}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title">Achievements & Recognition</h2>
            <p className="section-subtitle">
              Highlights of my accomplishments and notable achievements
            </p>
          </motion.div>

          <motion.div 
            className="achievements-grid"
            variants={containerVariants}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="achievement-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="achievement-header">
                  <div 
                    className="achievement-icon"
                    style={{ color: achievement.color }}
                  >
                    <achievement.icon />
                  </div>
                  <div className="achievement-category">
                    {achievement.category}
                  </div>
                </div>

                <div className="achievement-content">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                  
                  <div className="achievement-highlights">
                    <h4>Key Highlights:</h4>
                    <ul>
                      {achievement.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div 
                  className="achievement-glow"
                  style={{ 
                    background: `linear-gradient(135deg, ${achievement.color}20 0%, ${achievement.color}10 100%)` 
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="achievements-summary"
            variants={itemVariants}
          >
            <div className="summary-card">
              <h3>Continuous Learning & Growth</h3>
              <p>
                My journey is marked by continuous learning, innovation, and the pursuit of excellence. 
                Each achievement represents a step forward in my mission to create meaningful impact 
                through technology and innovation.
              </p>
              <div className="summary-stats">
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Major Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">National</span>
                  <span className="stat-label">Competitions</span>
                </div>
                <div className="stat">
                  <span className="stat-number">4th</span>
                  <span className="stat-label">Year Student</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
