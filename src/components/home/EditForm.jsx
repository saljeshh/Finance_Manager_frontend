import React, { useState } from "react";
import Button from "../ui/Button";
import "./ExpenseForm.scss";
import { useTransaction } from "../../context/transactionContext";

const EditForm = ({ binding, cancelHandler }) => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [account, setAccount] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const { editTransaction } = useTransaction();

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const accountChangeHandler = (e) => {
    setAccount(e.target.value);
  };

  const typeChangeHandler = (e) => {
    setType(e.target.value);
  };

  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const edithandler = (event) => {
    event.preventDefault();

    const data = {
      transaction_type: type,
      account_type: account,
      amount: amount,
      category: category,
      timestamp: new Date(date).toISOString(),
    };
    console.log("data", data);

    editTransaction(binding.id, data);

    setAccount("");
    setType("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form onSubmit={edithandler} className="boxshadow expenseform">
      <p className="expenseform__title">Edit Record</p>
      <div className="expenseform__row1">
        <input
          type="text"
          className="expenseform__input"
          placeholder="Enter amount.."
          required
          onChange={amountChangeHandler}
        />
        <input
          type="date"
          className="expenseform__input"
          placeholder="Enter date.."
          onChange={dateChangeHandler}
          required
        />
      </div>

      <section className="expenseform__selectors">
        {/* cash or bank */}
        <select
          name="type"
          id="type"
          className="expenseform__select"
          onChange={accountChangeHandler}
        >
          <option value="cash">Cash</option>
          <option value="bank">Bank</option>
        </select>

        <select
          name="type"
          id="type"
          className="expenseform__select"
          onChange={typeChangeHandler}
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
            onChange={categoryChangeHandler}
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
            onChange={categoryChangeHandler}
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

      <div className="expenseform__buttons">
        <Button type="submit" text="Edit Record" />
        <Button text="Cancel" onClick={cancelHandler} />
      </div>
    </form>
  );
};

export default EditForm;
