import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { resumeData } from '../../data/resume';
import FloatingIcons from '../FloatingIcons/FloatingIcons';
import styles from './Hero.module.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero} ref={heroRef}>
      <FloatingIcons />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img 
              src="/Passport size.jpg" 
              alt={resumeData.personal.name}
              className={styles.profileImage}
            />
            <div className={styles.imageGlow}></div>
          </div>

          <div className={styles.textContent}>
            <h1 className={styles.name}>
              <span className={styles.greeting}>Hello, I'm</span>
              <span className={styles.nameText}>{resumeData.personal.name}</span>
            </h1>
            
            <h2 className={styles.title}>{resumeData.personal.title}</h2>
            
            <p className={styles.summary}>
              {resumeData.personal.summary}
            </p>

            <div className={styles.actions}>
              <button 
                onClick={scrollToContact}
                className={styles.primaryButton}
              >
                <Mail size={20} />
                Get In Touch
              </button>
              
              <a 
                href={resumeData.social.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                <ExternalLink size={20} />
                View Portfolio
              </a>
            </div>

            <div className={styles.socialLinks}>
              <a 
                href={resumeData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href={resumeData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span className={styles.scrollText}>Scroll to explore</span>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;