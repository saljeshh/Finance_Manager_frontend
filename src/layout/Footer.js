import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer__foot">
        <p className="footer__left">Invest Now, Enjoy Later</p>
        <p className="footer__middle">
          Disclaimer: We are not responsible for any losses
        </p>
        <p className="footer__right">© www.financeguru.com 2023</p>
      </div>
    </div>
  );
};

export default Footer;
