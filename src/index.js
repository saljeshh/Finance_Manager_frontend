import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/auth-context";
import { TransactionContextProvider } from "./context/transactionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TransactionContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TransactionContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
