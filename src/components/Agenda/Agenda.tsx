import { FaChevronDown } from "react-icons/fa6";
import logo from "../../assets/images/branding/logo-1.png";
import { agendaDays } from "./agendaData";
import styles from "./Agenda.module.css";

interface AgendaProps {
  fullAgendaHref?: string;
}

const Agenda = ({ fullAgendaHref }: AgendaProps) => {
  const buttonContent = <>Descarga la agenda completa aquí<span className={styles.arrow} aria-hidden="true"><FaChevronDown /></span></>;

  return (
    <section id="agenda" className={styles.section} aria-labelledby="agenda-title">
      <div className="container">
        <div className={styles.intro}>
          <div className={styles.brand}>
            <img src={logo} alt="PCMA Convening LATAM 27" />
          </div>
          <div className={styles.overview}>
            <p>Explora el ritmo del evento: sesiones, espacios de conexión y momentos clave.</p>
            {fullAgendaHref ? (
              <a className={styles.button} href={fullAgendaHref}>{buttonContent}</a>
            ) : (
              <>
                <button className={styles.button} type="button" disabled aria-describedby="agenda-download-notice">{buttonContent}</button>
                <p id="agenda-download-notice" className={styles.notice}>Agenda completa pendiente de publicación.</p>
              </>
            )}
          </div>
        </div>
        <h2 id="agenda-title" className={styles.title}>Agenda at a Glance</h2>
        <p className={styles.notice}>Programa de referencia: fechas, horarios y actividades pendientes de confirmación.</p>
        <div className={styles.days}>
          {agendaDays.map((day) => (
            <section key={day.id} className={styles[day.layout]} aria-labelledby={`agenda-${day.id}`}>
              <div className={styles.dayHeader}>
                <span className={styles.badge} aria-hidden="true">{day.label}</span>
                <div>
                  <h3 id={`agenda-${day.id}`} className={styles.date}>{day.date ?? "Fecha pendiente"}</h3>
                  {day.layout === "featured" && day.subtitle && <p className={styles.subtitle}>{day.subtitle}</p>}
                </div>
              </div>
              {day.layout === "featured" ? (
                <div className={styles.featuredActivities}>
                  {day.groups.map((group) => (
                    <div key={group.id} className={styles.activityGroup}>
                      <h4>{group.title ?? "Actividad pendiente"}</h4>
                      <ul className={styles.featuredList}>
                        {group.activities.map((activity) => (
                          <li key={activity.id}>
                            <span>{activity.time ?? "Horario pendiente"}</span>
                            {activity.title && <> | <strong>{activity.title}</strong></>}
                            {activity.needsVenue && <> | <strong>{activity.venue ?? "Sede pendiente"}</strong></>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className={styles.scheduleList}>
                  {day.activities.map((activity) => (
                    <li key={activity.id} className={styles.scheduleRow}>
                      <span>{activity.time ?? "Horario pendiente"}</span>
                      <span><strong>{activity.title ?? "Actividad pendiente"}</strong>{activity.note && <> <small>({activity.note})</small></>}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
