'use client';

import { useEffect, useRef } from 'react';
import styles from './FlowerSystem.module.scss';
import { FLOWER1, FLOWER2, FLOWER3, FLOWER4 } from '@/lib/flowers/flowers';

type Flower = {
  id: number;
  x: number;
  y: number;
  size: number;
  life: number;
  maxLife: number;
  drawDuration: number;
  element?: HTMLDivElement;
};

export default function FlowerSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const flowers = useRef<Flower[]>([]);
  const elementMap = useRef<Map<number, HTMLDivElement>>(new Map());
  let id = 0;

  useEffect(() => {
    const spawnFlower = () => {
      flowers.current.push({
        id: id++,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 40 + Math.random() * 60,
        life: 0,
        maxLife: 600 + Math.random() * 300,
        drawDuration: 3 + Math.random() * 3,
      });
    };

    const loop = () => {
      const container = containerRef.current;
      if (!container) return;

      // spawn aleatorio
      if (Math.random() < 0.01) spawnFlower();

      flowers.current.forEach(f => {
        f.life++;

        const progress = f.life / f.maxLife;

        // Desvanecimiento al inicio y final
        const opacity =
          progress < 0.1
            ? progress * 10
            : progress > 0.85
            ? (1 - progress) * 6.67
            : 1;

        // Create element only once
        if (!elementMap.current.has(f.id)) {
          const el = document.createElement('div');
          el.style.position = 'absolute';
          el.style.left = `${f.x}%`;
          el.style.top = `${f.y}%`;
          el.style.width = `${f.size}px`;
          el.style.height = `${f.size}px`;
          el.style.transform = 'translate(-50%, -50%)';
          el.style.setProperty('--draw-duration', `${f.drawDuration}s`);
          el.innerHTML = getRandomFlowerSVG();
          container.appendChild(el);
          elementMap.current.set(f.id, el);
        }

        // Update only opacity
        const el = elementMap.current.get(f.id);
        if (el) {
          el.style.opacity = `${opacity}`;
        }
      });

      // Remove dead flowers
      flowers.current = flowers.current.filter(f => f.life < f.maxLife);
      
      // Clean up removed elements from map
      for (const [flowerId] of elementMap.current) {
        if (!flowers.current.find(f => f.id === flowerId)) {
          const el = elementMap.current.get(flowerId);
          if (el) el.remove();
          elementMap.current.delete(flowerId);
        }
      }

      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  return <div ref={containerRef} className={styles.FlowerSystem} />;
}

function getRandomFlowerSVG() {
  const flowers = [
    FLOWER1,
    FLOWER2,
    FLOWER3,
    FLOWER4,
  ];

  return flowers[Math.floor(Math.random() * flowers.length)];
}