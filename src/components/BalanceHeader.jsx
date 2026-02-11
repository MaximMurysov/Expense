import styles from "./styles.module.css";

function BalanceHeader({ total }) {
  return (
    <>
      <h2 className={styles["expense-title"]}>Expense tracker</h2>
      <div className={styles["expense-total__balance"]}>
        <h3>Your balance</h3>
        <p>$ {total.toFixed(2)}</p>
      </div>
    </>
  );
}
export default BalanceHeader;
