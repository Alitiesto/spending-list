import React from "react";
import styles from "./index.module.scss";

const FilterSpending = ({
  filteredCurrencySelected,
  sortHandler,
  selectedCurrency,
  sortvalue,
}) => {
  return (
    <div className={styles.filter_wrapper}>
      <div className={styles.sort_wrapper}>
        <select name="sort" onChange={sortHandler} value={sortvalue}>
          <option value="date-descending">Sort By Date Descending</option>
          <option value="date-ascending">Sort By Date Ascending</option>
          <option value="amount-descending">Sort By Amount Descending</option>
          <option value="amount-ascending">Sort By Amount Ascending</option>
        </select>
      </div>
      <div className={styles.currency_filter_wrapper}>
        <ul className={styles.currency_filter_list}>
          <li className={styles.currency_filter_item}>
            <button
              className={`${
                selectedCurrency === "ALL" ? `${styles.active}` : ""
              }`}
              onClick={() => filteredCurrencySelected("ALL")}
              value="ALL"
            >
              ALL
            </button>
          </li>
          <li className={styles.currency_filter_item}>
            <button
              className={`${
                selectedCurrency === "HUF" ? `${styles.active}` : ""
              }`}
              onClick={() => filteredCurrencySelected("HUF")}
              value="HUF"
            >
              HUF
            </button>
          </li>
          <li className={styles.currency_filter_item}>
            <button
              className={`${
                selectedCurrency === "USD" ? `${styles.active}` : ""
              }`}
              onClick={() => filteredCurrencySelected("USD")}
              value="USD"
            >
              USD
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterSpending;
