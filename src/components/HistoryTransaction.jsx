import styles from "./styles.module.css";
import { MdDelete } from "react-icons/md";
function HistoryTransaction({ history, deleteTransaction }) {
  return (
    <div className={styles.history}>
      <h4 className={styles["history-title"]}>History</h4>
      {history.map((elem) => (
        <div
          key={elem.id}
          style={{
            borderRight: elem.amount > 0 ? "4px green solid" : "4px red solid",
          }}
          className={styles["elem-transactions"]}
        >
          <p className={styles["elem-name"]}>{elem.name}</p>
          <div className={styles.sum}>
            <p className={styles["elem-amount"]}>{elem.amount}</p>
            <p
              className={styles["elem-delete"]}
              onClick={() => deleteTransaction(elem.id)}
            >
              <MdDelete />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default HistoryTransaction;
