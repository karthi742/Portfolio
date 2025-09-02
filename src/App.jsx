import React, { Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

// Lazy load components for better performance
const About = lazy(() => import('./components/About/About'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Education = lazy(() => import('./components/Education/Education'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <Header />
        
        <main>
          <Hero />
          
          <Suspense fallback={<LoadingSpinner />}>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
            <Footer />
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;