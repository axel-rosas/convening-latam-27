import type { PricingGroup } from "./pricingData";
import styles from "./Pricing.module.css";

interface PricingTableProps {
  group: PricingGroup;
}

const PricingTable = ({ group }: PricingTableProps) => {
  return (
    <div className={`${styles.pricingBlock} ${styles[group.variant]}`}>
      <h3 className={styles.pricingTitle}>{group.title}</h3>

      <div className={styles.tableWrapper}>
        <div className="table-responsive">
          <table className={styles.pricingTable}>
            <thead>
              <tr>
                <th scope="col">Tier</th>
                {group.categories.map((category) => (
                  <th key={category} scope="col">
                    {category}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {group.tiers.map((tier) => (
                <tr
                  key={tier.name}
                  className={tier.earlyBird ? styles.earlyBird : ""}
                >
                  <th scope="row">{tier.name}</th>

                  {tier.prices.map((price, index) => (
                    <td key={index}>{price}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
