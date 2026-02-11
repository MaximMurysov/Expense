import styles from "./styles.module.css";

function IncomeExpense({ positiveSum, negativeSum }) {
  return (
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
  );
}
export default IncomeExpense;
