import { FaUser } from "react-icons/fa6";
import type { Speaker, SpeakerCardVariant } from "../Speakers/speakersData";
import styles from "./SpeakerCard.module.css";

interface SpeakerCardProps {
  speaker: Speaker;
  variant: SpeakerCardVariant;
  monochrome?: boolean;
}

const SpeakerCard = ({ speaker, variant, monochrome = false }: SpeakerCardProps) => {
  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.surface}>
        <h3 className={styles.name}>{speaker.name ?? "Nombre pendiente"}</h3>
        <div className={styles.portrait}>
          {speaker.photo ? (
            <img
              className={`${styles.photo} ${monochrome ? styles.monochrome : ""}`}
              src={speaker.photo.src}
              alt={speaker.photo.alt}
              style={{ objectPosition: speaker.photo.position }}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className={styles.placeholder}>
              <FaUser aria-hidden="true" />
              <span>Fotografía pendiente</span>
            </div>
          )}
        </div>
        <div className={styles.details}>
          <p className={styles.role}>{speaker.role ?? "Cargo pendiente"}</p>
          <p>{speaker.biography ?? "Biografía pendiente de confirmar."}</p>
        </div>
      </div>
    </article>
  );
};

export default SpeakerCard;
