import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const ImageSlider = (props) => {
  const isImageArray = Array.isArray(props.image);

  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      <FaAngleRight color="rgba(0,0,0,0.6)" size="35px" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      <FaAngleLeft color="rgba(0,0,0,0.6)" size="35px" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {isImageArray ? (
          props.image.map((image, index) => (
            <div className="img-container" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))
        ) : (
          <div className="img-container">
            <img src={props.image} alt="" />
          </div>
        )}
      </Slider>
    </div>
  );
};

export default ImageSlider;
