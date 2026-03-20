import styles from './Footer.module.scss';
import { translations } from '@/lib/translations';

export default function Footer() {
  const { footer } = translations;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>{footer.copyright}</p>
        <p className={styles.designedWith}>{footer.designedWith}</p>
        <p className={styles.privacyNote}>{footer.privacyNote}</p>
      </div>
    </footer>
  );
}
