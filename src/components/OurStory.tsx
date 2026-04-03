'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
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

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="story" ref={ref} className={styles.story}>
      <div className={styles.backgroundContainer}>
        <motion.div className={styles.backgroundImage} style={{ y }} />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h2>{storySection.title}</h2>
          <div className={styles.text}>
            {/* <p>Nos conocimos en un día de ocio, un día en el que ninguno de nosotros se imaginaba lo que el futuro tenía planeado para nosotros.
              Ambos solitarios, cada uno en su casa, buscabamos alguien con quien platicar, fue entonces cuando en una aplicación llamada <a href='https://bumble.com/' target='_blank'>Bumble</a> coincidimos,
              yo le di me gusta y a Liz le pidieron decidir si quería iniciar la conversación, Liz con gusto acepto al ver a ese muchacho tan guapo en las fotos 😉😉.
            </p>
            <p>
              Así comenzamos a platicar y a conocernos, aunque el destino solo nos permitió vernos un par de veces en Guadalajara. Pronto nuestros caminos tomaron un destino diferente, Liz se mudó a Irapuato, 
              Gto. y del encuentro solo quedó la amistad, hasta que unos meses mas tarde el destino decidió que yo debía trabajar en León, Gto. y en una llamada casual, para saludarnos, puesto que Liz estaba 
              en Guadalajara,  descubrí que León estaba a solo 1 hra de Irapuato, y así acordamos a encontrarnos en León. 
            </p>
            <p>
              Las visitas se fueron haciendo mas frecuentes, la amistad se convirtió en romance, dimos el siguiente paso, después el siguiente y el siguiente, las circunstancias nos llevaron a vivir juntos, 
              luego a dormir en la misma habitación, nos conocimos muy bien, nos enojamos, nos aguantamos y comprobamos que estamos listos para el último paso de una relación, el juntos para siempre.
            </p> */}
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
