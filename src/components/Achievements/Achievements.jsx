import React from "react";
import styles from "./Achievements.module.css";

import achievements from "../../data/achievements.json"; 

export const Achievements = () => {
  return (
    <section className={styles.container} id="achievements">
      <h2 className={styles.title}>Achievements</h2>
      <ul className={styles.achievementsList}>
        {achievements.map((achievement, index) => (
          <li key={index} className={styles.achievement}>
            <h3 className={styles.achievementTitle}>{achievement.title}</h3>
            <p className={styles.achievementDescription}>{achievement.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
