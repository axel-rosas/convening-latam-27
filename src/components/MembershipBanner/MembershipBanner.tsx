import { FaArrowRight } from "react-icons/fa6";
import logo from "../../assets/images/branding/logo-3.png";
import styles from "./MembershipBanner.module.css";

const MembershipBanner = () => {
  return (
    <section className={styles.banner} aria-labelledby="membership-title">
      <div className={`container ${styles.content}`}>
        <div className={styles.brand}>
          <img className={styles.logo} src={logo} alt="PCMA Convening LATAM 27" />
        </div>
        <div className={styles.invitation}>
          <h2 id="membership-title">¿Aún no eres socio PCMA?</h2>
          <a className={styles.link} href="#pricing">
            Hazte socio aquí
            <span className={styles.arrow} aria-hidden="true"><FaArrowRight /></span>
          </a>
        </div>
        <p className={styles.description}>
          Únete a quienes están moviendo la industria en la región: líderes y
          visionarios que marcan la pauta, elevan el estándar y mueven el
          próximo capítulo de los eventos en LATAM.
        </p>
      </div>
    </section>
  );
};

export default MembershipBanner;
