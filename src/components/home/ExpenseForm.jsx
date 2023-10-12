import React, { useState } from "react";
import Button from "../ui/Button";
import "./ExpenseForm.scss";
import { useTransaction } from "../../context/transactionContext";

const ExpenseForm = () => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [account, setAccount] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const { createTransaction } = useTransaction();

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      transaction_type: type,
      account_type: account,
      amount: amount,
      category: category,
      timestamp: new Date(date),
    };

    if (
      type == "" ||
      account == "" ||
      category == "" ||
      date == "" ||
      amount == ""
    ) {
      console.log(data);
      console.log("Error : fields cannt be empty");
    } else {
      console.log(data);
      createTransaction(data);

      setAccount("");
      setType("");
      setCategory("");
      setDate("");
      setAmount("");
    }
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
          value={amount}
        />
        <input
          type="date"
          className="expenseform__input"
          placeholder="Enter date.."
          onChange={(e) => setDate(e.target.value)}
          required
          value={date}
        />
      </div>

      <section className="expenseform__selectors">
        {/* cash or bank */}
        <select
          name="account"
          id="account"
          className="expenseform__select"
          onChange={(e) => setAccount(e.target.value)}
          value={account}
          required
        >
          <option value="cash">Cash</option>
          <option value="bank">Bank</option>
        </select>

        {/* Income or expense */}
        <select
          name="type"
          id="type"
          className="expenseform__select"
          onChange={(e) => setType(e.target.value)}
          required
          value={type}
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
            onChange={(e) => setCategory(e.target.value)}
            required
            value={category}
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
            onChange={(e) => setCategory(e.target.value)}
            required
            value={category}
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
