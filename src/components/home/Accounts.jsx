import React from "react";
import "./Accounts.scss";
import edit from "../../assets/icons/edit.png";

const Accounts = () => {
  return (
    <section className="accounts boxshadow">
      <div className="accounts__upper">
        <h1>Accounts</h1>
        <img src={edit} alt="" width="15px" />
      </div>
      <div className="accounts__lower">
        <div className="accounts__box boxshadow">
          <h3>Cash</h3>
          <p>Rs 1000</p>
        </div>
        <div className="accounts__box boxshadow">
          <h3>Bank</h3>
          <p>Rs 1000</p>
        </div>
      </div>
    </section>
  );
};

export default Accounts;
