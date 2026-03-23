'use client';

import styles from './GalleryCarousel.module.scss';

const DATA = [
  '1540968221243-29f5d70540bf',
  '1596135187959-562c650d98bc',
  '1628944682084-831f35256163',
  '1590013330451-3946e83e0392',
  '1590421959604-741d0eec0a2e',
  '1572613000712-eadc57acbecd',
  '1570097192570-4b49a6736f9f',
  '1620789550663-2b10e0080354',
  '1617775623669-20bff4ffaa5c',
  '1548600916-dc8492f8e845',
  '1573824969595-a76d4365a2e6',
  '1633936929709-59991b5fdd72'
];

const N = DATA.length;

export default function GalleryCarousel({ setSelectedImage }: { setSelectedImage: (index: number) => void }) {
  return (
    <div className={styles.scene}>
      <div
        className={styles.a3d}
        style={{ ['--n' as any]: N }}
      >
        {DATA.map((id, i) => (
          <img
            key={id}
            className={styles.card}
            src={`https://images.unsplash.com/photo-${id}?w=280`}
            style={{ ['--i' as any]: i }}
            alt="wedding photo"
            onClick={() => setSelectedImage(i)}
            role="button"
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
}