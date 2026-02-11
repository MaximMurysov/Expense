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
          <h4 className={styles["history-title"]}>History</h4>
          {history.map((elem) => ({ elem }))}
        </div>
        <div className={styles["add-transaction"]}>
          <h4 className={styles["transaction-title"]}>Add new transaction</h4>
          <div className={styles["transaction-category__container"]}>
            <div className={styles["transaction-category"]}>
              <p>Expense Category</p>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles["transaction-category"]}>
              <p>Amount</p>
              <input className={styles.input} type="text" />
            </div>
          </div>
        </div>
        <button className={styles["add-transaction__btn"]}>
          Add transaction
        </button>
      </div>
    </div>
  );
}
export default ExpenseTracker;
