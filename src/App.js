import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Website from "./pages/Website";
import Applications from "./pages/Applications";
import Prototypes from "./pages/Prototypes";
import GraphicDesigning from "./pages/GraphicDesigning";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from "./pages/Content";
import FloatingArrow from "./component/FloatingArrow";
import About from "./pages/About";
import Services from './pages/Services';
import { websiteArr, prototypeArr, applicationArr } from "./api_data/data";

const App = () => {
  const [websiteData, setWebsiteData] = useState([]);
  const [prototypeData, setPrototypeData] = useState([]);
  const [applicationData, setApplicationData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setWebsiteData(websiteArr);
      setPrototypeData(prototypeArr);
      setApplicationData(applicationArr);
    };

    fetchData();
  }, []);

  document.body.style.background =
    "radial-gradient(at center, #d17fb6, #c5a8ee)";
  function getContent() {
    let content;
    content = websiteData.concat(applicationData, prototypeData);
    const myContent = content.map((item, index) => {
      return (
        <Route
          key={index} // Add a unique key for each route
          path={item.pageRedirect}
          exact
          element={
            <Content
              type={item.type}
              name={item.name}
              title={item.title}
              image={item.image}
              paragraphs={item.paragraphs}
              techstack={item.techstack}
              link={item.link}
              githubLink={item.githubLink}
            />
          }
        />
      );
    });

    return myContent;
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />

          <Route path="/website" exact element={<Website />} />
          <Route path="/plugin" exact element={<Website />} />
          <Route path="/application" exact element={<Applications />} />
          {getContent()}
          <Route path="/prototype" exact element={<Prototypes />} />
          <Route path="/graphic" exact element={<GraphicDesigning />} />
          <Route path="/services" exact element={<Services />} />
        </Routes>
      </Router>
      <FloatingArrow />
    </>
  );
};

export default App;
