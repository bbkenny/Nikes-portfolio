'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Build Your Professional Portfolio
          </h1>
          <p className={styles.subtitle}>
            Showcase your skills, projects, and achievements. Create a stunning portfolio that stands out and attracts opportunities.
          </p>
          <div className={styles.buttons}>
            <Link href="/signup" className={styles.primaryBtn}>
              Start Your Portfolio
            </Link>
            <Link href="#features" className={styles.secondaryBtn}>
              Learn More
            </Link>
          </div>
        </div>
        <div className={styles.illustration}>
          <div className={styles.box}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
