'use client';

import { useState } from 'react';
import styles from './Gallery.module.scss';
import { translations } from '@/lib/translations';
import GalleryCarousel from './GalleryCarousel';

export default function Gallery() {
  const { gallerySection } = translations;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Mockup gallery images
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/photo-${i}.jpeg`,
    alt: `Foto de la pareja ${i + 1}`,
  }));

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <h2>{gallerySection.title}</h2>
        <p className={styles.description}>{gallerySection.description}</p>
        <p className={styles.description}>{gallerySection.instructions}</p>
        
        {/* Galleria aqui*/}
        <GalleryCarousel setSelectedImage={setSelectedImage}/>
        <div className={styles.buttonWrapper}>
          <button
            type="submit"
            onClick={()=>setSelectedImage(0)}
            className={styles.submitButton}
          >
            Abrir galería
          </button>
        </div>
        {/* <div className={styles.grid}>
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
        </div> */}
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
              <img src={images[selectedImage].src} />
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
