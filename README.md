<<<<<<< HEAD
# deploy
=======
# Syed Rehan Ahmed - Portfolio Website

A modern, responsive portfolio website showcasing skills, projects, and achievements. Built with React.js frontend, Node.js backend, and MongoDB database.

## 🌟 Features

- **Modern Design**: Clean, professional design with purple accent theme
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Components**: Smooth animations and transitions
- **Contact Form**: Functional contact form with email notifications
- **Project Showcase**: Dynamic project display with filtering
- **Skills Visualization**: Animated skill bars and categories
- **Education Timeline**: Interactive education timeline
- **Achievements Section**: Highlighted accomplishments and recognitions

## 🚀 Tech Stack

### Frontend
- **React.js** - UI framework
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **CSS3** - Styling with modern features
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Nodemailer** - Email service
- **Express Rate Limit** - Rate limiting

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install server dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Environment Setup**
   ```bash
   cp env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/portfolio
   
   # Email Configuration (Optional)
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   ```

## 🚀 Running the Application

### Development Mode

1. **Start the development server**
   ```bash
   npm run dev
   ```
   
   This will start both the backend server (port 5000) and frontend development server (port 3000).

2. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Production Mode

1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   NODE_ENV=production npm start
   ```

## 📁 Project Structure

```
portfolio-website/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js         # Main app component
│   │   ├── App.css        # Global styles
│   │   └── index.js       # Entry point
│   └── package.json
├── models/                # Database models
├── routes/                # API routes
├── server.js              # Express server
├── package.json           # Server dependencies
└── README.md
```

## 🎨 Customization

### Colors and Theme
The website uses a purple accent theme. To customize colors, update the CSS variables in:
- `client/src/App.css`
- Individual component CSS files

### Content
Update the following files to customize content:
- **Personal Info**: `client/src/components/Hero.js`
- **Projects**: `client/src/components/Projects.js` or use the admin API
- **Skills**: `client/src/components/Skills.js`
- **Education**: `client/src/components/Education.js`
- **Achievements**: `client/src/components/Achievements.js`

### Contact Information
Update contact details in:
- `client/src/components/Hero.js`
- `client/src/components/Contact.js`
- `client/src/components/Footer.js`

## 🔧 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `POST /api/projects` - Create new project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages (admin)
- `PUT /api/contact/:id/status` - Update contact status (admin)

## 📧 Email Configuration

To enable email notifications for the contact form:

1. **Gmail Setup**
   - Enable 2-factor authentication
   - Generate an App Password
   - Use the App Password in `EMAIL_PASS`

2. **Other Email Services**
   - Update the transporter configuration in `routes/contact.js`
   - Modify the nodemailer configuration as needed

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `client/build` folder
3. Set environment variables in your hosting platform

### Backend (Heroku/Railway)
1. Push your code to the platform
2. Set environment variables
3. Ensure MongoDB connection is configured

### Database (MongoDB Atlas)
1. Create a MongoDB Atlas account
2. Create a cluster
3. Get the connection string
4. Update `MONGODB_URI` in environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Syed Rehan Ahmed**
- Email: srehanahmed59@gmail.com
- GitHub: [@rehan123901](https://github.com/rehan123901)
- LeetCode: [Profile](https://leetcode.com/problemset/)

## 🙏 Acknowledgments

- React.js community for excellent documentation
- Framer Motion for smooth animations
- React Icons for comprehensive icon library
- All open-source contributors

---

**Built with ❤️ using React.js, Node.js, and MongoDB**
>>>>>>> 4d30254 (1st commit)
