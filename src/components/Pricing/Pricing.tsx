import { pricingData } from "./pricingData";
import PricingTable from "./PricingTable";

const Pricing = () => {
  return (
    <section id="pricing" className="container py-5">
      {pricingData.map((group) => (
        <PricingTable key={group.id} group={group} />
      ))}

      <div className="text-end mt-2">*Early Bird | hasta el 00 del mes</div>

      <p className="text-center mt-5">
        <p>
          ¿Quieres asistir como Profesor o Estudiante? <br />
          Por favor comunicate a info@conveninglatam.org para obtener acceso a
          la tarifa
        </p>
      </p>
    </section>
  );
};

export default Pricing;
