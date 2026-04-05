import { TGuestProps } from '@/lib/validation';
import styles from './HeroSection.module.scss';
import { translations } from '@/lib/translations';
import Image from 'next/image';

export default function HeroSection({guest}: TGuestProps) {
  const { hero } = translations;

  return (
    <section id="home" className={styles.hero}>
      {/* <h1 className={styles.titleMain}>
            Laura Lizette <span>&</span> José María
          </h1>
      <div className={styles.divider}>
        <Image
          src={'/divider.png'}
          alt="divider"
          priority
          width={120}
          height={40}
        />
        <Image
          src={'/divider.png'}
          alt="divider"
          priority
          width={120}
          height={40}
          style={{
            transform: 'scaleX(-1)', // invierte horizontalmente
          }}
        />
      </div> */}
      <div className={styles.content}>
        <p>{hero.subtitle}</p>
        <span>
        {guest.Nombre1} <br /> {guest.andSymbol}<br /> {guest.Nombre2}<br />
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
