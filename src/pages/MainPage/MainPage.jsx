import React from "react";
import { Hero, Legacy, StayConnected } from "../../components";
import Stars from "../../components/Stars/Stars";
import "./MainPage.css";
const MainPage = () => {
  return (
    <div className="main__page">
      <Stars>
      <Legacy />
      {/* <div className="main__page_Hero"> */}
        <Hero />
      {/* </div> */}
      {/* <div className="main__page_StayConnected"> */}
        <StayConnected />
      {/* </div> */}
      </Stars>
    </div>
  );
};

export default MainPage;
