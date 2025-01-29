import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="py-4"></div>
      <nav className="navbar navbar-expand-lg fixed-top my-4 rounded mx-auto">
        <div className="container-fluid">
          <Link className="mx-2 navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">



              <Link className="nav-link mx-2" to="/about">
                About
              </Link>

              <Link className="nav-link mx-2" to="/website">
                Websites
              </Link>
              <Link className="nav-link mx-2" to="/application">
                Applications
              </Link>
              <Link className="nav-link mx-2" to="/prototype">
                Prototypes
              </Link>
              <Link className="nav-link mx-2" to="/services">
                Services
              </Link>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
