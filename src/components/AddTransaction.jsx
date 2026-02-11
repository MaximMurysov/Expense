import styles from "./styles.module.css";

function AddTransaction({ form, handleEnter, setForm }) {
  return (
    <div className={styles["add-transaction"]}>
      <h4 className={styles["transaction-title"]}>Add new transaction</h4>
      <div className={styles["transaction-category__container"]}>
        <div className={styles["transaction-category"]}>
          <p>Expense Category</p>
          <input
            className={styles.input}
            type="text"
            value={form.name}
            onKeyDown={handleEnter}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className={styles["transaction-category"]}>
          <p>Amount</p>
          <input
            className={styles.input}
            type="text"
            value={form.amount}
            onKeyDown={handleEnter}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}
export default AddTransaction;
