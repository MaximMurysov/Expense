import { useState } from "react";
import styles from "./styles.module.css";

function ExpenseTracker() {
  const [totalSum, setTotalSum] = useState(0);
  return (
    <div className={styles.expense}>
      <div className={styles["expense-container"]}>
        <h2 className={styles["expense-title"]}>Expense tracker</h2>
        <div className={styles["expense-balance"]}>
          <h3>Your balance</h3>
          <p>$ {totalSum}</p>
        </div>
      </div>
    </div>
  );
}
export default ExpenseTracker;
