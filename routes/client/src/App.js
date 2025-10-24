import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// Lazy load heavy components
const LazyAchievements = lazy(() => import('./components/Achievements'));
const LazyContact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <LazyAchievements />
            <LazyContact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
