import React from "react";
import "./Login.scss";
import Input from "../../components/form/Input";
import Button from "../../components/ui/Button";
import image from "../../assets/icons/profile.png";
import LinkHelper from "../../components/ui/LinkHelper";

const Login = () => {
  return (
    <div className="login boxshadow">
      <div className=" login__lo">
        <h1>LOGIN TO FINANCE GURU</h1>
        <img src={image} alt="" />
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Password" />
        <Button text="Log In" />

        <p>Forget Password ?</p>

        <LinkHelper to="/register" name="Create an Account?" />
      </div>
    </div>
  );
};

export default Login;
