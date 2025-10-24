import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaShieldAlt, FaFilter, FaSearch } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import axios from 'axios';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAnalytics, setShowAnalytics] = useState(false);
  const projectsRef = useRef(null);

  // Default projects data
  const defaultProjects = [
    {
      _id: '1',
      title: 'Train Booking Website',
      description: 'A comprehensive train ticket booking platform with real-time availability, secure payments, and user management.',
      features: [
        'Online train ticket reservation system',
        'Real-time ticket availability and pricing',
        'Secure payment processing',
        'User authentication and profile management',
        'Ticket cancellation and refund system',
        'Travel insurance options'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Payment Gateway'],
      category: 'web',
      featured: true,
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      _id: '2',
      title: 'Food Delivery Website',
      description: 'A modern food delivery platform connecting users with local restaurants for seamless meal ordering experience.',
      features: [
        'Restaurant browsing and menu display',
        'Online food ordering system',
        'Real-time order tracking',
        'Payment integration',
        'Delivery coordination',
        'User reviews and ratings'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Real-time APIs'],
      category: 'web',
      featured: true,
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      _id: '3',
      title: 'Graphical Password Authentication',
      description: 'An innovative authentication system using visual memory patterns for enhanced security and user experience.',
      features: [
        'Visual password selection system',
        'Image-based authentication',
        'Enhanced security through visual memory',
        'User-friendly interface',
        'Pattern recognition algorithms',
        'Secure session management'
      ],
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Computer Vision', 'Security'],
      category: 'ai',
      featured: true,
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        setProjects(response.data.length > 0 ? response.data : defaultProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects(defaultProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter and search functionality
  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // Analytics data
  const categoryData = projects.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
  }, {});

  const technologyData = projects.flatMap(project => project.technologies)
    .reduce((acc, tech) => {
      acc[tech] = (acc[tech] || 0) + 1;
      return acc;
    }, {});

  const chartData = Object.entries(categoryData).map(([category, count]) => ({
    category: category.charAt(0).toUpperCase() + category.slice(1),
    count
  }));

  const techChartData = Object.entries(technologyData)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 8)
    .map(([tech, count]) => ({
      technology: tech,
      count
    }));

  const COLORS = ['#7c3aed', '#a855f7', '#c084fc', '#e879f9'];

  const getProjectIcon = (category) => {
    switch (category) {
      case 'ai':
        return <FaShieldAlt />;
      case 'web':
        return <FaCode />;
      case 'mobile':
        return <FaCode />;
      default:
        return <FaDatabase />;
    }
  };

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

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <div className="loading">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Showcasing my recent work in AI/ML, web development, and innovative solutions
            </p>
          </motion.div>

          {/* Search and Filter Controls */}
          <motion.div className="projects-controls" variants={itemVariants}>
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                <FaFilter /> All
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
                onClick={() => setActiveFilter('web')}
              >
                Web
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'ai' ? 'active' : ''}`}
                onClick={() => setActiveFilter('ai')}
              >
                AI/ML
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`}
                onClick={() => setActiveFilter('mobile')}
              >
                Mobile
              </button>
            </div>

            <button 
              className="analytics-toggle"
              onClick={() => setShowAnalytics(!showAnalytics)}
            >
              {showAnalytics ? 'Hide' : 'Show'} Analytics
            </button>
          </motion.div>

          {/* Analytics Section */}
          {showAnalytics && (
            <motion.div 
              className="projects-analytics"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="analytics-grid">
                <div className="analytics-card">
                  <h3>Projects by Category</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="count"
                        label={({ category, count }) => `${category}: ${count}`}
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="analytics-card">
                  <h3>Most Used Technologies</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={techChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="technology" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#7c3aed" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          )}

          {filteredProjects.length > 0 ? (
            <motion.div 
              className="projects-grid"
              variants={containerVariants}
            >
              {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-header">
                  <div className="project-icon">
                    {getProjectIcon(project.category)}
                  </div>
                  <div className="project-category">{project.category}</div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-technologies">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View source code"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View live demo"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="no-results"
              variants={itemVariants}
            >
              <h3>No projects found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
