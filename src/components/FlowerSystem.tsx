'use client';

import { useEffect, useRef } from 'react';
import styles from './FlowerSystem.module.scss';

type Flower = {
  id: number;
  x: number;
  y: number;
  size: number;
  life: number;
  maxLife: number;
  velocityY: number;
};

export default function FlowerSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const flowers = useRef<Flower[]>([]);
  let id = 0;

  useEffect(() => {
    const spawnFlower = () => {
      flowers.current.push({
        id: id++,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 40 + Math.random() * 60,
        life: 0,
        maxLife: 300 + Math.random() * 200,
        velocityY: -0.02 - Math.random() * 0.05,
      });
    };

    const loop = () => {
      const container = containerRef.current;
      if (!container) return;

      // spawn aleatorio
      if (Math.random() < 0.02) spawnFlower();

      flowers.current = flowers.current.filter(f => f.life < f.maxLife);

      container.innerHTML = '';

      flowers.current.forEach(f => {
        f.life++;

        const progress = f.life / f.maxLife;

        // movimiento flotante
        f.y += f.velocityY;

        const opacity =
          progress < 0.2
            ? progress * 5
            : progress > 0.7
            ? (1 - progress) * 3
            : 1;

        const blur = progress > 0.7 ? (progress - 0.7) * 10 : 0;

        const scale = 1 + progress * 0.3;

        const el = document.createElement('div');
        el.style.position = 'absolute';
        el.style.left = `${f.x}%`;
        el.style.top = `${f.y}%`;
        el.style.width = `${f.size}px`;
        el.style.height = `${f.size}px`;
        el.style.transform = `translate(-50%, -50%) scale(${scale})`;
        el.style.opacity = `${opacity}`;
        el.style.filter = `blur(${blur}px)`;
        el.innerHTML = getRandomFlowerSVG();

        container.appendChild(el);
      });

      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  return <div ref={containerRef} className={styles.FlowerSystem} />;
}

function getRandomFlowerSVG() {
  const flowers = [
    `<svg viewBox="0 0 100 100">
      <path d="M50 10 C70 30, 70 70, 50 90 C30 70, 30 30, 50 10"
        fill="none"
        stroke="rgba(237, 175, 100, 0.8)"
        stroke-width="2"
      />
      <circle cx="50" cy="50" r="4" fill="rgba(237, 175, 100, 0.8)" />
    </svg>`,

    `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="30" r="12" fill="rgba(237, 175, 100, 0.7)" />
      <circle cx="75" cy="50" r="12" fill="rgba(237, 175, 100, 0.7)" />
      <circle cx="60" cy="75" r="12" fill="rgba(237, 175, 100, 0.7)" />
      <circle cx="40" cy="75" r="12" fill="rgba(237, 175, 100, 0.7)" />
      <circle cx="25" cy="50" r="12" fill="rgba(237, 175, 100, 0.7)" />
      <circle cx="50" cy="50" r="8" fill="rgba(237, 175, 100, 0.9)" />
    </svg>`
  ];

  return flowers[Math.floor(Math.random() * flowers.length)];
}