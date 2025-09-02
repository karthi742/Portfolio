import React, { useEffect, useRef, useState } from 'react';
import { Code, Server, Database, Cloud } from 'lucide-react';
import { resumeData } from '../../data/resume';
import styles from './Skills.module.css';

const Skills = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: resumeData.skills.frontend,
      color: '#3b82f6'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: resumeData.skills.backend,
      color: '#8b5cf6'
    },
    {
      title: 'Database',
      icon: Database,
      skills: resumeData.skills.database,
      color: '#ec4899'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: resumeData.skills.cloud,
      color: '#10b981'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={styles.skills} ref={skillsRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Technical Skills</h2>
          <p className={styles.subtitle}>
            Technologies and tools I use to bring ideas to life
          </p>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            
            return (
              <div 
                key={category.title} 
                className={styles.skillCategory}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className={styles.categoryHeader}>
                  <div 
                    className={styles.categoryIcon}
                    style={{ color: category.color }}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>

                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className={styles.skillItem}
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      <div className={styles.skillHeader}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            backgroundColor: category.color,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;