import React from "react";
import "./Register.scss";
import Input from "../../components/form/Input";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="boxshadow register__reg">
        <h1>Register your Account</h1>
        <div className="register__wrapper">
          <div className="left">
            <Input type="text" placeholder="Enter your first name" />
            <Input type="text" placeholder="Password" />
            <Input type="text" placeholder="Currency" />
            <Input type="text" placeholder="Country" />
          </div>

          <div className="right">
            <Input type="text" placeholder="Enter your last name" />
            <Input type="text" placeholder="Confirm Password" />
            <Input type="text" placeholder="City" />
            <Input type="text" placeholder="Postal Code" />
          </div>
        </div>
        <Button text="Register" />
        <p>
          Already have an account?{" "}
          <Link className="register__redirect" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
