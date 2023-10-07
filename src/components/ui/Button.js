import React from "react";
import "./Button.scss";

const Button = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button className="button" type={props.type} onClick={handleClick}>
      {props.text}
    </button>
  );
};

export default Button;
