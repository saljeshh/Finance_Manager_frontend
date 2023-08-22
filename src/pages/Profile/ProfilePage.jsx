import React from "react";
import "./Profile.scss";
import profile from "../../assets/icons/profile.png";
import Button from "../../components/ui/Button";
import LinkHelper from "../../components/ui/LinkHelper";

const ProfilePage = () => {
  return (
    <div className="profile">
      <div className="boxshadow profile__pro">
        <div className="profile__profilepic">
          <img className="profile__img" src={profile} alt="" />
        </div>
        <div className="profile__container">
          <div className="profile__left">
            <p className="profile__info">Full Name</p>
            <div className="profile__mini">
              <p className="profile__info">Country</p>
              <p className="profile__info">City</p>
            </div>
          </div>
          <div className="profile__right">
            <p className="profile__info">user@gmail.com</p>
            <div className="profile__mini">
              <p className="profile__info">Postal code</p>
              <p className="profile__info">NPR</p>
            </div>
          </div>
        </div>
        <div className="profile__buttons">
          <Button text="Logout" />
          <LinkHelper to="/changepassword" name="Change Password" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
