'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.scss';
import { translations } from '@/lib/translations';

export default function Gallery() {
  const { gallerySection } = translations;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Mockup gallery images
  const images = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `https://images.unsplash.com/photo-${1600000000000 + i * 100000}?w=500&h=500&fit=crop`,
    alt: `Foto de la pareja ${i + 1}`,
  }));

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <h2>{gallerySection.title}</h2>
        <p className={styles.description}>{gallerySection.description}</p>

        <div className={styles.grid}>
          {images.map((image, index) => (
            <div
              key={image.id}
              className={styles.imageWrapper}
              onClick={() => setSelectedImage(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage(index);
                }
              }}
            >
              <div className={styles.imagePlaceholder}>
                <div className={styles.placeholderText}>Foto {image.id}</div>
              </div>
              <div className={styles.overlay}>
                <span>👁️ Ver</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className={styles.modal}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedImage(null);
            }
          }}
          role="dialog"
          aria-modal="true"
        >
          <button
            className={styles.closeButton}
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar"
          >
            ✕
          </button>
          <div className={styles.modalContent}>
            <div className={styles.modalImagePlaceholder}>
              <div className={styles.placeholderText}>Foto {selectedImage + 1}</div>
            </div>
          </div>
          <div className={styles.navigation}>
            <button
              onClick={() =>
                setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev! - 1))
              }
              aria-label="Anterior"
            >
              ‹
            </button>
            <span>
              {selectedImage + 1} / {images.length}
            </span>
            <button
              onClick={() =>
                setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev! + 1))
              }
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
