import React, { useState } from "react";
import Button from "../ui/Button";
import "./ExpenseForm.scss";

const ExpenseForm = () => {
  const [type, setType] = useState("income");
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="boxshadow expenseform">
      <p className="expenseform__title">Income/Expense Tracking</p>
      <div className="expenseform__row1">
        <input
          type="text"
          className="expenseform__input"
          placeholder="Enter amount.."
        />
        <input
          type="date"
          className="expenseform__input"
          placeholder="Enter amount.."
        />
      </div>

      <section className="expenseform__selectors">
        {/* cash or bank */}
        <select name="type" id="type" className="expenseform__select">
          <option value="" disabled selected hidden>
            Account -
          </option>
          <option value="cash">Cash</option>
          <option value="bank">Bank</option>
        </select>
        {/* Income or expense */}
        <select name="type" id="type" className="expenseform__select">
          <option value="" disabled selected hidden>
            Type -
          </option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        {/* category acc to income/expnese */}
        {type == "income" ? (
          <select name="income" id="income" className="expenseform__select">
            <option value="" disabled selected hidden>
              Category -
            </option>
            <option value="salary">Salary and Allowance</option>
            <option value="pocketmoney">Pocket Money</option>
            <option value="trading">Stock Trading Profit</option>
            <option value="sellstock">Stock sold on Profit</option>
          </select>
        ) : (
          <select name="expense" id="expense" className="expenseform__select">
            <option value="" disabled selected hidden>
              Category -
            </option>
            <option value="food">Food & Restro.</option>
            <option value="investment">Investment</option>
            <option value="businessloss">Loss in Business</option>
            <option value="grocessories">Grocessories</option>
          </select>
        )}
      </section>

      {isEdit ? <Button text="Edit Record" /> : <Button text="Add Record" />}
    </div>
  );
};

export default ExpenseForm;
