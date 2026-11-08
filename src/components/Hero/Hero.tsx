import styles from "./Hero.module.css";
import logo from "../../assets/images/branding/logo-1.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`pb-4 ${styles.hero__filter}`}>
        <div className="container">
          <h1 className="visually-hidden">PCMA Convening LATAM 27</h1>
          <img src={logo} alt="" className={styles.hero__logo} />
          <div className={`mt-3 p-4 ${styles.hero__text}`}>
            <p>
              Cada año, <span>PCMA</span> reúne a las voces que están moviendo
              la industria de eventos empresariales en América Latina y el
              mundo. <span>Convening LATAM</span> es el espacio donde
              convertimos desafíos regionales en oportunidades reales:
              aprendizaje de alto nivel, conexiones estratégicas y una visión
              global aterrizada en el contexto latino.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
