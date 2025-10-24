const mongoose = require('mongoose');
const Project = require('./models/Project');

// Sample projects data
const sampleProjects = [
  {
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

async function setupDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('Cleared existing projects');

    // Insert sample projects
    await Project.insertMany(sampleProjects);
    console.log('Inserted sample projects');

    console.log('Database setup completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  }
}

// Run setup if this file is executed directly
if (require.main === module) {
  require('dotenv').config();
  setupDatabase();
}

module.exports = setupDatabase;
