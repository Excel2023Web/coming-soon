import React from "react";
import "./StayConnected.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { ImLinkedin2, ImTwitter } from "react-icons/im";
const StayConnected = () => {
  return (
    <div className="stayconnected__container">
      <h1>Stay Connected</h1>

      <div className="footer_icons">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/excelmec/"
        >
          <AiOutlineInstagram />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/excelmec"
        >
          <GrFacebookOption />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/company/excelmec/"
        >
          <ImLinkedin2 />
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/excelmec">
          <ImTwitter />
        </a>
      </div>
    </div>
  );
};

export default StayConnected;
