import React from "react";
import { Link } from "react-router-dom";
import mydp from "../assets/images/new-dp.png";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="about-me text-justify d-flex align-items-center flex-column">
        <div className="circle-container my-4">
          <img src={mydp} alt="Circular" />
        </div>
        <h3>Ashhad Zafar Khan</h3>
        <p className="px-4 my-2 font-s">
        Enthusiastic, highly organized Software Engineer having fundamental knowldege of software design and development. Keen interest in building full
stack websites as well as applications with interactive and user-centric interface. Manage multiple priorities with a positive attitude. Willingness to
take on added responsibilities to meet team goals. Complex problem-solver with analytical and driven mindset. Dedicated to achieving demanding
development objectives according to tight schedules while producing impeccable code.
        </p>
        <Link
          to="/about"
          className="btn-main d-flex align-items-center justify-content-center my-4"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
