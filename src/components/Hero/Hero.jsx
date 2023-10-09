import React, { useState } from "react";
import "./Hero.css";
import VideoDialog from "./VideoDialog";
import excel2023 from "../../assets/png/excel-logo-with-text-2023.png";

const Hero = () => {
  const [open, setOpen] = useState(false);

  // const handleClickImage = () => {
  //   const externalURL = "https://www.excelmec.org/";
  //   window.location.href = externalURL;
  // };
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
          <img className="excel_logo" src={excel2023} alt=""/>
        {/* <p>Excel 2023</p>onClick={handleClickImage} */}
      </div>
      <div className="hero__desc_area">
        <h1>Evolution in progress...</h1>
        <p>
          The national techno-managerial symposium of Govt. Model Engineering
          College.
        </p>
      </div>
      <div className="video_btn" onClick={handleClick}>
        <div className="play"></div>
      </div>
    </div>
  );
};

export default Hero;