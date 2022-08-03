import React from "react";
import styles from "./index.module.scss";

const AddSpending = ({
  descriptionValue,
  descriptionValueHandler,
  priceValue,
  priceValueHandler,
  currencyValueHandler,
  submitSpending,
  submitEditSpending,
  showSaveButton,
}) => {
  return (
    <div className={styles.form_wrapper}>
      <form>
        <input
          type="text"
          placeholder="Description"
          className={styles.description_input}
          value={descriptionValue}
          onChange={descriptionValueHandler}
        />
        <input
          type="number"
          placeholder="0"
          className={styles.currency_input}
          value={priceValue}
          onChange={priceValueHandler}
        />
        <div className={styles.select_wrapper}>
          <select name="currency" onChange={currencyValueHandler}>
            <option value="USD">USD</option>
            <option value="HUF">HUF</option>
          </select>
        </div>
        {showSaveButton ? (
          <button className={styles.save_btn} onClick={submitSpending}>
            Save
          </button>
        ) : (
          <button className={styles.save_edit_btn} onClick={submitEditSpending}>
            Save Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default AddSpending;
