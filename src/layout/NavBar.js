import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import Auth from "../components/NavBar/Auth";
import Profile from "../components/NavBar/Profile";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import hamburger from "../assets/icons/hamburger.png";
import cross from "../assets/icons/cross.png";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [toggle, setToggle] = useState(false);

  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [token]);
  const showNavbarItems = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navbar boxshadow">
      {/* non responsive nav bar */}
      <div className="container navbar__nav">
        <Link to="/" className="navbar__logo">
          FINANCE <span>GURU</span>
        </Link>
        <div className="navbar__responsive">
          {loggedIn && (
            <ul className="navbar__links">
              <Link to="/home" className="navbar__link ">
                HOME
              </Link>
              <Link to="/dashboard" className="navbar__link">
                DASHBOARD
              </Link>
              <Link to="/invest" className="navbar__link">
                INVEST
              </Link>
            </ul>
          )}

          <div className="navbar__authentication">
            {!loggedIn ? <Auth /> : <Profile />}
          </div>
        </div>

        {/* hamburger and close button toggle */}

        <div
          onClick={showNavbarItems}
          className={toggle ? "navbar__hamburger" : "hidden"}
        >
          <img src={hamburger} alt="=" width="30px" />
        </div>
        <div
          onClick={showNavbarItems}
          className={toggle ? "hidden" : "navbar__hamburger"}
        >
          <img src={cross} alt="=" width="40px" />
        </div>
      </div>

      {/* show when hamburger is clicked */}
      <div className={!toggle ? "navbar__mobile container" : "hidden"}>
        <ul className="navbar__linksmobile">
          <Link to="/home" className="navbar__link ">
            HOME
          </Link>
          <Link to="/dashboard" className="navbar__link">
            DASHBOARD
          </Link>
          <Link to="/invest" className="navbar__link">
            INVEST
          </Link>
        </ul>
        <div className="navbar__authenticationmobile">
          {!loggedIn ? <Auth /> : <Profile />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
