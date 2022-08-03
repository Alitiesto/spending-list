import React from "react";
import AddSpending from "./components/AddSpending";
import styles from "./index.module.scss";
import UseCountrollerHome from "./UseCountrollerHome";
import FilterSpending from "./components/FilterSpending";
import SpendingCard from "./components/SpendingCard/index.js";
import Loading from "./components/Loading";


const HomeModule = () => {
  const {
    spendings,
    descriptionValue,
    descriptionValueHandler,
    priceValue,
    priceValueHandler,
    currencyValueHandler,
    submitSpending,
    filteredByCurrency,
    deleteHandler,
    editHandler,
    submitEditSpending,
    sortHandler,
    filteredCurrencySelected,
    selectedCurrency,
    sortvalue,
    showSaveButton,
  } = UseCountrollerHome();

  return (
    <div className={styles.spendinglist_wrapper}>
      <div className={styles.container}>
        <AddSpending
          {...{
            descriptionValueHandler,
            descriptionValue,
            priceValue,
            priceValueHandler,
            currencyValueHandler,
            submitSpending,
            submitEditSpending,
            showSaveButton,
          }}
        />

        <FilterSpending
          {...{
            filteredCurrencySelected,
            sortHandler,
            selectedCurrency,
            sortvalue,
          }}
        />
        {
          spendings.length > 0 ? 
          filteredByCurrency.map((spending) => (
            <SpendingCard
              key={spending.id}
              {...{ spending, deleteHandler, editHandler }}
            />
          ))
          :
          <Loading />
        }
        
      </div>
    </div>
  );
};

export default HomeModule;
