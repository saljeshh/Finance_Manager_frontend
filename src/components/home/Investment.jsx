import React from "react";
import Card from "../ui/Card";
import "./Investment.scss";

const Investment = () => {
  return (
    <section className="investment boxshadow">
      <div className="investment__upper">
        <h1>Investable Amount</h1>
      </div>
      <div className="investment__lower">
        <div className="investment__box boxshadow">
          <h3>Choose%</h3>
          <select
            className="investment__input"
            name="investamount"
            id="investamount"
          >
            <option value="10">10%</option>
            <option value="10">20%</option>
            <option value="10">30%</option>
            <option value="10">40%</option>
            <option value="10">50%</option>
            <option value="10">60%</option>
            <option value="10">70%</option>
          </select>
        </div>
        <div className="investment__box boxshadow">
          <h3>Bank</h3>
          <p>Rs 1000</p>
        </div>
      </div>
    </section>
  );
};

export default Investment;
