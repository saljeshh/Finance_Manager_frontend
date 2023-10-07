import React from "react";
import Money from "../../assets/image/landing.png";
import "./Landing.scss";
import LinkHelper from "../../components/ui/LinkHelper";
import { useAuth } from "../../context/auth-context";

const Landing = () => {
  const { token } = useAuth();

  const redirectHandler = () => {
    if (token) {
      window.location.href = "/home";
    }

    if (!token) {
      window.location.href = "/login";
    }
  };

  return (
    <div className="landing">
      <div className="landing__content container">
        <div className="landing__left ">
          <div className="landing__hero boxshadow">
            <h1>
              MANAGING FINANCE IS <p>HARD</p>
            </h1>
            <h2>NOT WHEN</h2>
            <h2>WE ARE WITH YOU</h2>
          </div>
          <LinkHelper
            to="/login"
            name="Get Started >>"
            onClick={redirectHandler}
          />
        </div>
        <div className="landing__right">
          <img src={Money} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
