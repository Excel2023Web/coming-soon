import React from "react";
import { Hero, Legacy, StayConnected } from "../../components";
import Stars from "../../components/Stars/Stars";
import "./MainPage.css";
const MainPage = () => {
  return (
    <div className="main__page">
      <Stars>
      <Legacy />
      <Hero />
      <StayConnected />
      </Stars>
    </div>
  );
};

export default MainPage;
