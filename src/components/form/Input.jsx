import React from "react";
import "./Input.scss";

const Input = (props) => {
  return (
    <input
      className="input"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
