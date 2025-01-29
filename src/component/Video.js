import React, { useState, useRef, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import laptop from "../assets/images/laptop.png";
import laptop1 from "../assets/images/laptop720.png";
import laptop2 from "../assets/images/laptop1080.png";

const Video = (props) => {
  const [play, setPlay] = useState(true);
  const vidRef = useRef(null);
  const [img, setImg] = useState(
    window.innerWidth > 350 && window.innerWidth < 410
      ? laptop1
      : window.innerWidth > 410 && window.innerWidth < 1024
        ? laptop2
        : laptop
  );

  const handlePlay = () => {
    setPlay(!play);
    if (play === false) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setImg(
        width > 350 && width < 410
          ? laptop1
          : width > 410 && width < 1024
            ? laptop2
            : laptop
      );
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="classhey d-flex justify-content-center my-5">
        <div className="mobile-frame">
          <img src={img} alt="" />
          <video
            className="video-content-plugin "
            ref={vidRef}
            autoPlay
            loop
            muted
          >
            <source src={props.video} type="video/mp4" />
          </video>

          <button className="video-btn-plugin" onClick={handlePlay}>
            {play ? <FaPause size={20} /> : <FaPlay size={20} />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Video;
