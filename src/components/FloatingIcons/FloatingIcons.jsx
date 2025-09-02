import React, { useEffect, useState } from 'react';
import { Github, Cloud, Database, Code } from 'lucide-react';
import styles from './FloatingIcons.module.css';

const FloatingIcons = () => {
  const [icons, setIcons] = useState([]);

  const iconComponents = [
    { Component: Github, color: '#3b82f6' },
    { Component: Cloud, color: '#ffffffff' },
    { Component: Database, color: '#ec4899' },
    { Component: Code, color: '#10b981' }
  ];

  useEffect(() => {
    const createIcon = () => {
      const randomIcon = iconComponents[Math.floor(Math.random() * iconComponents.length)];
      return {
        id: Math.random(),
        Component: randomIcon.Component,
        color: randomIcon.color,
        left: Math.random() * 100,
        animationDuration: 14 + Math.random() * 6, // slower (14–20s)
        size: 24 + Math.random() * 12,
        delay: Math.random() * 3
      };
    };

    // Fewer initial icons (5 instead of 12)
    const initialIcons = Array.from({ length: 5 }, createIcon);
    setIcons(initialIcons);

    // Add new icons slowly (every 5s instead of 3s)
    const interval = setInterval(() => {
      setIcons(prevIcons => {
        const newIcon = createIcon();
        const updatedIcons = [...prevIcons, newIcon];

        // Keep fewer max icons (max 8 instead of 20)
        if (updatedIcons.length > 15) {
          return updatedIcons.slice(-6);
        }

        return updatedIcons;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.floatingContainer}>
      {icons.map((icon) => {
        const { id, Component, color, left, animationDuration, size, delay } = icon;

        return (
          <div
            key={id}
            className={styles.floatingIcon}
            style={{
              left: `${left}%`,
              animationDuration: `${animationDuration}s`,
              animationDelay: `${delay}s`,
              color: color
            }}
          >
            <Component size={size} />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
