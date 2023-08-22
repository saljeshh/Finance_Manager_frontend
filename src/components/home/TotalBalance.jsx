import React from "react";
import "./TotalBalance.scss";
import Card from "../ui/Card";
import "./TotalBalance.scss";
import pie from "../../assets/icons/pie.png";

const TotalBalance = () => {
  return (
    <section className="totalbalance boxshadow">
      <div className="totalbalance__left">
        <div className="totalbalance__upper">
          <h1>Total Balance</h1>
        </div>
        <div className="totalbalance__lower">
          <div className="totalbalance__box boxshadow">
            <h3>Total</h3>
            <p>Rs 2000</p>
          </div>
        </div>
      </div>
      <div className="totalbalance__right">
        <img src={pie} alt="" />
      </div>
    </section>
  );
};

export default TotalBalance;
