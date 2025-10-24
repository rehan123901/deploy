# 🚀 Quick Start Guide

Get your portfolio website up and running in minutes!

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)

## 1. Install Dependencies

```bash
# Install all dependencies (server + client)
npm run install-all
```

## 2. Environment Setup

```bash
# Copy environment template
cp env.example .env
```

Edit `.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
```

## 3. Setup Database (Optional)

```bash
# Populate database with sample projects
npm run setup
```

## 4. Start Development Server

```bash
# Start both frontend and backend
npm run dev
```

## 5. Access Your Website

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🎉 You're Ready!

Your portfolio website is now running! Customize the content in the React components to match your information.

## 📝 Quick Customization

1. **Personal Info**: Edit `client/src/components/Hero.js`
2. **Projects**: Edit `client/src/components/Projects.js`
3. **Skills**: Edit `client/src/components/Skills.js`
4. **Contact**: Edit `client/src/components/Contact.js`

## 🔧 Troubleshooting

- **Port conflicts**: Change PORT in `.env` file
- **Database issues**: Ensure MongoDB is running
- **Dependencies**: Run `npm run install-all` again

## 📚 Full Documentation

See `README.md` for complete documentation and deployment guides.
