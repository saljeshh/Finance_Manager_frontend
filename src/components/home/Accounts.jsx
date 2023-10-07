import React from "react";
import "./Accounts.scss";
import edit from "../../assets/icons/edit.png";

const Accounts = ({ accdata }) => {
  // Check if accdata is undefined before accessing its properties
  if (!accdata) {
    accdata = {
      cash_balance: 0,
      bank_balance: 0,
    };
  }

  return (
    <section className="accounts boxshadow">
      <div className="accounts__upper">
        <h1>Accounts</h1>
        <img src={edit} alt="" width="15px" />
      </div>
      <div className="accounts__lower">
        <div className="accounts__box boxshadow">
          <h3>Cash</h3>
          <p>Rs {accdata.cash_balance ? accdata.cash_balance : 0}</p>
        </div>
        <div className="accounts__box boxshadow">
          <h3>Bank</h3>
          <p>Rs {accdata.bank_balance ? accdata.bank_balance : 0}</p>
        </div>
      </div>
    </section>
  );
};

export default Accounts;
