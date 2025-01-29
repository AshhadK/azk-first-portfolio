import React, { useState, useEffect } from "react";
import "./FloatingArrow.css";
import { FaAngleUp } from "react-icons/fa";

const FloatingArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show/hide arrow based on scroll position
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      // Adjust the threshold based on the percentage of the page height
      const threshold = (windowHeight / scrollHeight) * 100;

      if (scrollTop > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`floating-arrow btn ${isVisible ? " visible" : ""}`}
      onClick={scrollToTop}
    >
      {<FaAngleUp size="30px" />}
    </button>
  );
};

export default FloatingArrow;
