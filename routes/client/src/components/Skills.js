import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaAws, 
  FaDatabase,
  FaBrain,
  FaCogs,
  FaCloud,
  FaGitAlt,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaChartLine,
  FaChartPie,
  FaChartBar
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiMongodb, 
  SiMysql, 
  SiKubernetes,
  SiExpress,
  SiGithub
} from 'react-icons/si';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);
  const [activeTab, setActiveTab] = useState('overview');
  const { ref: chartRef, inView: chartInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: FaPython, level: 90 },
        { name: 'JavaScript', icon: FaJs, level: 85 },
        { name: 'HTML5', icon: FaHtml5, level: 90 },
        { name: 'CSS3', icon: FaCss3Alt, level: 85 }
      ]
    },
    {
      title: 'AI/ML & Frameworks',
      skills: [
        { name: 'PyTorch', icon: SiPytorch, level: 80 },
        { name: 'TensorFlow', icon: SiTensorflow, level: 75 },
        { name: 'Machine Learning', icon: FaBrain, level: 85 },
        { name: 'Deep Learning', icon: FaCogs, level: 80 }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React.js', icon: FaReact, level: 85 },
        { name: 'Node.js', icon: FaNodeJs, level: 80 },
        { name: 'Express.js', icon: SiExpress, level: 75 },
        { name: 'REST APIs', icon: FaCogs, level: 80 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', icon: FaDocker, level: 75 },
        { name: 'Kubernetes', icon: SiKubernetes, level: 70 },
        { name: 'AWS', icon: FaAws, level: 70 },
        { name: 'Cloud Computing', icon: FaCloud, level: 75 }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 80 },
        { name: 'MySQL', icon: SiMysql, level: 75 },
        { name: 'Database Design', icon: FaDatabase, level: 80 }
      ]
    },
    {
      title: 'Tools & Version Control',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 85 },
        { name: 'GitHub', icon: SiGithub, level: 90 },
        { name: 'MLOps', icon: FaCogs, level: 75 }
      ]
    }
  ];

  // Data for visualizations
  const skillLevelData = skillCategories.flatMap(category => 
    category.skills.map(skill => ({
      name: skill.name,
      level: skill.level,
      category: category.title
    }))
  );

  const categoryStats = skillCategories.map(category => ({
    name: category.title,
    avgLevel: Math.round(category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length),
    skillCount: category.skills.length
  }));

  const radarData = [
    {
      subject: 'Programming',
      A: 88,
      fullMark: 100
    },
    {
      subject: 'AI/ML',
      B: 80,
      fullMark: 100
    },
    {
      subject: 'Web Dev',
      C: 80,
      fullMark: 100
    },
    {
      subject: 'DevOps',
      D: 73,
      fullMark: 100
    },
    {
      subject: 'Databases',
      E: 78,
      fullMark: 100
    },
    {
      subject: 'Tools',
      F: 83,
      fullMark: 100
    }
  ];

  const COLORS = ['#7c3aed', '#a855f7', '#c084fc', '#e879f9', '#f0abfc', '#fae8ff'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">
              Technical skills and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div className="skills-tabs" variants={itemVariants}>
            <button 
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <FaChartPie /> Overview
            </button>
            <button 
              className={`tab-button ${activeTab === 'detailed' ? 'active' : ''}`}
              onClick={() => setActiveTab('detailed')}
            >
              <FaChartBar /> Detailed
            </button>
            <button 
              className={`tab-button ${activeTab === 'radar' ? 'active' : ''}`}
              onClick={() => setActiveTab('radar')}
            >
              <FaChartLine /> Radar
            </button>
          </motion.div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div 
              className="skills-overview"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key="overview"
            >
              <div className="stats-grid">
                {categoryStats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="stat-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3>{stat.name}</h3>
                    <div className="stat-value">
                      <CountUp 
                        end={stat.avgLevel} 
                        duration={2}
                        suffix="%"
                        start={0}
                      />
                    </div>
                    <p>{stat.skillCount} skills</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="chart-container" ref={chartRef}>
                <h3>Skill Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryStats}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="avgLevel"
                      label={({ name, avgLevel }) => `${name}: ${avgLevel}%`}
                    >
                      {categoryStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          )}

          {/* Detailed Tab */}
          {activeTab === 'detailed' && (
            <motion.div 
              className="skills-detailed"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key="detailed"
            >
              <motion.div 
                className="skills-grid"
                variants={containerVariants}
              >
                {skillCategories.map((category, categoryIndex) => (
                  <motion.div 
                    key={categoryIndex}
                    className="skill-category"
                    variants={itemVariants}
                  >
                    <h3 className="category-title">{category.title}</h3>
                    <div className="skills-list">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className="skill-item"
                          variants={skillVariants}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="skill-header">
                            <div className="skill-icon">
                              <skill.icon />
                            </div>
                            <span className="skill-name">{skill.name}</span>
                          </div>
                          <div className="skill-bar">
                            <motion.div
                              className="skill-progress"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                          <span className="skill-percentage">
                            <CountUp 
                              end={skill.level} 
                              duration={2}
                              suffix="%"
                              start={0}
                            />
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Radar Tab */}
          {activeTab === 'radar' && (
            <motion.div 
              className="skills-radar"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key="radar"
            >
              <div className="radar-container">
                <h3>Skills Radar Chart</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Skills"
                      dataKey="A"
                      stroke="#7c3aed"
                      fill="#7c3aed"
                      fillOpacity={0.3}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
