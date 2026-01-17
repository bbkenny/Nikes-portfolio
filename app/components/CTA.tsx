'use client';

import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to Showcase Your Best Work?</h2>
          <p className={styles.subtitle}>
            Join thousands of professionals who are building their careers with Nikes Portfolio.
          </p>
          <Link href="/signup" className={styles.button}>
            Create Your Portfolio Now
          </Link>
        </div>
      </div>
    </section>
  );
}
