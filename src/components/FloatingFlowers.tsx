'use client';

import { useEffect, useState } from 'react';
import styles from './FloatingFlowers.module.scss';

type Flower = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
};

export default function FloatingFlowers() {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    let id = 0;

    const interval = setInterval(() => {
      const newFlower: Flower = {
        id: id++,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 40 + Math.random() * 80,
        delay: Math.random() * 2,
      };

      setFlowers((prev) => [...prev, newFlower]);

      // eliminar después de animación
      setTimeout(() => {
        setFlowers((prev) => prev.filter(f => f.id !== newFlower.id));
      }, 6000);

    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.flowersContainer}>
      {flowers.map(f => (
        <div
          key={f.id}
          className={styles.flower}
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
            width: f.size,
            height: f.size,
            animationDelay: `${f.delay}s`,
          }}
        >
          <FlowerSVG />
        </div>
      ))}
    </div>
  );
}

function FlowerSVG() {
  return (
    <svg viewBox="0 0 100 100" className={styles.flowerSvg}>
      <path
        d="M50 10 C65 20, 80 35, 50 50 C20 35, 35 20, 50 10"
        fill="none"
        stroke="rgba(0,0,0,0.6)"
        strokeWidth="1.5"
      />
      <circle cx="50" cy="50" r="3" fill="rgba(212,175,55,0.6)" />
    </svg>
  );
}