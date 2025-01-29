import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import PageRedirect from "../component/PageRedirect";
import Video from "../component/Video";
import salezman from "../assets/videos/salezman.mp4";
import jooble from "../assets/videos/jooble-og.mp4";
import bpYard from "../assets/videos/bpyard.mp4";
import expense_diaries from "../assets/videos/expense_diaries.mp4";
import plugin from "../assets/videos/datayard.mp4";
import signupLogin from "../assets/videos/signup-login.mp4";
import ImageSlider from "../component/Slider";
import { Oval as Loader } from "react-loader-spinner";
import VideoDisplay from "../component/VideoDisplay";
import { websiteCon, prototypeCon, applicationCon } from "../api_data/data";


const Content = (props) => {
  const [websiteContent, setWebsiteContent] = useState([]);
  const [prototypeContent, setPrototypeContent] = useState([]);
  const [applicationContent, setApplicationContent] = useState([]);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setWebsiteContent(websiteCon);
      setPrototypeContent(prototypeCon);
      setApplicationContent(applicationCon);
    };

    fetchData();
    const timeoutId = setTimeout(() => {
      setVisibility(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  function getParagraphs() {

    return (
      <div>
        {props.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    );
  }

  function techStack() {
    return (
      <div className="mt-5">
        <strong> Technology </strong>
        {props.techstack?.map((imageUrl, imageIndex) => (
          <img
            className="image-style"
            style={{
              mixBlendMode: 'multiply',
            }}
            key={imageIndex}
            src={imageUrl}
            alt={`alpha-${imageIndex + 1}`}
          />
        ))}
      </div>
    );
  }




  function getContent() {
    let content;

    if (props.type === "Website" || props.type === "Plugin") {
      content = websiteContent;
    } else if (props.type === "Prototype") {
      content = prototypeContent;
    } else if (props.type === "Application") {
      content = applicationContent;
    } else {
      content = websiteContent.concat(prototypeContent, applicationContent);
    }


    const myContent = content.map((item, index) => (
      <div key={index}>
        <p className="mt-5">{item.paragraphOne}</p>
        <p>{item.paragraphTwo}</p>
        <p>{item.paragraphThree}</p>
      </div>
    ));
    // Return both myContent and description
    return myContent;
  }



  return (
    <>
      <div className="my-main">
        <Navbar />
        <PageRedirect type={props.type} website={props.name} />
        <div className="main-body">
          <div className="body-cards">
            <div className="my-content">
              <h3> {props.title} </h3>
              <div className="py-3">
                <a href="/">{props.type}</a>
              </div>
              {!visibility && (
                <div
                  className="d-flex justify-content-center"
                  style={{ marginTop: "20%" }}
                >
                  <Loader
                    type="Oval"
                    color="#5e3f68"
                    height={60}
                    width={60}
                    className="loader"
                  />
                </div>
              )}
              <div style={{ visibility: visibility ? "visible" : "hidden" }}>
                {
                  props.type !== "Website" ? (
                    <img
                      src={props.image}
                      className="card-img-top img-fluid"
                      alt="Card"
                    />
                  ) : Array.isArray(props.image) && props.image.length > 1 ? (
                    <ImageSlider image={props.image} />
                  ) : (
                    <img
                      src={Array.isArray(props.image) ? props.image[0] : props.image}
                      className="card-img-top img-fluid"
                      alt="Card"
                    />
                  )
                }


                {/* <ImageSlider image={props.image} />{" "} */}
                {props.type === "Plugin" ? <Video video={plugin} /> : ""}
                {props.type === "Application" ? (
                  props.name === "Salezman-App" ? (
                    <VideoDisplay video={salezman} moto={false} />
                  ) : props.name === "Jooble-App" ? (
                    <VideoDisplay video={jooble} moto={true} />
                  ) : props.name === "BP-Yard" ? (
                    <VideoDisplay video={bpYard} moto={true} />
                  ) : props.name === "Test Signup Login" ? (
                    <VideoDisplay video={signupLogin} moto={true} />
                  )
                    : props.name === "Expense-Diaries" ? (
                      <VideoDisplay video={expense_diaries} moto={true} />
                    )
                      : (
                        ""
                      )
                ) : (
                  ""
                )}


                <li style={{ display: 'flex', justifyContent: 'start', alignItems: 'flex-start', marginTop: '20px', gap: '40px' }}>
                  <div>
                    <strong>{props.type !== 'Application' ? "Website Link:" : "Prototype"} </strong> <br />
                    {props.link ? (
                      <a
                        href={props.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-button-link"
                      >
                        {props.type !== 'Application' ? " View Website" : "Figma Link"}
                      </a>
                    ) : (
                      <a
                        className="portfolio-button-link-disabled"
                        href={props.link}
                      >
                        {props.type !== 'Application' ? " View Website" : "Figma Link"}
                      </a>
                    )}
                  </div>

                  <div>
                    <strong>Github:</strong> <br />
                    <a
                      href={props.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-button-link"
                    >
                      View Source Code
                    </a>
                  </div>
                </li>





                <div className="font-s">
                  {/* {techStack()} */}
                  {getContent()}
                  {getParagraphs()}
                  {techStack()}
                </div>
              </div>


              {/* <div className="d-flex justify-content-end">
                <a
                  href={props.githubLink}
                  style={{ color: "purple" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github link &nbsp;
                  <FaGithub />
                </a>
              </div> */}
            </div>
          </div>
          <hr className="separator" />
          <Sidebar />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Content;
