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
import { useNavigate } from "react-router-dom";
import { useTransaction } from "../../context/transactionContext";

const Home = () => {
  const navigate = useNavigate();
  const axios = useAxios();
  const { token, logout } = useAuth();
  const { accData, getAccountData, transationss } = useTransaction();

  const [edit, isEdit] = useState(false);
  const [transaction, setTransaction] = useState([]);
  const [binding, setBinding] = useState({});

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    const getAccdata = async () => {
      const status = await getAccountData();

      if (status === 401) {
        navigate("/login");
      }
    };
    getAccdata();
  }, [transationss]);

  useEffect(() => {
    axios
      .get("/api/transactions")
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((e) => {
        if (e.response.status === 401) {
          logout();
          navigate("/login");
        }
      });
  }, [transationss]);

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

  return (
    <div className="home">
      <div className="home__upper container">
        <Accounts accdata={accData} />
        <TotalBalance accdata={accData} />
        <Investment accdata={accData} />
      </div>
      <div className="home__lower container">
        {!edit ? (
          <ExpenseForm />
        ) : (
          <EditForm binding={binding} cancelHandler={cancelHandler} />
        )}

        <ExpenseRecord editMode={editHandler} record={transaction} />
      </div>
    </div>
  );
};

export default Home;
