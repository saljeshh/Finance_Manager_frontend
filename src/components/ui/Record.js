import React from "react";
import Card from "./Card";
import edit from "../../assets/icons/edit.png";
import del from "../../assets/icons/delete.png";
import "./Record.scss";

const Record = () => {
  return (
    <Card>
      <div className="record">
        <div className="record__left">
          <p>Salary and Allowance</p>
          <p>Cash</p>
        </div>
        <div className="record__right">
          <div className="record__modify">
            <img src={edit} alt="Edit" />
            <img src={del} alt="Delete" />
          </div>
          <div className="record__detail">
            <p>+ Rs. 50,000</p>
            <p>7 July 2023</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Record;
