import React from "react";
import "./Home.scss";
import ExpenseForm from "../../components/home/ExpenseForm";
import ExpenseRecord from "../../components/home/ExpenseRecord";
import Accounts from "../../components/home/Accounts";
import TotalBalance from "../../components/home/TotalBalance";
import Investment from "../../components/home/Investment";

const Home = () => {
  return (
    <div className="home">
      <div className="home__upper container">
        <Accounts />
        <TotalBalance />
        <Investment />
      </div>
      <div className="home__lower container">
        <ExpenseForm />
        <ExpenseRecord />
      </div>
    </div>
  );
};

export default Home;
