'use client';

import Image from 'next/image';
import styles from './GalleryCarousel.module.scss';

const DATA = [
  'photo-0',
  'photo-1',
  'photo-2',
  'photo-3',
  'photo-4',
  'photo-5',
  'photo-6',
  'photo-7',
  'photo-8',
  'photo-9',
  'photo-10',
  'photo-11',
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
          <Image
            key={id}
            className={styles.card}
            src={`/photo-${i}.jpeg`}
            style={{ ['--i' as any]: i }}
            alt={`wedding-photo-${i}`}
            onClick={() => setSelectedImage(i)}
            role="button"
            tabIndex={0}
            priority
            width={280}
            height={400}
          />
        ))}
      </div>
    </div>
  );
}