import React from "react";
import styles from "./Resume.module.css";

export const Resume = () => {
  return (
    <section className={styles.container} id="resume">
      <h2 className={styles.title}>Resume</h2>
      <p className={styles.description}>
        You can view my latest resume and learn more about my skills and
        experience.
      </p>
      <a
        href="https://drive.google.com/file/d/1oy6C5hrcuYHcQxAjq3Slc-OVaLj306Jb/view?usp=sharing" 
        download
        className={styles.downloadBtn}
      >
        Resume
      </a>
    </section>
  );
};
