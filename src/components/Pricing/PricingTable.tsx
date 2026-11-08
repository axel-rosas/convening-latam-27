import type { PricingGroup } from "./pricingData";
import styles from "./Pricing.module.css";

interface PricingTableProps {
  group: PricingGroup;
}

const PricingTable = ({ group }: PricingTableProps) => {
  return (
    <div className={`${styles.pricingBlock} ${styles[group.variant]}`}>
      <h3 id={`pricing-${group.id}-title`} className={styles.pricingTitle}>{group.title}</h3>

      <div className={styles.tableWrapper}>
        <div
          className={`table-responsive ${styles.tableScroll}`}
          role="region"
          aria-labelledby={`pricing-${group.id}-title`}
          tabIndex={0}
        >
          <table className={styles.pricingTable} aria-labelledby={`pricing-${group.id}-title`}>
            <thead>
              <tr>
                <th scope="col">Tier</th>
                {group.categories.map((category) => (
                  <th key={category.id} scope="col">
                    {category.label}
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
                    <td key={group.categories[index].id}>{price}</td>
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
