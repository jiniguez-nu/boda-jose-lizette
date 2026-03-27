'use client';

import styles from './LocationSection.module.scss';
import { translations } from '@/lib/translations';

export default function LocationSection() {
  const { locationSection } = translations;

  // Wedding details
  const eventDate = '2026-05-30';
  const eventTime = '18:00';
  const eventTitle = 'Boda Lizette y José';
  const eventDescription = 'Boda Lizette y José en León, Guanajuato';
  const eventLocation = 'Blvd. Adolfo López Mateos 1702, Col. Parque Manzanares, 37320, León, Guanajuato, México';
  const googleMapsUrl = 'https://www.google.com/maps/place/Restaurante+bar+Sky+360%C2%B0%2B1/@21.1164828,-101.6632357,17z/data=!3m1!4b1!4m6!3m5!1s0x842bbf39289b567b:0x954bb927e234e10f!8m2!3d21.1164779!4d-101.6583648!16s%2Fg%2F11gn28rwlm!5m2!1e4!1e2?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D';
  // const mapEmbedUrl =
  // 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.9449956929733!2d-101.6543066!3d21.1453001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b5a85a0000001%3A0x6b6b6b6b6b6b6b6b!2sLe%C3%B3n%2C%20Guanajuato!5e0!3m2!1ses-419!2smx!4v1234567890000';

  // Create calendar link for Google Calendar
  const createGoogleCalendarLink = () => {
    const startDateTime = `${eventDate}T${eventTime}00`;
    const endDateTime = `${eventDate}T${eventTime}00`;
    const params = new URLSearchParams({
      text: eventTitle,
      details: eventDescription,
      location: eventLocation,
      dates: `${startDateTime.replace(/[-:]/g, '')}/${endDateTime.replace(/[-:]/g, '')}`,
    });
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&${params.toString()}`;
  };

  // Create calendar link for Apple Calendar (iCal format)
  const createAppleCalendarLink = () => {
    const startDateTime = `${eventDate.replace(/-/g, '')}T${eventTime.replace(/:/g, '')}00`;
    const params = new URLSearchParams({
      text: eventTitle,
      details: eventDescription,
      location: eventLocation,
      dates: startDateTime,
    });
    return `webcal://calendar.google.com/calendar/ics?${params.toString()}`;
  };

  return (
    <section id="location" className={styles.location}>
      <h2>{locationSection.title}</h2>
      <div className={styles.bannerContainer}>

      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.columnContainer}>
            <section id="section">  
              <article id="article">
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
                      <img src={"/btn-g-map.png"} />
                      {locationSection.googleMaps}
                    </a>
                    <a
                      href={createGoogleCalendarLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.button}
                    >
                      <img src={"/btn-g-calendar.png"} />
                      Agregar a calendario Google
                    </a>
                    <a
                      href={createAppleCalendarLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.button}
                    >
                      <img src={"/btn-a-calendar.png"} />
                      Agregar a calendario Apple
                    </a>
                  </div>
                </div>
                <span>apunta (PC) o tap (móvil) para ver</span>
              </article>
            </section>
            <section id="section">
              <article id="article">
                <h3>{translations.foodSection.title}</h3>
                <div className={`${styles.info} ${styles.columnContent}`}>
                <p className={styles.columnContent}>{translations.foodSection.description}</p>
                <h4>El menú incluye:</h4>
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
                  <li>Barra libre de refrescos y bebidas surtidos (Todo el evento)</li>
                </ul>
                </div>
                <span>apunta (PC) o tap (móvil) para ver</span>
              </article>
            </section>
            <section id="section">
              <article id="article">
                <h3>{translations.scheduleSection.title}</h3>
                <div className={`${styles.info} ${styles.columnContent}`}>
                <p className={styles.columnContent}>{translations.scheduleSection.desciption}</p>
                <h4>18:30 Hrs:</h4> <p>Recepción de invitados</p>
                <h4>19:00 Hrs:</h4> <p>Inicio de la Ceremonia Civíl</p>
                <h4>20:00 Hrs:</h4> <p>Felicitaciones, Fotos, etc.</p>
                <h4>21:00 Hrs:</h4> <p>Inicia la Cena</p>
                <h4>22:00 - 23:59 Hrs:</h4> <p>Continúa el convivio</p>
                </div>
                <span>apunta (PC) o tap (móvil) para ver</span>
              </article>
            </section>
          </div>
        

        {/* <div className={styles.mapContainer}>
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
        </div>
      </div>
    </section>
  );
}
