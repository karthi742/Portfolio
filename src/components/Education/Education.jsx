import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award, Calendar, MapPin,Download } from 'lucide-react';
import { resumeData } from '../../data/resume';
import styles from './Education.module.css';

const Education = () => {
  const educationRef = useRef(null);

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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className={styles.education} ref={educationRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Education</h2>
          <p className={styles.subtitle}>
            Academic background and professional certifications
          </p>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.educationSection}>
           
            
            {resumeData.education.map((edu, index) => (
              <div 
                key={edu.id} 
                className={styles.educationCard}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.eduHeader}>
                  <div className={styles.eduInfo}>
                    <h4 className={styles.degree}>{edu.degree}</h4>
                    <h5 className={styles.institution}>{edu.institution}</h5>
                  </div>
                  
                  <div className={styles.eduMeta}>
                    <div className={styles.metaItem}>
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    {edu.gpa && (
                      <div className={styles.gpaItem}>
                        <span className={styles.gpaLabel}>GPA:</span>
                        <span className={styles.gpaValue}>{edu.gpa}</span>
                      </div>
                    )}
                  </div>
                </div>

                {edu.achievements && (
                  <div className={styles.achievements}>
                    <h6 className={styles.achievementsTitle}>Achievements</h6>
                    <ul className={styles.achievementsList}>
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex} 
                          className={styles.achievement}
                          style={{ animationDelay: `${(index * 0.2) + (achievementIndex * 0.1)}s` }}
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Education;