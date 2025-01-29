import React, { useState, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import smartPhone from "../assets/images/smartphone-g-stylus.png";
import smartPhoneOne from "../assets/images/smartphone1.png";

const VideoDisplay = (props) => {
  const [play, setPlay] = useState(true);
  const vidRef = useRef(null);
  const handlePlay = () => {
    setPlay(!play);
    if (play === false) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <div className="mobile-frame">
          <img src={props.moto ? smartPhone : smartPhoneOne} alt="" />
          <video className="video-content" ref={vidRef} autoPlay loop muted>
            <source src={props.video} type="video/mp4" />
          </video>

          <button className="video-btn" onClick={handlePlay}>
            {play ? <FaPause size={20} /> : <FaPlay size={20} />}
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoDisplay;
