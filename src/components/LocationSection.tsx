'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './LocationSection.module.scss';
import { translations } from '@/lib/translations';

export default function LocationSection() {
  const { locationSection } = translations;
  const [isSafariIOS, setIsSafariIOS] = useState(false);
  // Wedding details
  const eventDate = '2026-05-30';
  const eventTime = '18:00';
  const eventTitle = 'Boda Lizette y José';
  const eventDescription = 'Boda Lizette y José en León, Guanajuato';
  const eventLocation = 'Blvd. Adolfo López Mateos 1702, Col. Parque Manzanares, 37320, León, Guanajuato, México';
  const googleMapsUrl = 'https://www.google.com/maps/place/Restaurante+bar+Sky+360%C2%B0%2B1/@21.1164828,-101.6632357,17z/data=!3m1!4b1!4m6!3m5!1s0x842bbf39289b567b:0x954bb927e234e10f!8m2!3d21.1164779!4d-101.6583648!16s%2Fg%2F11gn28rwlm!5m2!1e4!1e2?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D';
  
  // Dentro de LocationSection
const addToCalendar = () => {
  // Fechas para .ics
  const formatDate = (date: string, time: string) =>
    `${date.replace(/-/g, '')}T${time.replace(/:/g, '')}00`;

  const start = formatDate(eventDate, eventTime);
  const end = formatDate(eventDate, '23:59');

  if (isSafariIOS) {
    // Generar .ics para iOS/Safari
    const now = new Date()
      .toISOString()
      .replace(/[-:]/g, '')
      .split('.')[0] + 'Z';
    const uid = `${Date.now()}@tuboda.com`;

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Boda Lizette y Jose//ES
CALSCALE:GREGORIAN
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${now}
DTSTART;TZID=America/Mexico_City:${start}
DTEND;TZID=America/Mexico_City:${end}
SUMMARY:${eventTitle}
DESCRIPTION:${eventDescription}
LOCATION:${eventLocation}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    window.location.href = url; // iOS abre Calendar directamente

  } else {
    // Link directo a Google Calendar para otros dispositivos
    const gStart = `${start.replace(/[-:]/g, '')}`;
    const gEnd = `${end.replace(/[-:]/g, '')}`;
    const params = new URLSearchParams({
      text: eventTitle,
      details: eventDescription,
      location: eventLocation,
      dates: `${gStart}/${gEnd}`,
    });
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&${params.toString()}`;
    window.open(url, '_blank');
  }
};

const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: 'smooth', // scroll suave
    block: 'start',     // alineado al inicio del elemento
  });
};
  const isSafari = () => {
    const ua = navigator.userAgent;
    const isSafariBrowser = /^((?!chrome|crios|firefox|fxios|edgios|edga).)*safari/i.test(ua);
    const isAppleDevice = /iPad|iPhone|iPod|Macintosh/.test(ua);
    return isSafariBrowser && isAppleDevice;
  };
  useEffect(() => {
    setIsSafariIOS(isSafari());
  }, []);

  return (
    <section id="location" className={styles.location}>
      <h2>{locationSection.title}</h2>
      <div className={styles.bannerContainer}>

      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.columnContainer}>
            <section id="section" onClick={()=>scrollToId("article-event")}>  
              <article id="article-event">
                <h3>Evento</h3>
                <div className={`${styles.info} ${styles.columnContent}`}>
                  <div><h4>Fecha:</h4><p>{locationSection.date} {locationSection.time}</p></div>
                  <div><h4>Lugar:</h4><p>{locationSection.location}</p></div>
                  <div><h4>Direccion:</h4><p>{locationSection.locationAddress}</p></div>
                  <div className={styles.buttons}>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.button}
                    >
                      <Image 
                        src={"/btn-g-map.png"}
                        alt={`image-google-maps`}
                        priority
                        width={130}
                        height={130}
                        quality={95}
                        style={{
                          objectFit: 'cover',
                        }}  
                      />
                      {locationSection.googleMaps}
                    </a>
                    <a
                      onClick={addToCalendar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.button}
                    >
                      <Image 
                        src={isSafariIOS ? '/btn-a-calendar.png' : '/btn-g-calendar.png'}
                        alt={`image-google-calendar`}
                        priority
                        width={56}
                        height={55}
                        quality={95}
                        style={{
                          objectFit: 'cover',
                        }}  
                      />
                      {`Agregar a calendario ${isSafariIOS ? 'Apple' : 'Google'}`}
                    </a>
                  </div>
                </div>
                <span>apunta (PC) o tap (móvil) para ver</span>
              </article>
            </section>
            <section id="section" onClick={()=>scrollToId("article-menu")}>
              <article id="article-menu">
                <h3>{translations.foodSection.title}</h3>
                <div className={`${styles.info} ${styles.columnContent}`}>
                <p className={styles.columnContent}>{translations.foodSection.description}</p>
                <h4>Menú:</h4>
                <h5>- Entrada:</h5>
                <ul>
                  <li>Crema de 4 quesos en pan de hogaza</li>
                </ul>
                <h5>- Platillo Principal:</h5>
                <ul>
                  <li>
                    Medallones de res en salsa de portobello rostizado, puré de camote
                    y verduras al vapor.
                  </li>
                </ul>
                <h5>- Postre:</h5>
                <ul>
                  <li>Panna cotta con frutos rojos</li>
                </ul>
                <h5>- Bebidas:</h5>
                <ul>
                  <li>Café Americano</li>
                </ul>
                <ul>
                  <li>Barra libre de refrescos surtidos (Todo el evento)</li>
                </ul>
                <ul>
                  <li>Barra libre de bebidas alcoholicas (Nacionales) de 8:30 PM a 11:30 PM</li>
                </ul>
                </div>
                <span>apunta (PC) o tap (móvil) para ver</span>
              </article>
            </section>
            <section id="section" onClick={()=>scrollToId("article-schedule")}>
              <article id="article-schedule">
                <h3>{translations.scheduleSection.title}</h3>
                <div className={`${styles.info} ${styles.columnContent}`}>
                <p className={styles.columnContent}>{translations.scheduleSection.desciption}</p>
                <h4>18:30 Hrs:</h4> <p>Recepción de invitados</p>
                <h4>19:00 Hrs:</h4> <p>Inicio de la Ceremonia Civíl</p>
                <h4>Post Ceremonia:</h4> <p>Felicitaciones, Fotos, etc.</p>
                <h4>20:30 Hrs:</h4> <p>Inicia la Cena</p>
                <h4>21:30 - 00:00 Hrs:</h4> <p>Continúa el convivio</p>
                </div>
                <span>apunta (PC) o tap (móvil) para ver</span>
              </article>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
