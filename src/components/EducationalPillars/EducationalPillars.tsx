import { educationalPillarsData } from "./educationalPillarsData";
import styles from "./EducationalPillars.module.css";

interface EducationalPillarsProps {
  imageSrc?: string;
  imageAlt?: string;
}

const EducationalPillars = ({ imageSrc, imageAlt = "" }: EducationalPillarsProps) => {
  return (
    <section className={styles.section} aria-labelledby="educational-pillars-title">
      <div className="container">
        <h2 id="educational-pillars-title" className={styles.title}>Nuestros pilares educativos</h2>
        <div className={styles.layout}>
          <div className={styles.media}>
            {imageSrc ? (
              <img className={styles.image} src={imageSrc} alt={imageAlt} />
            ) : (
              <div className={styles.placeholder} role="img" aria-label="Espacio reservado para la fotografía de jinetes">
                <span>Fotografía por incorporar</span>
              </div>
            )}
          </div>
          <div className={styles.pillars}>
            {educationalPillarsData.map((pillar) => (
              <article key={pillar.id} className={`${styles.pillar} ${styles[pillar.id]}`}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalPillars;
