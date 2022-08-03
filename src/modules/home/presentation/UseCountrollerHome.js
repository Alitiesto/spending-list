import { useState, useContext, useEffect } from "react";
import { SpendingContext } from "../../../context/SpendingContextProvider";
import axios from "axios";
import { deleteData, editData } from "../services/api";

const UseCountrollerHome = () => {
  const spendings = useContext(SpendingContext);
  const [descriptionValue, setDescriptionValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [currencyValue, setCurrencyValue] = useState("USD");
  const [dateValue, setDateValue] = useState("");
  const [idValue, setIdValue] = useState("");
  const [filteredByCurrency, setFilteredByCurrency] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("ALL");
  const [sortvalue, setSortValue] = useState("");
  const [showSaveButton, setShowSaveButton] = useState(true);

  const descriptionValueHandler = (event) => {
    setDescriptionValue(event.target.value);
  };

  const priceValueHandler = (event) => {
    setPriceValue(event.target.value);
  };

  const currencyValueHandler = (event) => {
    setCurrencyValue(event.target.value);
  };

  useEffect(() => {
    setFilteredByCurrency(
      spendings.sort((a, b) => new Date(b.spent_at) - new Date(a.spent_at))
    );
  }, [spendings]);

  useEffect(() => {
    let result = [];
    if (selectedCurrency === "ALL") {
      result = spendings;
    } else {
      result = spendings.filter(
        (spending) => spending.currency === selectedCurrency
      );
    }
    setFilteredByCurrency(result);
  }, [selectedCurrency]);

  const filteredCurrencySelected = (currency) => {
    setSelectedCurrency(currency);
  };

  const sortHandler = (event) => {
    let result = [];
    const value = event.target.value;
    setSortValue(value);
    if (value === "date-ascending") {
      result = filteredByCurrency.sort(
        (a, b) => new Date(a.spent_at) - new Date(b.spent_at)
      );
    } else if (value === "date-descending") {
      result = filteredByCurrency.sort(
        (a, b) => new Date(b.spent_at) - new Date(a.spent_at)
      );
    } else if (value === "amount-ascending") {
      result = filteredByCurrency.sort((a, b) => a.amount - b.amount);
    } else if (value === "amount-descending") {
      result = filteredByCurrency.sort((a, b) => b.amount - a.amount);
    }
    setFilteredByCurrency(result);
  };

  const editHandler = (spending) => {
    setDescriptionValue(spending.description);
    setPriceValue(spending.amount);
    setCurrencyValue(spending.currency);
    setDateValue(spending.spent_at);
    setIdValue(spending.id);
    setShowSaveButton(false);
  };

  const submitEditSpending = (event) => {
    event.preventDefault();
    const data = {
      description: descriptionValue,
      amount: priceValue,
      spent_at: dateValue,
      currency: currencyValue,
      id: idValue,
    };
    if (!descriptionValue) {
      alert("Please fill description field!");
    } else if (!priceValue) {
      alert("Please fill amount field!");
    } else {
      editData(idValue, data).then(
        setDescriptionValue(""),
        setPriceValue(""),
        setCurrencyValue("USD"),
        setShowSaveButton(true)
      );
    }
  };

  const deleteHandler = (id) => {
    deleteData(id);
  };

  const submitSpending = (event) => {
    const today = new Date();
    const date = today.toISOString();
    const data = {
      description: descriptionValue,
      amount: priceValue,
      spent_at: date,
      currency: currencyValue,
    };
    event.preventDefault();
    if (!descriptionValue) {
      alert("Please fill description field!");
    } else if (!priceValue) {
      alert("Please fill amount field!");
    } else {
      axios({
        url: "https://polygence-spendtracker.herokuapp.com/spendings/",
        method: "post",
        data,
      })
        .then((response) => console.log("response", response))
        .then(
          setDescriptionValue(""),
          setPriceValue(""),
          setCurrencyValue("USD")
        );
    }
  };

  return {
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
    setFilteredByCurrency,
    filteredCurrencySelected,
    selectedCurrency,
    sortvalue,
    showSaveButton,
  };
};

export default UseCountrollerHome;
