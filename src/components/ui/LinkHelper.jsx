import { Link } from "react-router-dom";
import "./LinkHelper.scss";
import React from "react";

const LinkHelper = (props) => {
  const clickHandler = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <>
      <Link className="linkhelper" to={props.to} onClick={clickHandler}>
        {props.name}
      </Link>
    </>
  );
};

export default LinkHelper;
