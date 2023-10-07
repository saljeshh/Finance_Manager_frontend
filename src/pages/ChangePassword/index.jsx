import React from "react";
import "./ChangePassword.scss";
import profile from "../../assets/icons/profile.png";
import Input from "../../components/form/Input";
import Button from "../../components/ui/Button";

const ChangePassword = () => {
  return (
    <div className="changepass">
      <div className="boxshadow changepass__pass">
        <div className="changepass__profilepic">
          <img src={profile} alt="" className="changepass__img" />
        </div>
        <div className="changepass__form">
          <Input type="password" placeholder="Old Password" />
          <Input type="password" placeholder="New Password" />
          <Input type="password" placeholder="Confirm Password" />
        </div>
        <Button text="Reset Button" />
      </div>
    </div>
  );
};

export default ChangePassword;
