import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { Oval as Loader } from "react-loader-spinner";
import { applicationArr, prototypeArr, websiteArr } from "../api_data/data.js";

const MyCards = (props) => {
  const [websiteData, setWebsiteData] = useState([]);
  const [prototypeData, setPrototypeData] = useState([]);
  const [applicationData, setApplicationData] = useState([]);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setWebsiteData(websiteArr);
      setPrototypeData(prototypeArr);
      setApplicationData(applicationArr);
    };

    fetchData();
    const timeoutId = setTimeout(() => {
      setVisibility(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);
  const cardsPerRow = 2;

  function generateCardRows() {
    const rows = [];
    let myData;
    if (props.type === "Website" || props.type === "Plugin") {
      myData = websiteData;
    } else if (props.type === "Prototype") {
      myData = prototypeData;
    } else if (props.type === "Application") {
      myData = applicationData;
    } else {
      myData = websiteData.concat(applicationData, prototypeData);
    }
    for (let i = 0; i < myData.length; i += cardsPerRow) {
      const row = myData.slice(i, i + cardsPerRow);
      const cardsInRow = row.map((cardProps, index) => {
        const isImageArray = Array.isArray(cardProps.image);

        return (
          <SingleCard
            key={index}
            pageRedirect={cardProps.pageRedirect}
            image={isImageArray ? cardProps.image[0] : cardProps.image}
            type={cardProps.type}
            title={cardProps.title}
            about={cardProps.about}
            link={cardProps.link}
            name={cardProps.name}
          />
        );
      });

      rows.push(
        <div key={i / cardsPerRow} className="my-cards">
          {cardsInRow}
        </div>
      );
    }

    return rows;
  }

  return (
    <>
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
        {generateCardRows()}
      </div>
    </>
  );
};

export default MyCards;
