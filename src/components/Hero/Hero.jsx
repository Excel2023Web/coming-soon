import React, {  useState } from "react";
import "./Hero.css";
// import Aftermovie from "../../assets/mp4/Aftermovie.mp4";
import VideoDialog from "./VideoDialog";

const Hero = () => {
  // const btnRef = useRef(null);
  // const clipRef = useRef(null);
  // const vidRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    // btnRef.current.classList.add("active");
    // clipRef.current.classList.add("active");
    setOpen(true);
    // vidRef.current.play();
  };
  const handleClose = () => {
    // btnRef.current.classList.remove("active");
    // clipRef.current.classList.remove("active");
    // vidRef.current.pause();
    setOpen(false);
  };
  return (
    <div className="hero__section_main">
      <VideoDialog open={open} handleClose={handleClose}/>
      <img
        className="excel_logo"
        src="https://www.excelmec.org/static/media/home_logo_excel.932cc8102da68199bc0f34683e7527c1.svg"
        alt=""
      />
      <h1>We Are Coming Soon...</h1>
      <p>
        The national techno managerial symposium of Govt. Model Engineering
        College
      </p>
      <div className='video_btn'  onClick={handleClick}>
          <div className='play'></div>
        </div>
      
      {/* <div className='video_btn' ref={btnRef} onClick={handleClick}>
          <div className='play'></div>
        </div> */}
      {/* <div className='video_clip' ref={clipRef}>
            <video src={Aftermovie} ref={vidRef} controls></video>
            <b class="close" onClick={handleClose}>Close</b>
        </div> */}
    </div>
  );
};

export default Hero;
