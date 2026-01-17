'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Nikes</h3>
            <p className={styles.description}>
              Build and showcase your professional portfolio with Nikes.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnHeading}>Product</h4>
            <ul className={styles.links}>
              <li><Link href="/#features">Features</Link></li>
              <li><Link href="/#pricing">Pricing</Link></li>
              <li><Link href="/docs">Documentation</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnHeading}>Company</h4>
            <ul className={styles.links}>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnHeading}>Legal</h4>
            <ul className={styles.links}>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>&copy; 2026 Nikes Portfolio. All rights reserved.</p>
          <div className={styles.social}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
