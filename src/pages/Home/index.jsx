import React, { useEffect, useState } from "react";
import "./Home.scss";
import ExpenseForm from "../../components/home/ExpenseForm";
import ExpenseRecord from "../../components/home/ExpenseRecord";
import Accounts from "../../components/home/Accounts";
import TotalBalance from "../../components/home/TotalBalance";
import Investment from "../../components/home/Investment";
import EditForm from "../../components/home/EditForm";
import { useAuth } from "../../context/auth-context";
import { useAxios } from "../../hooks/useAxios";

const Home = () => {
  const axios = useAxios();
  const { token } = useAuth();
  const [accdata, setAccdata] = useState("");

  const [edit, isEdit] = useState(false);
  const [transaction, setTransaction] = useState([]);
  const [binding, setBinding] = useState({});
  const [rerun, setRerun] = useState();

  const rerunHandler = (depends) => {
    setRerun(depends);
  };

  useEffect(() => {
    axios
      .get("/api/accounts")
      .then((res) => {
        setAccdata(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [rerun]);

  useEffect(() => {
    axios
      .get("/api/transactions")
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  // for two way binding for editing
  const editHandler = (amt, transType, category, accType, date, id) => {
    const data = {
      id: id,
      amount: amt,
      transaction_type: transType,
      category: category,
      account_type: accType,
      date: new Date(date).toISOString().split("T")[0],
    };
    setBinding(data);
    isEdit(!edit);
  };

  // function for cancel edit
  const cancelHandler = () => {
    isEdit(false);
  };

  // if not authenticated return to login page

  if (!token) {
    window.location.href = "/login";
  }

  return (
    <div className="home">
      <div className="home__upper container">
        <Accounts accdata={accdata} />
        <TotalBalance accdata={accdata} />
        <Investment accdata={accdata} rerun={rerunHandler} />
      </div>
      <div className="home__lower container">
        {!edit ? (
          <ExpenseForm rerun={rerunHandler} />
        ) : (
          <EditForm binding={binding} cancelHandler={cancelHandler} />
        )}

        <ExpenseRecord editMode={editHandler} record={transaction} />
      </div>
    </div>
  );
};

export default Home;
