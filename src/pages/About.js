import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import PageRedirect from "../component/PageRedirect";
import { saveAs } from "file-saver";
import Sidebar from "../component/Sidebar";
import { aboutMyself } from "../api_data/data";
// import cv_svg from "../assets/images/AZK-CV.svg";
import cv_pdf from "../assets/pdf/AZK-CV.pdf";

const About = () => {
  document.title = "Portfolio - AZK | About";
  const handleDownload = async () => {
    try {
      // Fetch the PDF file
      const response = await fetch(cv_pdf);
      const arrayBuffer = await response.arrayBuffer();

      // Create a Blob from the array buffer
      const blob = new Blob([arrayBuffer], { type: "application/pdf" });

      // Replace 'your-filename.pdf' with the desired filename
      saveAs(blob, "Ashhad Zafar Khan CV.pdf");
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  const [hide, setHide] = useState([]);
  const [msg, setMsg] = useState("Show CV");
  const display = () => {
    setHide(!hide);
    if (!hide) {
      setMsg("Show CV");
    } else {
      setMsg("Hide CV");
    }
  };
  const [aboutMe, setAboutMe] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      setAboutMe(aboutMyself);
    };

    fetchData();
  }, []);
  function getParagraphs() {
    const renderParagraphs = (item) => {
      return item.about.map((item, index) => <p key={index}>{item}</p>);
    };
    const myContent = aboutMe.map((item) => (
      <div className="mt-4">{renderParagraphs(item)}</div>
    ));
    // Return both myContent and description
    return myContent;
  }

  return (
    <div className="my-main">
      <Navbar />
      <PageRedirect type="About" />
      <div className="main-body">
        <div className="body-cards">
          <div className="my-content">
            <h2> About </h2>
            {getParagraphs()}
            <div className="btn-div">
              <button
                onClick={display}
                className="btn-main d-flex align-items-center justify-content-center my-4"
              >
                {msg}
              </button>
            </div>

            {/* <img
              style={{ display: hide ? "none" : "block" }}
              src={cv_svg}
              alt="CV"
            /> */}
            <div
              className="btn-div"
              style={{ display: hide ? "none" : "block" }}
            >
              <button
                onClick={handleDownload}
                className="btn-main d-flex align-items-center justify-content-center my-4"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
        <hr className="separator" />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default About;
