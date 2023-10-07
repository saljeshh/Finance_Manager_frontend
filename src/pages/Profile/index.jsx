import React, { useEffect, useState } from "react";
import "./Profile.scss";
import profile from "../../assets/icons/profile.png";
import Button from "../../components/ui/Button";
import LinkHelper from "../../components/ui/LinkHelper";

import { useAuth } from "../../context/auth-context";
import { useAxios } from "../../hooks/useAxios";

const ProfilePage = () => {
  const { logout, token } = useAuth();
  const [user, setUser] = useState();
  const axios = useAxios();

  const logoutHandler = () => {
    logout();
    window.location.href = "/";
  };

  useEffect(() => {
    axios
      .get("/api/profile")
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!token) {
    window.location.href = "/login";
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <div className="boxshadow profile__pro">
        <div className="profile__profilepic">
          <img className="profile__img" src={profile} alt="" />
        </div>
        <div className="profile__container">
          <div className="profile__left">
            <p className="profile__info">{user.username}</p>
            <div className="profile__mini">
              <p className="profile__info">NEPAL</p>
              <p className="profile__info">{user.city}</p>
            </div>
          </div>
          <div className="profile__right">
            <p className="profile__info">{user.email}</p>
            <div className="profile__mini">
              <p className="profile__info">{user.currency}</p>
              <p className="profile__info">{user.phone_no}</p>
            </div>
          </div>
        </div>
        <div className="profile__buttons">
          <Button text="Logout" onClick={logoutHandler} />
          <LinkHelper to="/changepassword" name="Change Password" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
