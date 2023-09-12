import React, { useState } from "react";
import "./Hero.css";
import VideoDialog from "./VideoDialog";
import excel2022 from "../../assets/png/excel2023.png";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="hero__section_main">
      <VideoDialog open={open} handleClose={handleClose} />
      <div className="excel__logo_container">
        <img className="excel_logo" src={excel2022} alt="" />
        <p>Excel 2023</p>
      </div>
      <div className="hero__desc_area">
        <h1>We are coming soon...</h1>
        {/* <h3>Excel is evolving!</h3> */}
        <p>
          The national techno-managerial symposium of Govt. Model Engineering
          College
        </p>
      </div>
      <div className="video_btn" onClick={handleClick}>
        <div className="play"></div>
      </div>
    </div>
  );
};

export default Hero;