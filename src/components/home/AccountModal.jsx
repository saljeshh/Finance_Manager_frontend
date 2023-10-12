import React, { useState } from "react";
import "./AccountModal.scss";
import { useTransaction } from "../../context/transactionContext";

const AccountModal = () => {
  const [cash, setCash] = useState();
  const [bank, setBank] = useState();
  const { editAccounts } = useTransaction();

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      cash: cash,
      bank: bank,
    };
    editAccounts(payload);
  };

  return (
    <form className="accmodal__modal" onSubmit={submitHandler}>
      <div className="accmodal__row">
        <div className="accmodal__box1">
          <label htmlFor="cash" className="accmodal__label">
            Edit Cank Balance
          </label>
          <input
            type="number"
            className="accmodal__input"
            id="cash"
            placeholder="Cash"
            onChange={(e) => setCash(e.target.value)}
          />
        </div>
        <div className="accmodal__box2">
          <label htmlFor="bank" className="accmodal__label">
            Edit Bank Balance
          </label>
          <input
            type="number"
            className="accmodal__input"
            id="bank"
            placeholder="Bank"
            onChange={(e) => setBank(e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="accmodal__button">
        Edit
      </button>
    </form>
  );
};

export default AccountModal;
