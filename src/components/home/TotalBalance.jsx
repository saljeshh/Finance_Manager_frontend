import React from "react";
import "./TotalBalance.scss";
import { TotalPieChart } from "../chart/TotalPieChart";

const TotalBalance = ({ accdata }) => {
  if (!accdata) {
    accdata = {
      total_balance: 0,
    };
  }
  return (
    <section className="totalbalance boxshadow">
      <div className="totalbalance__left">
        <div className="totalbalance__upper">
          <h1>Total Balance</h1>
        </div>
        <div className="totalbalance__lower">
          <div className="totalbalance__box boxshadow">
            <h3>Total</h3>
            <p>Rs {accdata.total_balance ? accdata.total_balance : 0}</p>
          </div>
        </div>
      </div>
      <div className="totalbalance__right">
        <TotalPieChart data={accdata} />
      </div>
    </section>
  );
};

export default TotalBalance;
