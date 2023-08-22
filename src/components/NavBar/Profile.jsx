import React from "react";
import profile from "../../assets/icons/profile.png";
import { Link } from "react-router-dom";
import "./Profile.scss";

const Profile = () => {
  return (
    <Link to="/profile" className="nav__profile">
      <img src={profile} alt="" className="nav__pic" />
    </Link>
  );
};

export default Profile;
