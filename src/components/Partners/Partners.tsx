import logo from "../../assets/images/branding/logo-1.png";
import LogoGrid from "../LogoGrid/LogoGrid";
import { associationPartners, featuredSponsors, mediaPartners, sponsors } from "./partnersData";
import styles from "./Partners.module.css";

const partnerGroups = [
  { id: "association-partners", title: "Association Partners", logos: associationPartners },
  { id: "media-partners", title: "Media Partners", logos: mediaPartners },
];

const Partners = () => {
  return (
    <div id="partners" className={styles.partners}>
      <div className={styles.message}>
        <p className="container">
          El punto donde las ideas se entrelazan, las conversaciones abren caminos,<br className={styles.lineBreak} />
          {" "}las conexiones se vuelven acción y el futuro de la industria se forja en comunidad.
        </p>
      </div>
      <section aria-labelledby="sponsors-title">
        <div className={`container ${styles.sponsorsHeader}`}>
          <img className={styles.logo} src={logo} alt="PCMA Convening LATAM 27, Lima, Perú, April 25–27" />
          <h2 id="sponsors-title">Es presentado gracias a:</h2>
        </div>
        <div className="container">
          <LogoGrid logos={sponsors} featuredLogos={featuredSponsors} label="Sponsors" />
        </div>
      </section>
      {partnerGroups.map((group) => (
        <section key={group.id} aria-labelledby={`${group.id}-title`}>
          <h2 id={`${group.id}-title`} className={styles.groupTitle}>{group.title}</h2>
          <div className="container">
            <LogoGrid logos={group.logos} label={group.title} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Partners;
