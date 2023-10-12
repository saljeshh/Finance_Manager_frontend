import React, { useState, useEffect } from "react";
import "./Invest.scss";
import { useAuth } from "../../context/auth-context";
import { useAxios } from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Invest = () => {
  const { token, logout } = useAuth();
  const [stocks, setStocks] = useState([]);
  const [sector, setSector] = useState("Commercial Bank");
  const [investable, setInvestable] = useState();
  // const [asc, setAsc] = useState(true);
  const axios = useAxios();
  const navigate = useNavigate();

  // if token then simply dont send to first initial value walal
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  // for stock fetch
  useEffect(() => {
    axios
      .get(`/api/stocks/?search=${sector}`)
      .then((res) => {
        console.log(stocks);
        setStocks(res.data ? res.data : []);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          logout();
          navigate("/login");
        }
      });
  }, [sector]);

  // for investable fetch
  useEffect(() => {
    axios
      .get("/api/accounts")
      .then((res) => {
        setInvestable(
          res.data.investable_balance ? res.data.investable_balance : 0
        );
      })
      .catch((error) => {
        if (error.response.status === 401) {
          logout();
          navigate("/login");
        }
      });
  }, []);

  const sectorChangeHandler = (e) => {
    setSector(e.target.value);
  };

  function selectionSortStocks(stocks, type) {
    let sortedStocks = [...stocks];
    const n = sortedStocks.length;
    const sortingState =
      sortedStocks[0][type] < sortedStocks[1][type] ? true : false;

    for (let i = 0; i < n - 1; i++) {
      let smallest_index = i;

      for (let j = i + 1; j < n; j++) {
        let shouldSwap = false;

        switch (type) {
          case "ltp":
            shouldSwap = sortingState
              ? sortedStocks[j].ltp > sortedStocks[smallest_index].ltp
              : sortedStocks[j].ltp < sortedStocks[smallest_index].ltp;
            break;
          case "pe":
            shouldSwap = sortingState
              ? sortedStocks[j].pe > sortedStocks[smallest_index].pe
              : sortedStocks[j].pe < sortedStocks[smallest_index].pe;
            break;
          case "pb":
            shouldSwap = sortingState
              ? sortedStocks[j].pb > sortedStocks[smallest_index].pb
              : sortedStocks[j].pb < sortedStocks[smallest_index].pb;
            break;
          case "roe":
            shouldSwap = sortingState
              ? sortedStocks[j].roe > sortedStocks[smallest_index].roe
              : sortedStocks[j].roe < sortedStocks[smallest_index].roe;
            break;
          case "roa":
            shouldSwap = sortingState
              ? sortedStocks[j].roa > sortedStocks[smallest_index].roa
              : sortedStocks[j].roa < sortedStocks[smallest_index].roa;
            break;
          case "quantity":
            shouldSwap = sortingState
              ? sortedStocks[j].quantity > sortedStocks[smallest_index].quantity
              : sortedStocks[j].quantity <
                sortedStocks[smallest_index].quantity;
            break;
          default:
            break;
        }

        if (shouldSwap) {
          smallest_index = j;
        }
      }

      // Swap sortedStocks using a single temporary variable
      if (smallest_index !== i) {
        const temp = sortedStocks[i];
        sortedStocks[i] = sortedStocks[smallest_index];
        sortedStocks[smallest_index] = temp;
      }
    }

    return sortedStocks;
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
                <th
                  onClick={(e) => {
                    e.preventDefault();
                    let newstock = selectionSortStocks(stocks, "ltp") || [];
                    setStocks(newstock);
                  }}
                >
                  LTP ⇅
                </th>
                <th>Sector</th>
                <th
                  onClick={(e) => {
                    e.preventDefault();
                    let newstock = selectionSortStocks(stocks, "pb") || [];
                    setStocks(newstock);
                  }}
                >
                  PB ⇅
                </th>
                <th
                  onClick={(e) => {
                    e.preventDefault();
                    let newstock = selectionSortStocks(stocks, "pe") || [];
                    setStocks(newstock);
                  }}
                >
                  PE ⇅
                </th>
                <th
                  onClick={(e) => {
                    e.preventDefault();
                    let newstock = selectionSortStocks(stocks, "roa") || [];
                    setStocks(newstock);
                  }}
                >
                  ROA ⇅
                </th>
                <th
                  onClick={(e) => {
                    e.preventDefault();
                    let newstock = selectionSortStocks(stocks, "roe") || [];
                    setStocks(newstock);
                  }}
                >
                  ROE ⇅
                </th>
                <th
                  onClick={(e) => {
                    e.preventDefault();
                    let newstock =
                      selectionSortStocks(stocks, "quantity") || [];
                    setStocks(newstock);
                  }}
                >
                  QUANTITY ⇅
                </th>
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
