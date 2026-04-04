import Image from 'next/image';
import styles from './GiftSection.module.scss';
import { translations } from '@/lib/translations';

export default function GiftSection() {
  const { giftSection } = translations;

  return (
    <section id="gift" className={styles.gift}>
      <div className={styles.container}>
        <h2>{giftSection.title}</h2>

        <div className={styles.card}>
          <div className={styles.icon}>
            <Image 
              src={'/freepik_gift_white.png'} 
              alt={`image-gift`}
              priority
              width={200}
              height={200}
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <h3>{giftSection.description}</h3>
          <p>{giftSection.details}</p>
          <a href='https://www.amazon.com.mx/wedding/guest-view/3T8ZPC8Q6IW0F' target='__blank'>Mesa de regalos de Amazon</a>
          <p>{giftSection.postDetails}</p>
        </div>
      </div>
    </section>
  );
}
