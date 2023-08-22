import React, { useContext, useState } from "react";
import "./NavBar.scss";
import Auth from "../components/NavBar/Auth";
import Profile from "../components/NavBar/Profile";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth-context";
import hamburger from "../assets/icons/hamburger.png";
import cross from "../assets/icons/cross.png";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isAuth = useContext(AuthContext);

  const showNavbarItems = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar boxshadow">
      {/* non responsive nav bar */}
      <div className="container navbar__nav">
        <Link to="/" className="navbar__logo">
          FINANCE <span>GURU</span>
        </Link>
        <div className="navbar__responsive">
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
          <div className="navbar__authentication">
            {!isAuth ? <Auth /> : <Profile />}
          </div>
        </div>

        {/* hamburger and close button toggle */}

        <div
          onClick={showNavbarItems}
          className={!showMenu ? "navbar__hamburger" : "hidden"}
        >
          <img src={hamburger} alt="=" width="30px" />
        </div>
        <div
          onClick={showNavbarItems}
          className={!showMenu ? "hidden" : "navbar__hamburger"}
        >
          <img src={cross} alt="=" width="40px" />
        </div>
      </div>

      {/* show when hamburger is clicked */}
      <div className={showMenu ? "navbar__mobile container" : "hidden"}>
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
          {isAuth ? <Auth /> : <Profile />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
