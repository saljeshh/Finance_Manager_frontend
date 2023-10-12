import React, { useState } from "react";
import "../home/InitializeValues.scss";
import { useAxios } from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const InitializeValues = () => {
  const [cash, setCash] = useState();
  const [bank, setBank] = useState();
  const [invetablePercent, setInvetablePercent] = useState();
  const axios = useAxios();
  const navigate = useNavigate();

  const initHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/investable", {
        investable_percent: invetablePercent,
      })
      .then((res) => res.data)
      .catch((err) => err);

    await axios
      .post("/api/accounts", {
        cash: cash,
        bank: bank,
      })
      .then((res) => res.data)
      .catch((err) => err);

    setCash("");
    setBank("");
    setInvetablePercent("");

    navigate("/home");
  };

  const alreadyHandler = () => {
    navigate("/home");
  };

  return (
    <div className="initialize boxshadow">
      <h1 className="initialize__title">Please Set Default Values</h1>
      <form onSubmit={initHandler}>
        <div className="initialize__row">
          <div className="initialize__box">
            <label htmlFor="cash" className="initialize__label">
              Initial Cash Balance
            </label>
            <input
              type="number"
              className="initialize__input"
              id="cash"
              placeholder="Cash"
              onChange={(e) => setCash(e.target.value)}
            />
          </div>
          <div className="initialize__box">
            <label htmlFor="bank" className="initialize__label">
              Initial Bank Balance
            </label>
            <input
              type="number"
              className="initialize__input"
              id="bank"
              placeholder="Bank"
              onChange={(e) => setBank(e.target.value)}
            />
          </div>
          <div className="initialize__box">
            <label htmlFor="investable" className="initialize__label">
              Initial Investable Percentage
            </label>
            <input
              type="number"
              className="initialize__input"
              id="investable"
              placeholder="Investable Percnet"
              onChange={(e) => setInvetablePercent(e.target.value)}
            />
          </div>
        </div>

        <div className="initialize__btns">
          <button type="submit" className="initialize__button">
            Add Initial Values
          </button>
          <button onClick={alreadyHandler} className="initialize__button">
            Already Set Initial Values
          </button>
        </div>
      </form>
    </div>
  );
};

export default InitializeValues;
