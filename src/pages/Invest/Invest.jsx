import React from "react";
import "./Invest.scss";
import stock from "../../data/stock";

const Invest = () => {
  console.log(stock);
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
          >
            <option value="banking">Commercial Bank</option>
            <option value="finance">Finance</option>
            <option value="development">Development Bank</option>
            <option value="lifeinsurance">Life Insurance</option>
            <option value="nonlifeinsurance">Non Life Insurance</option>
            <option value="microfinance">Microfinanace</option>
            <option value="hydropower">Hydropower</option>
            <option value="manufacturing">Manufacturing & Processing</option>
            <option value="others">others</option>
          </select>
          <div className="invest__box boxshadow">
            <p>Investable Amount</p>
            <p>Rs 20,000</p>
          </div>
        </div>
        <div className="invest__tablecontainer boxshadow">
          <table className="invest__table">
            <thead>
              <tr>
                <th>S.N</th>
                <th>STOCK</th>
                <th>LTP</th>
                <th>EPS</th>
                <th>PE</th>
                <th>BOOK VALUE</th>
                <th>QUANTITY PURCHASEABLE</th>
              </tr>
            </thead>

            <tbody>
              {stock.map((stock) => (
                <tr key={stock.id}>
                  <td>{stock.id}</td>
                  <td>{stock.stock}</td>
                  <td>{stock.ltp}</td>
                  <td>{stock.eps}</td>
                  <td>{stock.pe}</td>
                  <td>{stock.bookvalue}</td>
                  <td>{stock.purchaseable}</td>
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
