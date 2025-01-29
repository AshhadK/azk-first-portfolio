import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="my-footer rounded">
        <footer className="py-3 my-4">
          <div className="copyright text-center ">
            <Link to="https://www.facebook.com/ashhadrider2" className="mx-2">
              {<FaFacebookF />}
            </Link>
            <Link to="https://www.instagram.com/ashhad_z" className="mx-2">
              {<FaInstagram />}
            </Link>
            <Link to="https://github.com/AshhadK" className="mx-2">
              {<FaGithub />}
            </Link>
            <Link to="https://www.linkedin.com/in/ashhad-zak/" className="mx-2">
              {<FaLinkedin />}
            </Link>
          </div>
          <hr className="mx-5 px-5 bg-dark" />
          <ul className="nav justify-content-center mb-3">
            <li className="nav-item">
              <Link to="/about" className="nav-link px-2 ">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/website" className="nav-link px-2 ">
                Websites
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/apps" className="nav-link px-2 ">
                Applications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/prototype" className="nav-link px-2 ">
                Prototypes
              </Link>
            </li>
          </ul>
          <hr className="mx-5 px-5 bg-dark" />
          <p className="copyright text-center">
            All rights reserved © 2025 AZK
          </p>
        </footer>
      </div>
      <div className="pt-1"></div>
    </>
  );
};

export default Footer;
