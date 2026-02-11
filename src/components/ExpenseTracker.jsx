import { useState } from "react";
import styles from "./styles.module.css";

function ExpenseTracker() {
  const [totalSum, setTotalSum] = useState(0);
  const [form, setForm] = useState({
    name: "",
    amount: "",
  });
  const [history, setHistory] = useState([]);
  const addTransaction = () => {
    const newTransaction = {
      id: crypto.randomUUID(),
      transactionName: form.name,
      sum: Number(form.amount),
    };
    setHistory([newTransaction, ...history]);
    setForm({
      name: "",
      amount: "",
    });
  };
  const positiveSum = history.reduce(
    (acc, income) => (income.sum > 0 ? (acc += income.sum) : acc),
    0,
  );
  const negativeSum = history.reduce(
    (acc, expense) => (expense.sum < 0 ? (acc += Math.abs(expense.sum)) : acc),
    0,
  );
  const totalZ = positiveSum - negativeSum;
  return (
    <div className={styles.expense}>
      <div className={styles["expense-container"]}>
        <h2 className={styles["expense-title"]}>Expense tracker</h2>
        <div className={styles["expense-total__balance"]}>
          <h3>Your balance</h3>
          <p>$ {totalZ}</p>
        </div>
        <div className={styles["income-expense"]}>
          <div className={styles.income}>
            <h4>INCOME</h4>
            <p>$ {positiveSum.toFixed(2)}</p>
          </div>
          <div className={styles["expense-balance"]}>
            <h4>EXPENSE</h4>
            <p>$ {negativeSum.toFixed(2)}</p>
          </div>
        </div>
        <div className={styles.history}>
          <h4 className={styles["history-title"]}>History</h4>
          {history.map((elem) => (
            <div key={elem.id}>
              <p>{elem.transactionName}</p>
              <p>{elem.sum}</p>
            </div>
          ))}
        </div>
        <div className={styles["add-transaction"]}>
          <h4 className={styles["transaction-title"]}>Add new transaction</h4>
          <div className={styles["transaction-category__container"]}>
            <div className={styles["transaction-category"]}>
              <p>Expense Category</p>
              <input
                className={styles.input}
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className={styles["transaction-category"]}>
              <p>Amount</p>
              <input
                className={styles.input}
                type="text"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
              />
            </div>
          </div>
        </div>
        <button
          className={styles["add-transaction__btn"]}
          onClick={addTransaction}
        >
          Add transaction
        </button>
      </div>
    </div>
  );
}
export default ExpenseTracker;
