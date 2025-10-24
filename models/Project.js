const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  features: [{
    type: String,
    required: true
  }],
  technologies: [{
    type: String,
    required: true
  }],
  githubUrl: {
    type: String,
    required: false
  },
  liveUrl: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  category: {
    type: String,
    enum: ['web', 'mobile', 'ai', 'fullstack'],
    default: 'web'
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', projectSchema);
