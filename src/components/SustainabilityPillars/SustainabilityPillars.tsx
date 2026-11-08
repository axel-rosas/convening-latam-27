import { FaChevronRight } from "react-icons/fa6";
import { sustainabilityPillarsData } from "./sustainabilityPillarsData";
import styles from "./SustainabilityPillars.module.css";

interface SustainabilityPillarsProps {
  headingIconSrc?: string;
  registrationHref?: string;
  registrationDetailsHref?: string;
}

const PillarIcon = ({ src }: { src?: string }) =>
  src ? (
    <img className={styles.icon} src={src} alt="" />
  ) : (
    <span className={styles.iconPlaceholder}>Icono pendiente</span>
  );

const SustainabilityPillars = ({
  headingIconSrc,
  registrationHref,
  registrationDetailsHref,
}: SustainabilityPillarsProps) => {
  const actions = [
    { label: "Regístrate aquí", href: registrationHref, variant: styles.register },
    { label: "¿Qué incluye el registro?", href: registrationDetailsHref, variant: styles.details },
  ];

  return (
    <section className={styles.section} aria-labelledby="sustainability-title">
      <div className={`container ${styles.content}`}>
        <h2 id="sustainability-title" className={styles.title}>
          <span className={styles.headingIcon}><PillarIcon src={headingIconSrc} /></span>
          Pilares Sustentables
        </h2>
        <div className={styles.cards}>
          {sustainabilityPillarsData.map((pillar) => (
            <article key={pillar.id} className={`${styles.card} ${styles[pillar.id]}`}>
              <div className={styles.cardHeading}>
                <PillarIcon src={pillar.iconSrc} />
                <h3>{pillar.title}</h3>
              </div>
              <div className={styles.rule} aria-hidden="true" />
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
        <p className={styles.statement}>
          La industria está en cambio constante. <span>Convening LATAM 2026</span> te
          ayuda a diseñar experiencias más relevantes, sostenibles y efectivas en
          un mercado cada vez más exigente.
        </p>
        <div className={styles.actions}>
          {actions.map((action) => {
            const content = <>{action.label}<span className={styles.arrow} aria-hidden="true"><FaChevronRight /></span></>;
            const className = `${styles.action} ${action.variant}`;
            return action.href ? (
              <a key={action.label} href={action.href} className={className}>{content}</a>
            ) : (
              <button key={action.label} type="button" className={className} disabled title="Enlace pendiente de confirmar" aria-describedby="sustainability-links-notice">{content}</button>
            );
          })}
        </div>
        {(!registrationHref || !registrationDetailsHref) && (
          <p id="sustainability-links-notice" className={styles.notice}>Enlaces de registro pendientes de confirmar.</p>
        )}
      </div>
      <div className={styles.divider} aria-hidden="true" />
    </section>
  );
};

export default SustainabilityPillars;
