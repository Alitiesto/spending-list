import React from "react";
// import "./index.css";
import styles from "./index.module.scss";
import dollar from "./dollar.png";
import forint from "./forint.png";
import edit from "./edit.png";
import remove from "./delete.png";

const SpendingCard = ({ spending, deleteHandler, editHandler }) => {
  return (
    <div className={styles.spending_card_wrapper}>
      <div className={styles.currency_logo}>
        <img
          src={spending.currency === "USD" ? `${dollar}` : `${forint}`}
          alt="currency-sign"
        />
      </div>
      <div className={styles.spending_details}>
        <div className={styles.spending_description}>
          <h4>{spending.description}</h4>
        </div>
        <div className={styles.spending_time}>
          <p>{spending.spent_at}</p>
        </div>
      </div>
      <div className={styles.spending_price}>
        <p>{spending.amount}</p>
      </div>
      <div className={styles.spending_btns}>
        <button
          className={styles.edit_spending}
          onClick={(e) => editHandler(spending)}
        >
          <img src={edit} alt="edit-spending" />
        </button>
        <button
          className={styles.delete_spending}
          onClick={(e) => deleteHandler(spending.id)}
        >
          <img src={remove} alt="remove-spending" />
        </button>
      </div>
    </div>
  );
};

export default SpendingCard;
