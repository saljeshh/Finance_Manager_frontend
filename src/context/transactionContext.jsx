// auth-context.js

import React, { createContext, useContext, useState } from "react";
import { useAxios } from "../hooks/useAxios";

const TransactionContext = createContext();

export const TransactionContextProvider = (props) => {
  const axios = useAxios();
  const [accData, setAccData] = useState({
    total_balance: 0,
    user_id: 0,
    cash_balance: 0,
    bank_balance: 0,
    account_id: 0,
    investable_balance: 0,
  });
  const [transationss, setTransaction] = useState(false);

  const getAccountData = async () => {
    try {
      const response = await axios.get("/api/accounts");
      const data = response.data;

      setAccData(data);
      return response.status;

      // axios
      //   .get("/api/accounts")
      //   .then((res) => {
      //     setAccdata(res.data);
      //   })
      //   .catch((error) => {
      //     if (error.response.status === 401) {
      //       logout();
      //       navigate("/login");
      //     }
      //   });
    } catch (error) {
      return error.response.status;
    }
  };

  const createTransaction = async (form) => {
    try {
      const response = await axios.post("/api/transactions", form);
      const data = response.data;

      setTransaction(!transationss);
      console.log(data);
      return response.status;
    } catch (error) {
      return error.response.status;
    }
  };

  const editTransaction = async (id, payload) => {
    try {
      const response = await axios.put(`/api/transactions/${id}`, payload);
      const data = response.data;
      setTransaction(!transationss);
      console.log(data);
      return response.status;
    } catch (error) {
      return error.response.status;
    }
  };

  const deleteTransaction = async (transaction_id) => {
    try {
      const response = await axios.delete(
        `/api/transactions/${transaction_id}`
      );
      const data = response.data;
      setTransaction(!transationss);
      console.log(data);
      return response.status;
    } catch (error) {
      return error.response.status;
    }
  };

  const editAccounts = async (payload) => {
    try {
      const response = await axios.put(`/api/accounts`, payload);
      const data = response.data;
      setTransaction(!transationss);
      console.log(data);
      return response.status;
    } catch (error) {
      return error.response.status;
    }
  };

  const investablepercnetChange = async () => {
    setTransaction(!transationss);
  };

  return (
    <TransactionContext.Provider
      value={{
        accData,
        getAccountData,
        createTransaction,
        transationss,
        editTransaction,
        deleteTransaction,
        investablepercnetChange,
        editAccounts,
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  return useContext(TransactionContext);
};

export default TransactionContext;
