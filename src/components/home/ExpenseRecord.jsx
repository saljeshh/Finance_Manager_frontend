import React from "react";
import "./ExpenseRecord.scss";
import Button from "../ui/Button";
import Record from "../ui/Record";

const ExpenseRecord = ({ record, editMode }) => {
  return (
    <div className="boxshadow expenserecord">
      <p className="expenserecord__title">Records</p>
      <div className="expenserecord__filters">
        <Button text="This Week" />
        <Button text="This Year" />
        <Button text="All Records" />
      </div>
      <div className="expenserecord__records">
        {record.map((transaction) => (
          <Record
            key={transaction.transaction_id}
            id={transaction.transaction_id}
            category={transaction.category}
            account_type={transaction.account_type}
            amount={transaction.amount}
            editMode={editMode}
            transaction_type={transaction.transaction_type}
            date={transaction.timestamp.toLocaleString()}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseRecord;
