import React, {  useState } from "react";
import "./Hero.css";
import VideoDialog from "./VideoDialog";
import excel2022 from "../../assets/svg/excel2022.svg";

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
      <VideoDialog open={open} handleClose={handleClose}/>
      <img
        className="excel_logo"
        src={excel2022}
        alt=""
      />
      <h1>We Are Coming Soon...</h1>
      <p>
        The national techno managerial symposium of Govt. Model Engineering College
      </p>
      
      <div className='video_btn' onClick={handleClick} >
          <div className='play'></div>
      </div>
    </div>
  );
};

export default Hero;
