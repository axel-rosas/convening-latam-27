import styles from "./DividerB.module.css";

const DividerB = () => {
  return (
    <div className={styles.divider}>
      <div className={styles.divider__border}></div>
      <div className={styles.divider__center}></div>
      <div className={styles.divider__border}></div>
    </div>
  );
};

export default DividerB;
