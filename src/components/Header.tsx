'use client';

import { useState } from 'react';
import styles from './Header.module.scss';
import { translations } from '@/lib/translations';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { header } = translations;

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Nos Casamos</h1>
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <button onClick={() => scrollToSection('home')}>{header.navHome}</button>
          <button onClick={() => scrollToSection('location')}>{header.navLocation}</button>
          <button onClick={() => scrollToSection('story')}>{header.navStory}</button>
          <button onClick={() => scrollToSection('gift')}>{header.navGift}</button>
          <button onClick={() => scrollToSection('gallery')}>{header.navGallery}</button>
          <button onClick={() => scrollToSection('rsvp')} className={styles.rsvpButton}>
            {header.navRsvp}
          </button>
        </nav>
      </div>
    </header>
  );
}
