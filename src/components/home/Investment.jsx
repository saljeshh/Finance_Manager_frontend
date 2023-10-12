import React, { useState, useEffect } from "react";
import "./Investment.scss";
import { useAxios } from "../../hooks/useAxios";
import { useTransaction } from "../../context/transactionContext";

const Investment = ({ accdata }) => {
  const { transationss, investablepercnetChange } = useTransaction();

  if (!accdata) {
    accdata = {
      investable_balance: 0,
    };
  }
  const axios = useAxios();

  const [current, setCurrent] = useState();

  useEffect(() => {
    axios
      .get("/api/investable")
      .then((res) => {
        setCurrent(res.data.investable_percent);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [transationss]);

  const investablepercnetChangeHandler = (e) => {
    setCurrent(e.target.value);
    axios
      .put("/api/investable", {
        investable_percent: e.target.value,
      })
      .then((res) => {
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .put("/api/accounts", {
        cash: accdata.cash_balance,
        bank: accdata.bank_balance,
      })
      .then((res) => {
        //console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    investablepercnetChange();
  };

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
            value={current}
            onChange={investablepercnetChangeHandler}
          >
            <option value="10">10%</option>
            <option value="20">20%</option>
            <option value="30">30%</option>
            <option value="40">40%</option>
            <option value="50">50%</option>
            <option value="60">60%</option>
            <option value="70">70%</option>
          </select>
        </div>
        <div className="investment__box boxshadow">
          <h3>Amount</h3>
          <p>
            Rs {accdata.investable_balance ? accdata.investable_balance : 0}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Investment;
