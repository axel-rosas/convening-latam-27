import styles from "./LogoGrid.module.css";

export interface PartnerLogo {
  id: string;
  src: string;
  name: string;
}

interface LogoGridProps {
  logos: PartnerLogo[];
  featuredLogos?: PartnerLogo[];
  label: string;
}

const LogoGrid = ({ logos, featuredLogos = [], label }: LogoGridProps) => {
  const renderLogo = (logo: PartnerLogo) => (
    <li key={logo.id} className={styles.item}>
      <img src={logo.src} alt={logo.name} loading="lazy" decoding="async" />
    </li>
  );

  return (
    <div className={styles.panel}>
      {featuredLogos.length > 0 && (
        <ul className={`${styles.grid} ${styles.featured}`} aria-label={`${label}: destacados`}>
          {featuredLogos.map(renderLogo)}
        </ul>
      )}
      <ul className={styles.grid} aria-label={label}>{logos.map(renderLogo)}</ul>
    </div>
  );
};

export default LogoGrid;
