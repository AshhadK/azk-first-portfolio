import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const PageRedirect = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show/hide arrow based on scroll position
    setIsVisible(props.website !== undefined);

    // Cleanup event listener on component unmount
  }, [props.website]);
  return (
    <>
      <div className="page-redirect  mb-4 text-uppercase d-flex rounded align-items-center px-4 py-1">
        <Link to="/">{props.type === "About" || props.type === "Services" ? "" : "Home"}</Link>
        {props.type === "About" || props.type === "Services" ? (
          ""
        ) : (
          <span className="mx-2 pb-1"> {<FaAngleRight size="" />}</span>
        )}

        <Link
          style={{ display: isVisible ? "block" : "none" }}
          to={`/${props.type.toLowerCase()}`}
        >
          {props.type}
        </Link>

        <span
          style={{ display: isVisible ? "block" : "none" }}
          className="mx-2 pb-1"
        >
          {" "}
          {<FaAngleRight size="" />}
        </span>
        <Link
          className="bold"
          to={isVisible ? "" : `/${props.type.toLowerCase()}`}
        >
          {isVisible ? props.website : props.type}
        </Link>
      </div>
    </>
  );
};

export default PageRedirect;
