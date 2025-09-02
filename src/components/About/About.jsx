import React, { useEffect, useRef } from 'react';
import { MapPin, Mail, Phone, Download } from 'lucide-react';
import { resumeData } from '../../data/resume';
import styles from './About.module.css';

const About = () => {
  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.about} ref={aboutRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.description}>
             I'm a passionate Full Stack Developer with 3.5+ years of experience building scalable web applications, REST APIs, and CMS platforms. My expertise spans PHP (Laravel), Node.js (Express/NestJS), React, and cloud deployment with AWS and Azure. I enjoy working across the stack, from backend architecture to frontend integration, ensuring performance, security, and maintainability.
            </p>
            
            <p className={styles.description}>
              Throughout my career, I've delivered impactful solutions such as financial platforms, smart trolley systems, and AI-powered attendance management applications. I thrive on solving real-world problems with clean code and user-focused design, while continuously expanding my skills to stay ahead with modern web technologies.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.number}>3.5+</span>
                <span className={styles.label}>Years Experience</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.number}>10+</span>
                <span className={styles.label}>Projects Completed</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.number}>5+</span>
                <span className={styles.label}>Clients Served</span>
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>Get In Touch</h3>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <span>{resumeData.personal.email}</span>
              </div>
              
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <span>{resumeData.personal.phone}</span>
              </div>
              
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <span>{resumeData.personal.location}</span>
              </div>
            </div>

           <button
              className={styles.downloadButton}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/karthiB-Resume.pdf"; // path to your file in public folder
                link.download = "karthi B - Resume.pdf";
                link.click();
              }}
            >
              <Download size={20} />
              Download Resume
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;