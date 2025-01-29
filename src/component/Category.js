import React, { useEffect, useState } from "react";
import Icons from "../pages/Icons";
import MyCards from "./MyCards";
import {
  websiteCon,
  prototypeCon,
  graphicDesigningCon,
  applicationCon,
} from "../api_data/data";

const Category = (props) => {
  const [websiteContent, setWebsiteContent] = useState([]);
  const [prototypeContent, setPrototypeContent] = useState([]);
  const [applicationContent, setApplicationContent] = useState([]);
  const [graphicDesigningContent, setGraphicDesigningContent] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      setWebsiteContent(websiteCon);
      setPrototypeContent(prototypeCon);
      setApplicationContent(applicationCon);
      setGraphicDesigningContent(graphicDesigningCon);
    };

    fetchData();
  }, []);
  function getContent() {
    let content;
    if (props.type === "Website" || props.type === "Plugin") {
      content = websiteContent;
    } else if (props.type === "Prototype") {
      content = prototypeContent;
    } else if (props.type === "Application") {
      content = applicationContent;
    }
    else if (props.type === "Graphic Designing") {
      content = graphicDesigningContent;
    }
    const myContent = content.map((item) => (
      <>
        <div className="font-s">
          <p className="mb-4">{item.paragraphOne}</p>
          <p>{item.paragraphTwo}</p>
          <Icons item={item} />
        </div>
      </>
    ));
    return myContent;
  }
  return (
    <>
      <div className="body-cards">
        <div className="my-category py-3 px-4 mb-5">
          <h5>
            Category: <span style={{ color: "#f55276" }}>{props.type}</span>
          </h5>
          <hr />

          {getContent()}
        </div>
        <div>
          <MyCards type={props.type} />
        </div>
      </div>
    </>
  );
};

export default Category;
