import React from "react";
import styles from "./Certifications.module.css";
<<<<<<< HEAD
import certifications from "../../data/certifications.json"; // Import your certifications data
=======
import certifications from "../../data/certifications.json"; 
>>>>>>> d1bae11f234eeff05846cc491f8f2c5923447b72
import { getImageUrl } from "../../utils";

export const Certifications = () => {
  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.certificates}>
        {certifications.map((cert, index) => (
          <div className={styles.certCard} key={index}>
            <img
              src={getImageUrl(cert.imageSrc)}
              alt={cert.title}
              className={styles.certImage}
            />
            <h3 className={styles.certTitle}>{cert.title}</h3>
            <p className={styles.certIssuer}>{cert.issuer}</p>
            <a href={cert.link} className={styles.certLink}>
              View Certification
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};