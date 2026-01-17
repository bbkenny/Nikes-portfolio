'use client';

import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>Nikes</span>
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <Link href="#features" className={styles.navLink}>Features</Link>
          <Link href="#portfolio" className={styles.navLink}>Portfolio</Link>
          <Link href="#about" className={styles.navLink}>About</Link>
          <Link href="#contact" className={styles.navLink}>Contact</Link>
        </nav>

        <div className={styles.cta}>
          <Link href="/signup" className={styles.ctaButton}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
