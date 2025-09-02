import React, { useEffect, useRef } from 'react';
import { MapPin, Calendar, TrendingUp } from 'lucide-react';
import { resumeData } from '../../data/resume';
import styles from './Experience.module.css';

const Experience = () => {
  const experienceRef = useRef(null);

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className={styles.experience} ref={experienceRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Work Experience</h2>
          <p className={styles.subtitle}>
            My professional journey and key achievements
          </p>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.timeline}>
          {resumeData.experience.map((job, index) => (
            <div 
              key={job.id} 
              className={styles.timelineItem}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                <div className={styles.markerLine}></div>
              </div>

              <div className={styles.jobCard}>
                <div className={styles.jobHeader}>
                  <div className={styles.jobInfo}>
                    <h3 className={styles.position}>{job.position}</h3>
                    <h4 className={styles.company}>{job.company}</h4>
                  </div>
                  
                  <div className={styles.jobMeta}>
                    <div className={styles.metaItem}>
                      <Calendar size={16} />
                      <span>{job.duration}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.achievements}>
                  <h5 className={styles.achievementsTitle}>
                    <TrendingUp size={18} />
                    Key Achievements
                  </h5>
                  <ul className={styles.achievementsList}>
                    {job.achievements.map((achievement, achievementIndex) => (
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

                <div className={styles.technologies}>
                  <h5 className={styles.techTitle}>Technologies Used</h5>
                  <div className={styles.techList}>
                    {job.technologies.map((tech) => (
                      <span key={tech} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;