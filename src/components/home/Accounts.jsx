import React, { useState } from "react";
import "./Accounts.scss";
import edit from "../../assets/icons/edit.png";
import AccountModal from "./AccountModal";

const Accounts = ({ accdata }) => {
  const [isEdit, setIsEdit] = useState(false);
  // Check if accdata is undefined before accessing its properties
  if (!accdata) {
    accdata = {
      cash_balance: 0,
      bank_balance: 0,
    };
  }

  const editHandler = () => {
    setIsEdit(!isEdit);
    console.log(isEdit);
  };

  return (
    <section className="accounts boxshadow">
      <div className="accounts__upper">
        <h1>Accounts</h1>
        <img src={edit} alt="" width="15px" onClick={editHandler} />
      </div>
      {isEdit ? (
        <AccountModal />
      ) : (
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
      )}
    </section>
  );
};

export default Accounts;
