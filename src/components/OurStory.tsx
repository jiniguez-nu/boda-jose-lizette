'use client';

import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import { useRef } from 'react';
import styles from './OurStory.module.scss';
import { translations } from '@/lib/translations';

export default function OurStory() {
  const { storySection } = translations;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [150, -150]);

const y = useSpring(rawY, {
  stiffness: 50,
  damping: 20,
});

  return (
    <section id="story" ref={ref} className={styles.story}>
      <div className={styles.backgroundContainer}>
        <motion.div className={styles.backgroundImage} style={{ y, scaleX: -1 }} />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h2>{storySection.title}</h2>
          <div className={styles.text}>
            <p>Todo empezó en un día bastante normal.<br />
              De esos en los que no tienes grandes planes y solo quieres distraerte un rato. Cada quien en su casa, cada quien en su mundo, pero con esa idea de conocer a alguien con quien platicar.</p>

            <p>Y entonces pasó… hicimos match en <a href='https://bumble.com/' target='_blank'>Bumble</a>.</p>

            <p>Yo le di like, y Liz decidió iniciar la conversación… (seguramente ayudó que salíamos bastante bien en las fotos 😏).</p>

            <p>Empezamos a hablar, a conocernos, y poco a poco fuimos conectando. Yo la llamaba para que vieramos juntos Game of Thrones (Liz en su casa y yo en la mía), ella se dormía (en algunos episodios) y aunque solo pudimos vernos un par de veces en Guadalajara, fue suficiente para saber que había algo especial.</p>

            <p>Después la vida nos llevó por caminos distintos: Liz se mudó a Irapuato y yo seguí con lo mío en Guadalajara. La relación quedó en una bonita amistad… de esas que empiezas a extrañar.</p>

            <p>Pero unos meses después, todo cambió.</p>

            <p>Por cuestiones del destino, terminé trabajando en León. Y en una llamada casual para ponernos al día, nos dimos cuenta de algo muy simple pero importante: León estaba a solo una hora de Irapuato.</p>

            <p>Y ahí empezó la segunda parte de nuestra historia.</p>

            <p>Comenzamos a vernos más seguido, a compartir más tiempo juntos… y sin forzarlo, la amistad se transformó en algo más.</p>

            <p>Fuimos avanzando poco a poco: primero el cariño, luego el amor, después la decisión de compartir más tiempo… hasta que un día, casi sin darnos cuenta, ya estábamos construyendo una vida juntos.</p>

            <p>Aprendimos a conocernos de verdad: lo bueno, lo no tan bueno, los momentos fáciles y los complicados. Nos enojamos, nos entendimos, nos apoyamos… y seguimos eligiéndonos.</p>

            <p>Estamos listos para dar el paso más importante:<br />
            el de confirmar que queremos estar juntos para siempre.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
