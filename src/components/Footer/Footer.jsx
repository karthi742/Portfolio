import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../../data/resume';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
  <footer className={styles.footer} style={{ padding: "0px 0 20px" }}>
      <div className={styles.container}>
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p className={styles.copyrightText}>
              © {currentYear} {resumeData.personal.name}. All rights reserved.
            </p>
            <p className={styles.madeWith}>
              Made with <Heart size={16} className={styles.heart} /> using React & CSS Modules
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            className={styles.backToTop}
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;