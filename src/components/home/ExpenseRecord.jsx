import React from "react";
import "./ExpenseRecord.scss";
import Button from "../ui/Button";
import Record from "../ui/Record";

const ExpenseRecord = () => {
  return (
    <div className="boxshadow expenserecord">
      <p className="expenserecord__title">Records</p>
      <div className="expenserecord__filters">
        <Button text="This Week" />
        <Button text="This Year" />
        <Button text="All Records" />
      </div>
      <div className="expenserecord__records">
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
      </div>
    </div>
  );
};

export default ExpenseRecord;
