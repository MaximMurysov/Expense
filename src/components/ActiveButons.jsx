import styles from "./styles.module.css";

function ActiveButons({ addTransaction, clearTransaction }) {
  return (
    <>
      <button
        className={styles["add-transaction__btn"]}
        onClick={addTransaction}
      >
        Add transaction
      </button>
      <button
        className={styles["clear-transaction__btn"]}
        onClick={clearTransaction}
      >
        Clear transaction
      </button>
    </>
  );
}
export default ActiveButons;
