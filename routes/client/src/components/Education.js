import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCalendarAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationRef = useRef(null);

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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      id: 1,
      degree: 'Computer Science and Engineering',
      institution: 'Matrusri Engineering College',
      period: '2021 - 2025',
      status: '4th Year',
      description: 'Pursuing Bachelor of Technology in Computer Science and Engineering with focus on Artificial Intelligence, Machine Learning, and Software Development.',
      highlights: [
        'Specialization in AI/ML',
        'Software Engineering',
        'Data Structures & Algorithms',
        'Database Management',
        'Computer Networks',
        'Web Development'
      ],
      icon: FaGraduationCap,
      type: 'current'
    },
    {
      id: 2,
      degree: 'XII (Intermediate)',
      institution: 'SR Edu Center',
      period: '2019 - 2021',
      status: '95%',
      description: 'Completed Intermediate education with excellent academic performance, laying strong foundation for technical studies.',
      highlights: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'Computer Science'
      ],
      icon: FaAward,
      type: 'completed'
    },
    {
      id: 3,
      degree: 'X (High School)',
      institution: 'Tejaswi High School',
      period: '2017 - 2019',
      status: '10 CGPA',
      description: 'Completed high school education with perfect academic record, demonstrating strong academic foundation.',
      highlights: [
        'Mathematics',
        'Science',
        'Social Studies',
        'English'
      ],
      icon: FaAward,
      type: 'completed'
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1,
      transition: { duration: 0.8, delay: 0.3 }
    }
  };

  return (
    <section id="education" className="education" ref={educationRef}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">
              My academic journey and educational background
            </p>
          </motion.div>

          <div className="education-timeline">
            <motion.div 
              className="timeline-line"
              variants={timelineVariants}
            />
            
            <div className="timeline-items">
              {educationData.map((education, index) => (
                <motion.div
                  key={education.id}
                  className={`education-item ${education.type} ${index % 2 === 0 ? 'left' : 'right'}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="education-card">
                    <div className="education-header">
                      <div className="education-icon">
                        <education.icon />
                      </div>
                      <div className="education-status">
                        {education.status}
                      </div>
                    </div>
                    
                    <div className="education-content">
                      <h3 className="education-degree">{education.degree}</h3>
                      <h4 className="education-institution">{education.institution}</h4>
                      
                      <div className="education-period">
                        <FaCalendarAlt className="period-icon" />
                        <span>{education.period}</span>
                      </div>
                      
                      <p className="education-description">{education.description}</p>
                      
                      <div className="education-highlights">
                        <h5>Key Areas:</h5>
                        <div className="highlights-list">
                          {education.highlights.map((highlight, idx) => (
                            <span key={idx} className="highlight-tag">{highlight}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="timeline-dot">
                    <div className="dot-inner"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
