import { pricingData } from "./pricingData";
import PricingTable from "./PricingTable";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <section id="pricing" className={`container ${styles.pricing}`} aria-labelledby="pricing-title">
      <h2 id="pricing-title" className="visually-hidden">Información de Registro y tarifas</h2>
      {pricingData.map((group) => (
        <PricingTable key={group.id} group={group} />
      ))}

      <div className={styles.earlyBirdNote}>*Early Bird | hasta el 00 del mes</div>

      <p className={styles.pricingNotice}>
          ¿Quieres asistir como Profesor o Estudiante? <br />
          Por favor comunicate a info@conveninglatam.org para obtener acceso a
          la tarifa
      </p>
    </section>
  );
};

export default Pricing;
