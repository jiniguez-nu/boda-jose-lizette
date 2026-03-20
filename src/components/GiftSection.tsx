import styles from './GiftSection.module.scss';
import { translations } from '@/lib/translations';

export default function GiftSection() {
  const { giftSection } = translations;

  return (
    <section id="gift" className={styles.gift}>
      <div className={styles.container}>
        <h2>{giftSection.title}</h2>

        <div className={styles.card}>
          <div className={styles.icon}>🎁</div>
          <h3>{giftSection.description}</h3>
          <p>{giftSection.details}</p>
        </div>
      </div>
    </section>
  );
}
