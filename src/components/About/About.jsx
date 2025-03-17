import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Frontend development icon"
              className={styles.aboutItemIcon}
            />
            <div className={styles.aboutItemText}>
              <p>
            Driven by curiosity, I’m always seeking opportunities to grow and continuously improve my skills.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt="Backend development icon"
              className={styles.aboutItemIcon}
            />
            <div className={styles.aboutItemText}>
              <p>
              I have hands-on experience with frontend technologies like React, HTML, and CSS, and I am also diving into backend development using Node.js, Express, and MongoDB.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="UI/UX Design icon"
              className={styles.aboutItemIcon}
            />
            <div className={styles.aboutItemText}>
              <p>
              My goal is to become a full-stack developer, focusing on building scalable, efficient, and
            user-friendly applications. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
