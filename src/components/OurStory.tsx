'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './OurStory.module.scss';
import { translations } from '@/lib/translations';

export default function OurStory() {
  const { storySection } = translations;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="story" ref={ref} className={styles.story}>
      <div className={styles.backgroundContainer}>
        <motion.div className={styles.backgroundImage} style={{ y }} />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h2>{storySection.title}</h2>
          <div className={styles.text}>
            {storySection.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
