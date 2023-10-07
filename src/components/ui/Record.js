import React from "react";
import Card from "./Card";
import edits from "../../assets/icons/edit.png";
import del from "../../assets/icons/delete.png";
import "./Record.scss";
import { useAxios } from "../../hooks/useAxios";

const Record = ({
  category,
  account_type,
  amount,
  date,
  editMode,
  transaction_type,
  id,
}) => {
  const axios = useAxios();
  const bindingHandler = () => {
    editMode(amount, transaction_type, category, account_type, date, id);
  };

  const deleteItemHandler = (transaction_id) => {
    axios
      .delete(`/api/transactions/${transaction_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Card>
      <div className="record">
        <div className="record__left">
          <p>{category}</p>
          <p>{account_type}</p>
        </div>
        <div className="record__right">
          <div className="record__modify">
            <img src={edits} alt="Edit" onClick={bindingHandler} />
            <img src={del} alt="Delete" onClick={() => deleteItemHandler(id)} />
          </div>
          {transaction_type === "income" ? (
            <div className="record__detail">
              <p className="record__green">+ Rs. {amount}</p>
              <p>{date}</p>
            </div>
          ) : (
            <div className="record__detail">
              <p className="record__red">- Rs. {amount}</p>
              <p>{date}</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Record;
