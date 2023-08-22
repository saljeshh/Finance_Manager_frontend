import React from "react";
import "./Auth.scss";
import LinkHelper from "../ui/LinkHelper";

const Auth = () => {
  return (
    <>
      <LinkHelper to="/login" name="LOGIN" />
      <LinkHelper to="/register" name="SIGN UP" />
    </>
  );
};

export default Auth;
