import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero__section_main'>
        <img className='excel_logo' src="" alt="" />
        <h1>We Are Coming Soon..</h1>
        <p>The national techno managerial symposium of Govt. Model Engineering College</p>
        <video className="video_container" loop playsInline >
          <source src="https://excel2021.netlify.app/Aftermovie.mp4" type="video/Mp4" />
        </video>
    </div>
  )
}

export default Hero