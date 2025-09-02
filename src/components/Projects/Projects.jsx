import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { resumeData } from '../../data/resume';
import styles from './Projects.module.css';

const Projects = () => {
  const projectsRef = useRef(null);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredProjects = resumeData.projects.filter(project => project.featured);
  const otherProjects = resumeData.projects.filter(project => !project.featured);

  return (
    <section id="projects" className={styles.projects} ref={projectsRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            A showcase of my recent work and personal projects
          </p>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.featuredGrid}>
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={styles.projectCard}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={styles.projectImage}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayActions}>
                    {/* <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.overlayButton}
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={20} disab />
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.overlayButton}
                      aria-label="View Source Code"
                    >
                      <Github size={20} />
                    </a> */}
                  </div>
                </div>
                {project.featured && (
                  <div className={styles.featuredBadge}>
                    <Star size={16} />
                    Featured
                  </div>
                )}
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.techStack}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <div className={styles.projectActions}>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryAction}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryAction}
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <div className={styles.sectionDivider}>
              <h3 className={styles.sectionTitle}>Other Projects</h3>
            </div>

            <div className={styles.otherProjectsGrid}>
              {otherProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={styles.compactCard}
                  style={{ animationDelay: `${(featuredProjects.length + index) * 0.1}s` }}
                >
                  <div className={styles.compactHeader}>
                    <h4 className={styles.compactTitle}>{project.title}</h4>
                    <div className={styles.compactActions}>
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.compactAction}
                        aria-label="View Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.compactAction}
                        aria-label="View Source Code"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                  
                  <p className={styles.compactDescription}>{project.description}</p>
                  
                  <div className={styles.compactTechStack}>
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className={styles.compactTechBadge}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={styles.compactTechBadge}>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;