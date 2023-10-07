import React, { useState } from "react";
import "./Login.scss";
import Button from "../../components/ui/Button";
import image from "../../assets/icons/profile.png";
import LinkHelper from "../../components/ui/LinkHelper";
import { axiosWithoutHeader } from "../../api/axios";
import { useAuth } from "../../context/auth-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, logout } = useAuth();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    const payload = {
      email,
      password,
    };

    try {
      const res = await axiosWithoutHeader.post("/login", payload);
      const access_token = res.data.access_token;
      const expiry = res.data.token_expiry;
      localStorage.setItem("tokenExpiry", expiry);
      login(access_token);
      window.location.href = "/home";
    } catch (error) {
      console.log(error);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login boxshadow">
      <div className=" login__lo">
        <h1>LOGIN TO FINANCE GURU</h1>
        <img src={image} alt="" />
        <input
          type="text"
          placeholder="Email"
          className="input"
          value={email}
          onChange={emailChangeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={passwordChangeHandler}
        />
        <Button type="submit" text="Log In" onClick={submitHandler} />

        <p>Forget Password ?</p>

        <LinkHelper to="/register" name="Create an Account?" />
      </div>
    </div>
  );
};

export default Login;
