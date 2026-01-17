'use client';

import styles from './Features.module.css';

const features = [
  {
    icon: '🎨',
    title: 'Beautiful Templates',
    description: 'Choose from professionally designed templates or customize your own to match your personal brand.'
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    description: 'Your portfolio looks perfect on all devices - desktop, tablet, and mobile.'
  },
  {
    icon: '⚡',
    title: 'Fast & Optimized',
    description: 'Lightning-fast loading times and optimized performance for the best user experience.'
  },
  {
    icon: '🔒',
    title: 'Secure & Private',
    description: 'Your data is secure. Control who sees what with our privacy-first approach.'
  },
  {
    icon: '📊',
    title: 'Analytics',
    description: 'Track views, interactions, and analytics to understand how recruiters engage with your portfolio.'
  },
  {
    icon: '🌐',
    title: 'Custom Domain',
    description: 'Use your own custom domain to make your portfolio truly yours.'
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Powerful Features</h2>
          <p className={styles.subtitle}>
            Everything you need to create an impressive portfolio and land your next opportunity
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
