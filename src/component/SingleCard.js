import React from "react";
import { Link } from "react-router-dom";

const SingleCard = (props) => {
  return (
    <div className="card mb-5">
      <Link to={props.pageRedirect}>
        <img src={props.image} className="card-img-top img-fluid" alt="Card" />
      </Link>

      <div className="card-body px-4 card-body-custom">
        <Link to="/website" className="small-link text-uppercase">
          {props.type}
        </Link>
        <h5 className="card-title mt-2">{props.title} </h5>
        <p className="card-text">{props.about}</p>
        <div className="d-flex justify-content-between">
          <Link
            className="nav-link small-link text-uppercase"
            aria-current="page"
            style={{ color: "#f55276" }}
            to={props.pageRedirect}
          >
            Read more
          </Link>
          {props.link !== "" && props.type === 'Website' ? (
            <Link to={props.link} className="small-link text-uppercase">
              {props.name}
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
