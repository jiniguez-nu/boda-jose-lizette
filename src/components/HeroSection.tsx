import { TGuestProps } from '@/lib/validation';
import styles from './HeroSection.module.scss';
import { translations } from '@/lib/translations';

export default function HeroSection({guest}: TGuestProps) {
  const { hero } = translations;

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <p>{hero.subtitle}</p>
        <span>
        {`${guest.Nombre1} ${guest.andSymbol} ${guest.Nombre2}`}
        </span>
        <p>{hero.subtitle2}</p>
        <h1>{hero.title}</h1>
        <div className={styles.scrollIndicator}>
          <span>{hero.scrollHint}</span>
          <div className={styles.chevron}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.backgroundDecor} />
    </section>
  );
}
