import React, { useState } from "react";
import "./Register.scss";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import { axiosWithoutHeader } from "../../api/axios";
// import { useAxios } from "../../hooks/useAxios";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [currency, setCurrency] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // axios hook
  // const axios = useAxios();

  const submitHandler = async (e) => {
    const payload = {
      username: username,
      email: email,
      password: password,
      confirm_password: confirmPassword,
      currency: currency,
      city: city,
      phone_no: phoneNumber,
    };

    try {
      const res = await axiosWithoutHeader.post("/register", payload);
      // const init_investable = await axios.post("/api/investable", {
      //   investable_percent: 50,
      // });
      // const init_account = await axios.post("/api/accounts", {
      //   cash: 0,
      //   bank: 0,
      // });

      console.log(res);
    } catch (error) {
      console.log(error);
    }

    setUserName("");
    setPassword("");
    setCurrency("");
    setCity("");
    setEmail("");
    setConfirmPassword("");
    setCountry("");
    setPhoneNumber("");
  };

  return (
    <div className="register">
      <div className="boxshadow register__reg">
        <h1>Register your Account</h1>
        <div className="register__wrapper">
          <div className="left">
            <input
              className="input"
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              className="input"
              type="text"
              placeholder="Currency"
              onChange={(e) => setCurrency(e.target.value)}
              value={currency}
            />
            <input
              className="input"
              type="text"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>

          <div className="right">
            <input
              className="input"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              className="input"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <input
              className="input"
              type="text"
              placeholder="Country"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
            <input
              className="input"
              type="text"
              placeholder="PhoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
        </div>
        <Button type="submit" text="Register" onClick={submitHandler} />
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
