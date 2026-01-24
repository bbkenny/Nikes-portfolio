"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.badges}>
          <div className={styles.badge}>
            <span>🎓 University of Lagos</span>
          </div>
          <div className={styles.badge}>
            <span>🏆 SLOCAT-VREF Young Leader</span>
          </div>
        </div>
        
        <h1 className={styles.name}>
          Babalola<br />
          Olanike
        </h1>
        
        <p className={styles.tagline}>
          Advancing Sustainable Transport & Smart Freight Systems
        </p>
        
        <div className={styles.contact}>
          <a href="mailto:contact@olanikebabalola.com" className={styles.emailBtn}>
            olanikebabalola@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
