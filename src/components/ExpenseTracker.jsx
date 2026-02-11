import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import HistoryTransaction from "./HistoryTransaction";
import BalanceHeader from "./BalanceHeader";
import IncomeExpense from "./IncomeExpense";
import AddTransaction from "./AddTransaction";

function ExpenseTracker() {
  const [form, setForm] = useState({
    name: "",
    amount: "",
  });
  const [history, setHistory] = useState([]);
  const addTransaction = () => {
    if (!form.name || !form.amount) return;
    const newTransaction = {
      id: crypto.randomUUID(),
      name: form.name,
      amount: Number(form.amount),
    };
    setHistory([newTransaction, ...history]);
    setForm({
      name: "",
      amount: "",
    });
  };
  useEffect(() => {
    const saved = localStorage.getItem("history");
    if (saved && saved !== "[]") {
      setHistory(JSON.parse(saved));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);
  const positiveSum = history.reduce(
    (acc, income) => (income.amount > 0 ? acc + income.amount : acc),
    0,
  );
  const negativeSum = history.reduce(
    (acc, expense) =>
      expense.amount < 0 ? acc + Math.abs(expense.amount) : acc,
    0,
  );
  const total = positiveSum - negativeSum;
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addTransaction();
    }
  };
  const deleteTransaction = (id) => {
    setHistory(history.filter((elem) => elem.id !== id));
  };
  const clearTransaction = () => {
    setHistory([]);
  };
  return (
    <div className={styles.expense}>
      <div className={styles["expense-container"]}>
        <BalanceHeader total={total} />
        <IncomeExpense positiveSum={positiveSum} negativeSum={negativeSum} />
        <HistoryTransaction
          deleteTransaction={deleteTransaction}
          history={history}
        />
        <AddTransaction
          form={form}
          handleEnter={handleEnter}
          setForm={setForm}
        />
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
      </div>
    </div>
  );
}
export default ExpenseTracker;
