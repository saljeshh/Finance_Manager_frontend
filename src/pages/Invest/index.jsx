import React, { useState, useEffect } from "react";
import "./Invest.scss";
import stock from "../../data/stock";
import { useAuth } from "../../context/auth-context";
import Login from "../Login";
import { useAxios } from "../../hooks/useAxios";

const Invest = () => {
  const { token } = useAuth();
  const [stocks, setStocks] = useState([]);
  const [sector, setSector] = useState("Commercial Bank");
  const [investable, setInvestable] = useState();
  const axios = useAxios();

  // for stock fetch
  useEffect(() => {
    axios
      .get(`/api/stocks/?search=${sector}`)
      .then((res) => {
        setStocks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sector]);

  // for investable fetch
  useEffect(() => {
    axios
      .get("/api/accounts")
      .then((res) => {
        setInvestable(res.data.investable_balance);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sectorChangeHandler = (e) => {
    setSector(e.target.value);
  };

  if (!token) {
    window.location.href = "/login";
  }

  return (
    <section className="invest">
      <div className="invest__inv container boxshadow">
        <div className="invest__title">
          <h1>NEPSE Stocks Recommendation</h1>
        </div>
        <div className="invest__middle">
          <select
            className="invest__select"
            name="institution"
            id="institution"
            value={sector}
            onChange={sectorChangeHandler}
          >
            <option value="Commercial Bank">Commercial Bank</option>
            <option value="Finance">Finance</option>
            <option value="Development Bank">Development Bank</option>
            <option value="Life Insurance">Life Insurance</option>
            <option value="Non Life">Non Life Insurance</option>
            <option value="Microfinance">Microfinanace</option>
            <option value="Hydro Power">Hydropower</option>
            <option value="Hotels">Hotels</option>
            <option value="Investment">Investment</option>
            <option value="Tradings">Tradings</option>
            <option value="Manufacturing & Processing">
              Manufacturing & Processing
            </option>
            <option value="Others">Others</option>
          </select>
          <div className="invest__box boxshadow">
            <p>Investable Amount</p>
            <p>Rs {investable}</p>
          </div>
        </div>

        <div className="invest__tablecontainer boxshadow">
          <table className="invest__table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>LTP</th>
                <th>Sector</th>
                <th>PB</th>
                <th>PE</th>
                <th>ROA</th>
                <th>ROE</th>
                <th>QUANTITY PURCHASEABLE</th>
              </tr>
            </thead>

            <tbody>
              {stocks.map((stock) => (
                <tr key={stock.stock_id}>
                  <td>{stock.symbol}</td>
                  <td>{stock.ltp}</td>
                  <td>{stock.sector}</td>
                  <td>{stock.pb}</td>
                  <td>{stock.pe}</td>
                  <td>{stock.roa}</td>
                  <td>{stock.roe}</td>
                  <td>{stock.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Invest;
