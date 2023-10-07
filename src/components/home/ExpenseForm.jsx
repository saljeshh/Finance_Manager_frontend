import React, { useState } from "react";
import Button from "../ui/Button";
import "./ExpenseForm.scss";
import { useAxios } from "../../hooks/useAxios";

const ExpenseForm = () => {
  // for form data
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [account, setAccount] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const axios = useAxios();

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      transaction_type: type,
      account_type: account,
      amount: amount,
      category: category,
      timestamp: new Date(date),
    };

    axios
      .post("/api/transactions", data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));

    setAccount("");
    setType("");
    setCategory("");
    setDate("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler} className="boxshadow expenseform">
      <p className="expenseform__title">Income/Expense Tracking</p>
      <div className="expenseform__row1">
        <input
          type="text"
          className="expenseform__input"
          placeholder="Enter amount.."
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="date"
          className="expenseform__input"
          placeholder="Enter date.."
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <section className="expenseform__selectors">
        {/* cash or bank */}
        <select
          name="account"
          id="account"
          className="expenseform__select"
          onClick={(e) => setAccount(e.target.value)}
          defaultValue="cash"
        >
          <option value="cash">Cash</option>
          <option value="bank">Bank</option>
        </select>

        {/* Income or expense */}
        <select
          name="type"
          id="type"
          className="expenseform__select"
          onClick={(e) => setType(e.target.value)}
          defaultValue="income"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        {/* category acc to income/expnese */}
        {type === "income" ? (
          <select
            name="income"
            id="income"
            className="expenseform__select"
            onClick={(e) => setCategory(e.target.value)}
          >
            <option value="Salary">Salary</option>
            <option value="Pocket Money">Pocket Money</option>
            <option value="Stock Profit">Stock Profit</option>
            <option value="Rental Income">Rental Income</option>
            <option value="Online Business">Online Business</option>
            <option value="Interest or Dividends">Interest or Dividends</option>
            <option value="Gifts or Grants">Gifts or Grants</option>
          </select>
        ) : (
          <select
            name="expense"
            id="expense"
            className="expenseform__select"
            onClick={(e) => setCategory(e.target.value)}
            required
          >
            <option value="Food and Cafe">Food and Cafe</option>
            <option value="Investment">Investment</option>
            <option value="Loss in Business">Loss in Business</option>
            <option value="Grocessories">Grocessories</option>
            <option value="Rent">Rent</option>
            <option value="Fuel">Fuel</option>
            <option value="Travelling">Travelling</option>
            <option value="Electronics Gadgets">Electronics Gadgets</option>
          </select>
        )}
      </section>

      <Button type="submit" text="Add Record" />
    </form>
  );
};

export default ExpenseForm;
