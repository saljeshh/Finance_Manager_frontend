import { Link } from "react-router-dom";
import "./LinkHelper.scss";
import React from "react";

const LinkHelper = (props) => {
  return (
    <>
      <Link className="linkhelper" to={props.to}>
        {props.name}
      </Link>
    </>
  );
};

export default LinkHelper;
