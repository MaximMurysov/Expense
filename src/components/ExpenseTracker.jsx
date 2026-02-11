import { useState } from "react";
import styles from "./styles.module.css";

function ExpenseTracker() {
  const [totalSum, setTotalSum] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [history, setHistory] = useState([]);

  return (
    <div className={styles.expense}>
      <div className={styles["expense-container"]}>
        <h2 className={styles["expense-title"]}>Expense tracker</h2>
        <div className={styles["expense-total__balance"]}>
          <h3>Your balance</h3>
          <p>$ {totalSum}</p>
        </div>
        <div className={styles["income-expense"]}>
          <div className={styles.income}>
            <h4>INCOME</h4>
            <p>$ {income}</p>
          </div>
          <div className={styles["expense-balance"]}>
            <h4>EXPENSE</h4>
            <p>$ {expense}</p>
          </div>
        </div>
        <div className={styles.history}>
          <h4>HISTORY</h4>
          {history.map((elem) => ({ elem }))}
        </div>
      </div>
    </div>
  );
}
export default ExpenseTracker;
